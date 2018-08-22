import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ currentUser }) => {
    if (!currentUser.isAuthenticated) {
        return (
            <div className="home-hero">
                <h1>Hi working</h1>
                <h4>New to Warbler</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign Up here!
                </Link>
            </div>
        );
    }
    return (
        <div>
            <MessageTimeline
                profileImage={currentUser.user.profileImage}
                username={currentUser.user.username}
            />
        </div>
    );
};

export default Homepage;
