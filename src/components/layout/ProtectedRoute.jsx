import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAllowed = true, redirectTo = "/login", children }) => {
	if (!isAllowed) {
		return <Navigate to={redirectTo} replace />;
	}

	if (children) {
		return children;
	}

	return <Outlet />;
};

export default ProtectedRoute;
