import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LoadingScreen } from "../layout/loader/LoadingScreen";


const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    router.push("/home/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <LoadingScreen />
    </div>
  );
};

export default index;

