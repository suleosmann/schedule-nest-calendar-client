import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from './../../api/axios';

export default function UpdatePwd() {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const REGISTER_URL = '/auth/update_password';

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [email, password, matchPwd]);

  const handleUpdatePwd = async (e) => {
    e.preventDefault();
    if (!email || !validPwd || !validMatch) {
      setErrMsg('Invalid Entry');
      return;
    }
    try {
      const response = await axios.patch(
        REGISTER_URL,
        { email, new_password: password, confirm_new_password: confirmPassword }, // Include confirmPassword in the request payload
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      setSuccess(true);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <div className="col-span-1 px-8 py-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-yellow-500">Update Password</h1>
              <div className="border-b border-black w-full mx-auto mt-4"></div>
              <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                {errMsg}
              </p>
            </div>
            <form action="#" className="space-y-8">
              <div className="form-control">
                <div className="relative">
                  <label htmlFor="email" className="mt-4 block text-base font-medium text-gray-700">
                    Enter your Email
                  </label>
                  <div className="relative ">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      ref={userRef}
                      autoComplete="off"
                      value={email}
                      required
                      className="w-full rounded-md border border-gray-300 py-2 px-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <label htmlFor="password" className="mt-4 block text-base font-medium text-gray-700">
                  Enter your password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    aria-invalid={validPwd ? 'false' : 'true'}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    className="w-full rounded-md border border-gray-300 py-2 px-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <p id="pwdnote" className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span>{' '}
                    <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>{' '}
                    <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                  </p>
                </div>

                <label htmlFor="confirmPassword" className="mt-4 block text-base font-medium text-gray-700">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? 'false' : 'true'}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    className="w-full rounded-md border border-gray-300 py-2 px-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <p id="confirmnote" className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the password input field.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleUpdatePwd}
                disabled={!validPwd || !validMatch ? true : false}
                className="btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-full rounded-md py-2 px-4 text-center text-base font-medium shadow-sm hover:from-pink-500 hover:to-yellow-500 active:from-yellow-400 active:to-pink-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Update Password
              </button>
              <div className="flex items-center justify-between">
                <hr className="w-full bg-gray-200" />
                <p className="text-sm text-gray-400">or</p>
                <hr className="w-full bg-gray-200" />
              </div>
              <div className="grid space-y-4  ">
                <a href="#" className="text-sm text-center text-blue-600 hover:underline">
                  <Link to="/authentication">Already have an account? Log in</Link>
                </a>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
  