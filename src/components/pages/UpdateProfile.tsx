import React, {useContext, useState} from 'react';
import {UserContext} from '../../context/UserContext';
import {useNavigate} from 'react-router-dom';
import {updateUser} from '../../apiCalls/user.calls';
import {IUser, IUserType} from "../../types/userType";

interface UpdateProfileProps {
    user: IUser
}


export const UpdateProfile = (props: UpdateProfileProps) => {
    const {user, setUser} = useContext(UserContext);
  
    const [name, setName] = useState(props.user.name);
    const [email, setEmail] = useState(props.user.email);
    const [age, setAge] = useState(props.user.age);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
/** napisać omita na brakujace*/
        const data: any = {name, email, age};

        const response = await updateUser(data);
        if (response.status === 200) {
            alert('Profile successfully updated.');
/**  Expected 0 arguments, but got 1.*/
            setUser(response.data.user);
            navigate('/user/profile');
        } else {
            alert(response.response.data.msg);
        }
    };

    return (
        <div className="w-1/4 m-auto text-center">
            <h1 className="text-3x1 my-3 font-bold">Update Profile</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="insert your nickname..."
                        className="focus:outline-none border-none p-2 rounded w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder="insert valid email..."
                        className="focus:outline-none border-none p-2 rounded w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        placeholder="insert age..."
                        className="focus:outline-none border-none p-2 rounded w-full"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-black text-white w-full py-2">
                    Update Profile
                </button>
            </form>
        </div>
    );
};
