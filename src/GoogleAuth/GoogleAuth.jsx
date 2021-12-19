/*
Links: https://blog.prototypr.io/how-to-build-google-login-into-a-react-app-and-node-express-api-821d049ee670

*/
import React from "react";
import {GoogleLogin} from "react-google-login";
import axios from "axios"
const handleLogin = async (googleData) => {
  const res = await axios.post(process.env.REACT_APP_API + "/authGoogle", {
    token: googleData.tokenId,
  });
  const {data} = res;
  console.log(data);
};

export default function GoogleAuth() {
  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
