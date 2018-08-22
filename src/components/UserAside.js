import React from "react";
import DefaultProfileImage from "../images/default-profile-image.jpg";

const UserAside = ({ profileImage, username }) => (
    <aside className="col-sm-2">
        <div className="panel panel-default">
            <img
                src={profileImage || DefaultProfileImage}
                alt="Username"
                width="200"
                height="200"
            />
        </div>
    </aside>
);

export default UserAside;
