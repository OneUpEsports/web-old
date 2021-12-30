/* eslint-disable prettier/prettier */
import React from "react";
import Banner from "../components/profile/banner";
import Biography from "../components/profile/biography";
import List from "../components/profile/list";
const Profile = () => {
    return (
        <div className="profile_container">
            <Banner />
            <Biography />
            <List />
        </div>
    );
};
export default Profile;
