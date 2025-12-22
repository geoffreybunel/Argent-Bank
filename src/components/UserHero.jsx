function UserHero({ username, buttonText }) {
    return (
        <div className="header">
            <h1>Welcome back<br />{username}!</h1>
            <button className="edit-button">{buttonText}</button>
        </div>
    )
}
export default UserHero