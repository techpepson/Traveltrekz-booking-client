import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { getToken } from "../../utils/cookieGetFunction";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const UniversalProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
}) => {
  const [userType, setUserType] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Loading state
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Fetch user type
  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const token = await getToken();
        setUserType(token?.userType || "");
        console.log("userType");
      } catch (error) {
        console.error("Failed to fetch user type:", error);
      } finally {
        setLoading(false); // Stop loading regardless of result
      }
    };
    fetchUserType();
  }, []);

  // Authorization check
  useEffect(() => {
    if (loading || userType === null) return; // Wait until loading completes

    if (isAuthenticated === false) {
      toast.error("Please login to access this page");
      navigate("/login");
    } else if (isAuthenticated && userType !== "host" && userType !== "guest") {
      toast.error("You are not authorized here");
      navigate("/login");
    }
  }, [isAuthenticated, navigate, userType, loading]);

  // Show nothing while loading
  if (loading) return <div>Please wait...</div>;

  // Render children if authorized
  return <>{children}</>;
};

export default UniversalProtectedRoute;
