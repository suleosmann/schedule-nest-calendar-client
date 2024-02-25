import React, { useRef, useState, useEffect } from 'react';
// import SignUp from './../modules/authentication/Signup';

export const useRegister = () => {
    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const REGISTER_URL = '/auth/signup';
  
    const userRef = useRef();
    const errRef = useRef();
  
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
  
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
  
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
  
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
  
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
      setValidName(USER_REGEX.test(user));
  }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, email, pwd, matchPwd])
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      const v1 = USER_REGEX.test(user);
      const v2 = EMAIL_REGEX.test(email);
      const v3 = PWD_REGEX.test(pwd);
      if (!v1 || !v2 || !v3) {
        setErrMsg("Invalid Entry");
        return;
      }
      try {
        const response = await axios.post(REGISTER_URL,
          JSON.stringify({ user, email, pwd }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        );
        console.log(JSON.stringify(response?.data));
        setSuccess(true);
        setUser('');
        setPwd('');
        setMatchPwd('');
      } catch (err) {
        if (!err?.response) {
          setErrMsg('No Server Response');
        } else if (err.response?.status === 409) {
          setErrMsg('Username Taken');
        } else {
          setErrMsg('Registration Failed')
        }
        errRef.current.focus();
      }
    }

    return (
        <SignUp
          userRef={userRef}
          errMsg={errMsg}
          errRef={errRef}
          success={success}
          user={user}
          validName={validName}
          userFocus={userFocus}
          email={email}
          validEmail={validEmail}
          emailFocus={emailFocus}
          pwd={pwd}
          validPwd={validPwd}
          pwdFocus={pwdFocus}
          matchPwd={matchPwd}
          validMatch={validMatch}
          matchFocus={matchFocus}
          setUser={setUser}
          setEmail={setEmail}
          setPwd={setPwd}
          setMatchPwd={setMatchPwd}
          setUserFocus={setUserFocus}
          setEmailFocus={setEmailFocus}
          setPwdFocus={setPwdFocus}
          setMatchFocus={setMatchFocus}
          handleSignUp={handleSignUp}
        />
      );
}
