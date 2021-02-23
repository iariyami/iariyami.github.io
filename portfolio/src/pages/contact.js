import React from "react";
// import {}

const ContactPage = () => {
    return (
        <div>
            <ul>
                {["Name", "Email", "Phone Number"].map((contact, idx) => {
                    return <li key={idx}>{contact}</li>;
                })}
            </ul>
        </div>
    );
};

export default ContactPage;