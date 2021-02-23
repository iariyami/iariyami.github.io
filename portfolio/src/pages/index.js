import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <h2>Welcome to the landing page! REact Router</h2>
            <small>Main page</small>
            <Link to="/contact">Contact info</Link>
        </div>
    );
};

export default LandingPage;