import { useState } from "react";

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: "",
        age: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value,
        })
    }


    return (
        <div>
            <h2>User Profile</h2>
            <div className="">
                <label htmlFor="">
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="">
                    Age:
                    <input
                        type="number"
                        min={0}
                        name="age"
                        value={profileData.age}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <h3>Profile Information</h3>
            <p>Name: {profileData.name}</p>
            <p>Age: {profileData.age}</p>
        </div>
    )
}

export default Profile