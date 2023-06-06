import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RedirectIfProtected({ children }) {
  const navigate = useNavigate();

  const { user, isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLoggedIn || user) {
      navigate("/");
    }
  }, [isLoggedIn, navigate, user]);
  return children;
}

export default RedirectIfProtected;
