import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HcaptchaRoute from "./pages/HcaptchaRoute";
import HcaptchaEasyRoute from "./pages/HcaptchaEasyRoute";
import HcaptchaMediumRoute from "./pages/HcaptchaMediumRoute";
import HcaptchaHardRoute from "./pages/HcaptchaHardRoute";
import HomeRoute from "./pages/HomeRoute";
import RecaptchaRoute from "./pages/RecaptchaRoute";
import CloudflareRoute from "./pages/CloudflareRoute";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<HomeRoute />} />
        <Route path="Hcaptcha" element={<HcaptchaRoute />}/>
        <Route path="HcaptchaEasy" element={<HcaptchaEasyRoute />}/>
        <Route path="HcaptchaMedium" element={<HcaptchaMediumRoute />}/>
        <Route path="HcaptchaHard" element={<HcaptchaHardRoute />}/>
        <Route path="Recaptcha" element={<RecaptchaRoute />}/>
        <Route path="Cloudflare" element={<CloudflareRoute />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
