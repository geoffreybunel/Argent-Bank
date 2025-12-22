import Header from "../components/header"
import Footer from "../components/Footer"
import FormInput from "../components/FormInput"

function SignIn() {
    return (
        <>
            <Header />

            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    
                    <form>
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