import bcrypt from 'bcryptjs';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import Header from "../components/header"
import Footer from "../components/Footer"
import FormInput from "../components/FormInput"
import users from '../data/users';

function SignIn() {
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDfault();

        // Récupérer les valeurs du formulaire
        const email = e.target.username.value;
        const password = e.target.password.value;

        const user = users.find((u) => u.email === email && u.password === password);

        // Exemple de validation (vous pouvez ajouter plus de logique ici)
        if (user) {
            // Vérifier le mot de passe hashé
            const isPasswordValid = bcrypt.compareSync(password, user.password);
            if (isPasswordValid) {
                // Envoyer les informations utilisateur à Redux
                dispatch(login({ firstName: user.firstName, lastName: user.lastName, email: user.email }));
            } else {
                alert('Email ou mot de passe incorrect.');
            }
        } else {
            alert('Utilisateur non trouvé.');
        }
    }

    return (
        <>
            <Header />

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
                    <a href="./user" className="sign-in-button">Sign In</a>
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
                    {/* <!--  --> */}
                    </form>
                </section>
            </main>

            <Footer />
        </>
    )
}
export default SignIn