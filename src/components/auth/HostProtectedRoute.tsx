import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { getToken } from "../../utils/cookieGetFunction";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const HostProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [userType, setUserType] = useState<string | null>(null); // Null initially
  const [loading, setLoading] = useState(true); // Added loading state
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Fetch user type
  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const token = await getToken();
        setUserType(token?.userType || ""); // Fallback to empty string
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
    // Wait until loading is complete or userType is fetched
    if (loading || userType === null) return;

    if (!isAuthenticated) {
      toast.error("Please login to access this page");
      navigate("/login");
    } else if (isAuthenticated && userType !== "host") {
      toast.error("You are not authorized here");
      navigate("/login");
    }
  }, [isAuthenticated, navigate, userType, loading]);

  // Render nothing while loading
  if (loading) return <div>Please wait...</div>;

  // Render children only if authorized
  return <>{children}</>;
};

export default HostProtectedRoute;
