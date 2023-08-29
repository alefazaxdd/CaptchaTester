import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState } from "react";

const HcaptchaHard = () => {
    const [token, setToken] = useState(null)

    return(
        <>
        <h1>Hcaptcha Hard Test</h1>
            <HCaptcha
            sitekey="ed8377fe-547f-470e-a02c-41e834e0c4b2"
            onVerify={setToken}
          />
          {token && <div>Success, token logged in console {console.log(token)}</div>}
        </>
    );
  };
  
export default HcaptchaHard;