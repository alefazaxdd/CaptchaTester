import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Recaptcha = () => {
    const [token, setToken] = useState(null)

    function onChange(value) {
        console.log("Captcha value:", value);
        setToken(value)
      }
    return(
        <>
        <h1>Recaptcha Test</h1>
        <ReCAPTCHA
            sitekey="6LcsdOQnAAAAAIUU4IWYQqJhoul6vyd9m4Ub_9s9"
            onChange={onChange}
        />
        {token && <div>Success, token logged in console</div>}
        </>
    );
  };
  
  export default Recaptcha;