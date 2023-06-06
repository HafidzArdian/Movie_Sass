import { useDispatch, useSelector } from "react-redux";

import { getProfile } from "../redux/actions/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token && !isLoggedIn) {
      navigate("/login");
      return;
    }
    dispatch(getProfile());
  }, [isLoggedIn, navigate, token, dispatch]);

  return children;
}

export default Protected;
