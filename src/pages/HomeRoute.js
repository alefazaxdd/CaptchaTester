import { Link } from "react-router-dom";
import './Home.css'


const Home = () => {
    return(
        <>
            <Link className="Link" to="/Hcaptcha">Hcaptcha Auto</Link>
            <Link className="Link" to="/HcaptchaEasy">Hcaptcha Easy</Link>
            <Link className="Link" to="/HcaptchaMedium">Hcaptcha Medium</Link>
            <Link className="Link" to="/HcaptchaHard">Hcaptcha Hard</Link>
            <Link className="Link" to="/Recaptcha">Recaptchav2</Link>
            <Link className="Link" to="/Cloudflare">cloudflare</Link>
        </>
    )
    
    
    
   ;
  };
  
export default Home;