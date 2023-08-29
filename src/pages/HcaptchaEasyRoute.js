import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState } from "react";

const HcaptchaEasy = () => {
    const [token, setToken] = useState(null)

    return(
        <>
        <h1>Hcaptcha Easy Test</h1>
            <HCaptcha
            sitekey="fcc5a737-dbb6-445a-adc0-e7d5cac3efba"
            onVerify={setToken}
          />
          {token && <div>Success, token logged in console {console.log(token)}</div>}
        </>
    );
  };
  
export default HcaptchaEasy;