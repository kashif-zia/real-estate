import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/assets/images/logo/6.png" alt="" className="img-fluid" />
      </Link>
    </div>
  );
};


export { Logo };
