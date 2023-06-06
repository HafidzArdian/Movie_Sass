import { Button } from "react-bootstrap";
import React from "react";
import { googleLogin } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleLogin = ({ buttonText }) => {
  console.log("aku disini");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const data = {
        access_token: tokenResponse.access_token,
      };
      dispatch(googleLogin(data, navigate));
    },
  });
  return (
    <Button variant="primary" onClick={() => login()}>
      {" "}
      {buttonText}{" "}
    </Button>
  );
};

export default GoogleLogin;
