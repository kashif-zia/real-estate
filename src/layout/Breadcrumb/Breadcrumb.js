import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { Container } from "reactstrap";
import Img from "../../libs/utils/BackgroundImageRatio";
import Link from "next/link";

const Breadcrumb = ({ right }) => {
  const router = useRouter();
  const [path, setPath] = useState();
  useEffect(() => {
    setPath(router.pathname.split("/"));
  }, [router.pathname]);
  return (
    <section className="breadcrumb-section p-0 ">
      <Img src="/assets/images/inner-background.jpg" className="bg-img img-fluid" alt="" />
      <Container>
        <div className={`breadcrumb-content ${right ? "breadcrumb-right" : ""}`}>
          <div>
            <h2>{path && path[path.length - 1].replaceAll("-", " ")}</h2>
            <nav aria-label="breadcrumb" className="theme-breadcrumb">
              <ol className="breadcrumb">
              <li className="breadcrumb-item">
              <Link href='/'>Home</Link>
                </li>
                {path?.map((data, i) => (
                  <Fragment key={i}>
                    {data && (
                      <li className="breadcrumb-item">
                        <a>{data.replaceAll("-", " ")}</a>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Breadcrumb;
