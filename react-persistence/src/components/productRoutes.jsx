import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductRoutes({ children }) {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.persist);
  useEffect(() => {
    if (!token) {
      navigate("/"); // redirect to login
    }
  }, [token, navigate]);
  return token ? children : null;
}

export default ProductRoutes;
