import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { deleteUser, logout } from '../../apiCalls/user.calls';

export const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    const response = await logout();
    if (response.status === 200) {
      alert('User logged out successfully.');
      setUser({});
      navigate('/user/login');
    } else {
      alert(response.response.data.msg);
    }
  };

  const handleDelete = async (e) => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      const response = await deleteUser();
      if (response.status === 200) {
        alert('User deleted successfully.');
        setUser({});
        // navigate('/user/login');
        navigate('/');
      } else {
        alert(response.response.data.msg);
      }
    }
  };

  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3x1 my-3 font-bold">Profile</h1>
      <div className="mt-3">
        <h2 className="text-2xl">Name: {user.name}</h2>
        <h2 className="text-2xl">Email: {user.email}</h2>
        <h2 className="text-2xl">Age: {user.age}</h2>
      </div>
      <div className="mt-3">
        <button
          onClick={() => navigate('/user/update')}
          className="my-2 bg-green-600 text-white w-full py-2 rounded"
        >
          Update profile
        </button>
        <button
          onClick={() => navigate('/user/updatepassword')}
          className="my-2 bg-green-600 text-white w-full py-2 rounded"
        >
          Update password
        </button>
        <button
          onClick={handleLogout}
          className="my-2 bg-green-600 text-white w-full py-2 rounded"
        >
          Logout
        </button>
        <button
          onClick={handleDelete}
          className="my-2 bg-red-600 text-white w-full py-2 rounded"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};
