import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import { login } from '../redux/authSlice';
import FormInput from "../components/FormInput"
import { loginUser } from '../api/authService';

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialise useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();

        // Récupérer les valeurs du formulaire
        const email = e.target.username.value;
        const password = e.target.password.value;
        const rememberMe = e.target['remember-me'].checked;

        try {
            const data = await loginUser(email, password);

            // Exemple : Le backend renvoie un token et des informations utilisateur
            const token = data.body.token;

            // Stocker le token selon le choix "Remember me"
            if (rememberMe) {
                // Stocker dans localStorage pour persistance longue durée
                localStorage.setItem('authToken', token);
            } else {
                // Stocker dans sessionStorage pour la session seulement
                sessionStorage.setItem('authToken', token);
            }

            // Mettre à jour l'état global avec les informations utilisateur
            dispatch(login(token));

            // Rediriger vers la page user après une connexion réussie
            navigate('/user'); // Redirection vers la page user
        } catch {
            alert('Identifiants incorrects'); 
        }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                
                <form onSubmit={handleLogin}>
                    <FormInput 
                        className="wrapper"
                        labelFor="username"
                        labelText="Username"
                        inputType="text"
                        inputId="username"
                    />
                    <FormInput 
                        className="wrapper"
                        labelFor="password"
                        labelText="Password"
                        inputType="password"
                        inputId="password"
                    />
                    <FormInput 
                        className="remember"
                        labelFor="remember-me"
                        labelText="Remember me"
                        inputType="checkbox"
                        inputId="remember-me"
                    />
                {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                {/* <a href="./user" className="sign-in-button">Sign In</a> */}
                {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                <button className="sign-in-button">Sign In</button>
                {/* <!--  --> */}
                </form>
            </section>
        </main>
    )
}
export default SignIn