import { Navigate, useParams } from "react-router-dom";

import { useAuth } from "./index";

interface ICheckAuthProps {
  children: JSX.Element;
}

export const CheckAuth = ({ children }: ICheckAuthProps) => {
  const authInfo = useAuth();
  if (!authInfo.user) {
    return (
      <div>
        <Navigate to="" replace />
      </div>
    );
  }
  return children;
};
