import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Ring } from "@uiball/loaders";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const checkAuthentication = () => {
        const token = localStorage.getItem('AT');
        const authenticated = token !== undefined;
        if (!authenticated) {
          setIsAuthenticated(false);
          router.push('/Login');
        }else{
            setIsAuthenticated(true);
        }
      };
      checkAuthentication();
    }, [isAuthenticated]);

    return isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <div className="w-full h-screen flex flex-col justify-center items-center">
          <Ring size={40} lineWeight={5} speed={2} color="#ff6600" />
        </div>
    );
  };
};

export default withAuth;
