import { useEffect } from "react";

const useActiveLinkInStickyBar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".desc-box");
    const navLi = document.querySelectorAll("#navigation ul li a");
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY > 578 && window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          current = section.getAttribute("id") || current;
        }
      });
      navLi.forEach((el) => {
        window.scrollY > 578 && el.getAttribute("href") === `#${current}` ? el.closest("li").classList.add("active") : el.closest("li").classList.remove("active");
        window.scrollY < 578 && navLi[0].closest("li").classList.add("active");
      });
    });
    return () => window.removeEventListener("scroll", () => {});
  }, []);
};

export default useActiveLinkInStickyBar;
