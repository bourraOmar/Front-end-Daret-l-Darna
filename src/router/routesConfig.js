import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Home from "../components/layout/Home";

export const routes = [
  // Auth
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];