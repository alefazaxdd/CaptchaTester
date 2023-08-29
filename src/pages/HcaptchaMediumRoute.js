import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState } from "react";

const HcaptchaMedium = () => {
    const [token, setToken] = useState(null)

    return(
        <>
        <h1>Hcaptcha Medium Test</h1>
            <HCaptcha
            sitekey="c5f45392-4472-456f-b7cd-935a9dbc919e"
            onVerify={setToken}
          />
          {token && <div>Success, token logged in console {console.log(token)}</div>}
        </>
    );
  };
  
export default HcaptchaMedium;