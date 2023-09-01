import { Navigate } from "react-router-dom";

import { useAuth } from "./index";

interface ICheckAuthProps {
  children: JSX.Element;
}

export const CheckAuth = ({ children }: ICheckAuthProps) => {
  const authInfo = useAuth();
  if (!authInfo.user) {
    return (
      <div>
        <Navigate to="/login" replace />
      </div>
    );
  }
  return children;
};
