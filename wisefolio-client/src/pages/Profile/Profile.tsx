import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import "./Profile.scss";
import { fetchUserData, updateUserData } from '../../api/userServer';

const Profile = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userId = localStorage.getItem('UserID'); 
        if (userId) {
          const fetchedUser = await fetchUserData(userId);
          setUser({
            fullName: fetchedUser.name,
            email: fetchedUser.email,
            password: '******', 
          });
        } else {
          alert('User ID not found. Please log in.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to load user data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    getUserData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };


  const handleSaveChanges = async () => {
    try {
      const userId = localStorage.getItem('UserID'); 
      if (!userId) {
        alert('User not authenticated!');
        return;
      }

      await updateUserData(
        userId,
        user.fullName,
        user.password !== '******' ? user.password : undefined
      );

      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <Header />
      <div className="profile">
        <Sidebar />
        <div className="profile__settings">
          <h1 className="profile__title">Profile Settings</h1>
          <form className="profile__form">
            <label className="profile__form-label">
              Full Name
              <input
                className="profile__form-input"
                type="text"
                name="fullName"
                value={user.fullName}
                onChange={handleInputChange}
              />
            </label>
            <label className="profile__form-label">
              Email
              <input
                className="profile__form-input"
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                disabled
              />
            </label>
            <label className="profile__form-label">
              Password
              <input
                className="profile__form-input"
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
              />
            </label>
            
            <button
              className="profile__form-button"
              type="button"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
