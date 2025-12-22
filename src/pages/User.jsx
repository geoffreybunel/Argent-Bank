import Header from "../components/header"
import Footer from "../components/Footer"
import Account from "../components/Account"
import UserHero from "../components/UserHero"

function User() {
    return (
        <>  
            <Header />

            <main className="main bg-dark">
                <UserHero 
                    username="Tony Jarvis"
                    buttonText="Edit Name"
                />

                <h2 className="sr-only">Accounts</h2>
                <Account 
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                    buttonText="View transactions"
                />
                <Account 
                    title="Argent Bank Savings (x6712)"
                    amount="$10,928.42"
                    description="Available Balance"
                    buttonText="View transactions"
                />
                <Account 
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance"
                    buttonText="View transactions"
                />
            </main>

            <Footer />
        </>
    )
}
export default User