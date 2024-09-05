import { useLocation, useNavigate } from "react-router-dom";

export const useRouter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const push = (page: string) => {
    return navigate(`/${page}`);
  };

  const back = () => {
    return navigate(-1);
  };

  return { push, back, pathname };
};
