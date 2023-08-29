import { Turnstile } from '@marsidev/react-turnstile'
import {useState} from 'react'

const CloudFlare = () => {
    const [token, setToken] = useState(null)
    return(
        <>
        <h1>Cloudflare Turnstile Test</h1>
            <Turnstile siteKey='0x4AAAAAAAJbRrf2F9SHBbJ7'
                onSuccess={setToken}
                onError={() => console.error('error')}
             />

             {token && <div>Success {console.log(token)}</div>}
        </>
    )
}

export default CloudFlare