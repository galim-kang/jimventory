import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginJoin.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isEmailValid = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    if (!isEmailValid(email)) {
      setEmailError("Invalid email format.");
      return;
    }

    if (!isPasswordValid(password)) {
      setPasswordError("Password should be at least 8 characters long.");
      return;
    }

    // Proceed with the login process
  };

  return (
    <div className={styles.loginJoinPage}>
      <div className={styles.section}>
        <h1>
          open your
          <br />
          JIMVENTORY!
        </h1>
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
        <button className={styles.button} onClick={handleLogin}>
          Log in
        </button>
        <div>Social Login</div>
        <Link to="/join" className="link">
          Go to Join
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
