import { useSelector } from 'react-redux';
import Account from "../components/Account"
import UserHero from "../components/UserHero"

function User() {
    const user = useSelector((state) => state.auth.user);

    if (!user) return null;

    return (
        <main className="main bg-dark">
            <UserHero 
                username={user ? `${user?.firstName} ${user?.lastName}` : ''}
                buttonText="Edit Name"
            />

            <h2 className="sr-only">Accounts</h2>
            <Account 
                title="Argent Bank Checking (x8349)"
                amount="$2,000.00"
                description="Available Balance"
                buttonText="View transactions"
            />
            <Account 
                title="Argent Bank Savings (x6712)"
                amount="$10,000.00"
                description="Available Balance"
                buttonText="View transactions"
            />
            <Account 
                title="Argent Bank Credit Card (x8349)"
                amount="$100.00"
                description="Current Balance"
                buttonText="View transactions"
            />
        </main>
    )
}
export default User