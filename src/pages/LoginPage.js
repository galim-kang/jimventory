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
    // 유효성 검사 통과하면 메인페이지로 이동하고, 서버에 아이디,패스워드 전달, 토큰받아서 로그인 유지와 동시에 
    // 서버에서 해당 아이디로 로그인 한 유저의 정보 받아와서 저장하기
    // 이름과 이메일, 예약 정보
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

// 서버랑 통신해서 로그인 할 수 있게끔 기능구현
// 유효성 검사 통과하면 메인페이지로 이동하고, 서버에 아이디,패스워드 전달, 토큰받아서 로그인 유지와 동시에 
// 서버에서 해당 아이디로 로그인 한 유저의 정보 받아와서 저장하기
// 이름과 이메일, 예약 정보