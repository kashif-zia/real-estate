/*=====================
     slick slider js
     ==========================*/
export const slide1 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const slide2 = {
  dots: false,
  infinite: true,
  speed: 700,
  arrows: false,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const slide3 = {
  dots: false,
  infinite: true,
  speed: 700,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

export const blog1 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const blog2 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const testimonial1 = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: "10px",
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerPadding: "120px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const testimonial2 = {
  dots: false,
  infinite: true,
  speed: 700,
  fade: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};

export const testimonial3 = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
};

export const commentRight = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      },
    },
  ],
};

export const imgTestimonial = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
};

export const about1 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const about2 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const about3 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

// landing page slider
export const slideCenter1 = {
  centerMode: true,
  centerPadding: "30px",
  slidesToShow: 3,
  dots: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerPadding: "150px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 481,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 1,
      },
    },
  ],
};

export const serviceSlider = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "300px",
  responsive: [
    {
      breakpoint: 1916,
      settings: {
        centerPadding: "160px",
      },
    },
    {
      breakpoint: 1848,
      settings: {
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 1712,
      settings: {
        centerPadding: "70px",
      },
    },
    {
      breakpoint: 1660,
      settings: {
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 1556,
      settings: {
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 1461,
      settings: {
        slidesToShow: 3,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
        arrows: false,
      },
    },
  ],
};

export const property1 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const propertySlider = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

export const property3 = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "190px",
  responsive: [
    {
      breakpoint: 1660,
      settings: {
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 1556,
      settings: {
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 1461,
      settings: {
        slidesToShow: 3,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 1,
        centerPadding: "400px",
      },
    },
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 1,
        centerPadding: "370px",
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        centerPadding: "350px",
      },
    },
    {
      breakpoint: 1175,
      settings: {
        slidesToShow: 1,
        centerPadding: "320px",
      },
    },
    {
      breakpoint: 1110,
      settings: {
        slidesToShow: 1,
        centerPadding: "300px",
      },
    },
    {
      breakpoint: 1065,
      settings: {
        slidesToShow: 1,
        centerPadding: "270px",
      },
    },
    {
      breakpoint: 1015,
      settings: {
        slidesToShow: 1,
        centerPadding: "260px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerPadding: "230px",
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        centerPadding: "210px",
      },
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 1,
        centerPadding: "180px",
      },
    },
    {
      breakpoint: 915,
      settings: {
        slidesToShow: 1,
        centerPadding: "150px",
      },
    },
    {
      breakpoint: 810,
      settings: {
        slidesToShow: 1,
        centerPadding: "120px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "100px",
        arrows: false,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 445,
      settings: {
        slidesToShow: 1,
        centerPadding: "-20px",
      },
    },
  ],
};

export const property4 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

export const feature1 = {
  dots: false,
  infinite: true,
  fade: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};

export const feature2 = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1461,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const feature3 = {
  dots: false,
  infinite: true,
  speed: 800,
  fade: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      },
    },
  ],
};

export const feature4 = {
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const offerSlider = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const pricingSlider = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const homeSlider1 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const homeSlider2 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        arrows: false,
      },
    },
  ],
};

export const homeSlider3 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 481,
      settings: {
        arrows: false,
      },
    },
  ],
};

export const homeSlider4 = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      },
    },
  ],
  // }.slickAnimation();
};

export const homeNav = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  focusOnSelect: true,
};

export const footerSlider = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1461,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// common grid slider
export const gridSlider = {
  dots: false,
  infinite: true,
  speed: 800,
  fade: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const featureSlider = {
  dots: false,
  infinite: true,
  speed: 800,
  fade: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// thumbnail slider
export const sliderFor = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
};

export const sliderNav = {
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  adaptiveHeight: true,
  focusOnSelect: true,
};

// gallery slider
export const galleryFor = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
};
export const galleryNav = {
  adaptiveHeight: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  focusOnSelect: true,
};

// single property slider
export const singlePropertySlider = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const mainPropertySlider = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// center slider
export const centerSlider = {
  centerMode: true,
  centerPadding: "0",
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1,
      },
    },
  ],
};


export const browsePropertySlide = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};