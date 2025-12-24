import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

function Header() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./">
                <img
                    className="main-nav-logo-image"
                    src="/src/assets/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                {isAuthenticated ? (
                    <>
                        <a className="main-nav-item" href="./sign-in">
                            <i className="fa fa-user-circle"></i>
                            {user?.name || 'User'}
                        </a>
                        <a className="main-nav-item" href="./" onClick={() => dispatch(logout())}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </a>
                    </>
                ) : (
                    <a className="main-nav-item" href="./sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                )}
            </div>
        </nav>
    )
}
export default Header