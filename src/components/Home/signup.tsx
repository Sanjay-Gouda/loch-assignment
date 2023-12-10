import { useState } from "react";
import "./style.css";
const Signup = () => {
  function validateEmail(email: any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const [email, setEmail] = useState();
  const [isValidEmail, setIsValidEmail] = useState(false);
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handeStart = () => {
    if (validateEmail(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  return (
    <>
      <div className="right-wrapper">
        <div className="right-inner-wrapper">
          <h1 className="heading">
            Sign up for <br />
            exclusive access.
          </h1>
          <div style={{ width: "100%" }}>
            <input
              type="email"
              placeholder="Your email address"
              onChange={handleEmailChange}
            />
            {isValidEmail && (
              <div style={{ color: "red", marginTop: "8px" }}>
                Invalid Email address
              </div>
            )}
          </div>

          <button className="btn" onClick={handeStart}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
