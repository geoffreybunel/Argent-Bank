import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from '../api/axiosInstance';
import { setUser } from '../redux/authSlice';

function UserHero({ username, buttonText }) {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);

    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        if (!firstName || !lastName) return;
    
        setLoading(true);
    
        try {
          const response = await axiosInstance.put(
            '/profile',
            { firstName, lastName },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
    
          dispatch(setUser(response.data.body));
          setIsEditing(false);
        } catch {
          console.error('Erreur de mise à jour du profil');
        } finally {
          setLoading(false);
        }
      };

    return (
        <div className="header">
            {!isEditing ? (
                <>
                    <h1>Welcome back<br />{username}!</h1>
                    <button className="edit-button" onClick={() => setIsEditing(true)}>{buttonText}</button>
                </>
            ) : (
                <>
                    <h1>Welcome back</h1>
                    {/* <div className="edit-name-form">
                        <div className="edit-name-inputs">
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="edit-buttons">
                            <button  className="edit-button" onClick={handleSave} disabled={loading}>
                                Save
                            </button>
                            <button className="edit-button cancel" onClick={() => setIsEditing(false)}>
                                Cancel
                            </button>
                        </div>
                    </div> */}
                    <div className="edit-name-form">
                        <div className="edit-name-1">
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <button  className="edit-button" onClick={handleSave} disabled={loading}>
                                Save
                            </button>
                        </div>
                        <div className="edit-name-2">
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <button className="edit-button cancel" onClick={() => setIsEditing(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
export default UserHero