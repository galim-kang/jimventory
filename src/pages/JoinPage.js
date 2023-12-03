import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginJoin.module.css";

const JoinPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const isEmailValid = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const handleSignup = () => {
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setPasswordConfirmError("");

    if (!name) {
      setNameError("Name is required.");
      return;
    }

    if (!isEmailValid(email)) {
      setEmailError("Invalid email format.");
      return;
    }

    if (!isPasswordValid(password)) {
      setPasswordError("Password should be at least 8 characters long.");
      return;
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmError("Passwords do not match.");
      return;
    }

    // Proceed with the signup process
  };

  return (
    <div className={styles.loginJoinPage}>
      <div className={styles.section}>
        <h2>Create an Account</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <div className={styles.errorMessage}>{nameError}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div className={styles.errorMessage}>{emailError}</div>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <div className={styles.errorMessage}>{passwordError}</div>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        {passwordConfirmError && (
          <div className={styles.errorMessage}>{passwordConfirmError}</div>
        )}
        <button className={styles.button} onClick={handleSignup}>
          Signup
        </button>
        <div>Social Signup</div>
        <Link to="/login" className="link">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default JoinPage;
