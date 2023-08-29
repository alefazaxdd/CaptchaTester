import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState } from "react";

const Hcaptcha = () => {
    const [token, setToken] = useState(null)

    return(
        <>
        <h1>Hcaptcha Test</h1>
            <HCaptcha
            sitekey="49d194b5-2b7d-4d1b-8e86-dc57bb1658ab"
            onVerify={setToken}
          />
          {token && <div>Success, token logged in console {console.log(token)}</div>}
        </>
    );
  };
  
export default Hcaptcha;