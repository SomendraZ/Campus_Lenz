// src/pages/SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
        console.log('Sign Up Info:', { fullName, collegeName, email, password, otp });
    };

    return (
        <div className="signUp-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                <div>
                    <label>College Name:</label>
                    <input
                        type="text"
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                        placeholder="Enter your college name"
                        required
                    />
                </div>
                <div>
                    <label>College Email ID:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your college email"
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div>
                    <label>OTP Confirmation:</label>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter the OTP"
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
                <a href="/login">Login</a>
            </form>
        </div>
    );
};

export default SignUp;
