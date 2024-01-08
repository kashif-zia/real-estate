import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Globe } from "react-feather";
import useOutsideDropdown from "../../../../libs/utils/useOutsideDropdown";

const Language = ({ value }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const router = useRouter();
  const query = router.query;
  return (
    <li ref={ref} className={`dropdown language ${isComponentVisible && "active"}`}>
      <a>
        <Globe
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        />
      </a>
      <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
        {value.option.map((language, i) => (
          <li key={i}>
            <Link locale={language.lang} href={router.pathname}>
              {language.language}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Language;
