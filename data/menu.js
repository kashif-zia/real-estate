import { Clipboard, Home, Layers, Link, MapPin, User, Zap } from "react-feather";

export const MainNavMenuItems = [
  {
    title: "LISTING",
    icon: <Clipboard />,
    type: "sub",
    children: [
      {
        title: "Grid View",
        type: "sub",
        children: [
          {
            title: "2 Grid",
            type: "sub",
            children: [
              {
                path: "/listing/grid-view/2-grid/left-sidebar",
                title: "Left Sidebar",
                type: "link",
              },
              {
                path: "/listing/grid-view/2-grid/right-sidebar",
                title: "Right Sidebar",
                type: "link",
              },
              { path: "/listing/grid-view/2-grid/no-sidebar", title: "No Sidebar", type: "link" },
            ],
          },
          {
            title: "3 Grid",
            type: "sub",
            children: [
              {
                path: "/listing/grid-view/3-grid/left-sidebar",
                title: "Left Sidebar",
                type: "link",
              },
              {
                path: "/listing/grid-view/3-grid/right-sidebar",
                title: "Right Sidebar",
                type: "link",
              },
              { path: "/listing/grid-view/3-grid/no-sidebar", title: "No Sidebar", type: "link" },
            ],
          },
          { path: "/listing/grid-view/slider", title: "Slider", type: "link" },
          {
            title: "Map",
            type: "sub",
            children: [
              { path: "/listing/grid-view/map/google-map", title: "Google Map", type: "link" },
              {
                path: "/listing/grid-view/map/leaflet-map",
                title: "Leaflet Map",
                type: "link",
              },
              {
                path: "/listing/grid-view/map/pigeon-map",
                title: "Pigeon Map",
                type: "link",
              },
            ],
          },
          {
            title: "Map Modal",
            type: "sub",
            children: [
              { path: "/listing/grid-view/map-modal/google-map", title: "Google Map", type: "link" },
              {
                path: "/listing/grid-view/map-modal/leaflet-map",
                title: "Leaflet Map",
                type: "link",
              },
              {
                path: "/listing/grid-view/map-modal/pigeon-map",
                title: "Pigeon Map",
                type: "link",
              },
            ],
          },
          {
            title: "Left Side Map",
            type: "sub",
            children: [
              { path: "/listing/grid-view/left-side-map/google-map", title: "Google Map", type: "link" },
              {
                path: "/listing/grid-view/left-side-map/leaflet-map",
                title: "Leaflet Map",
                type: "link",
              },
              {
                path: "/listing/grid-view/left-side-map/pigeon-map",
                title: "Pigeon Map",
                type: "link",
              },
            ],
          },
          {
            title: "On Click Map",
            type: "sub",
            children: [
              { path: "/listing/grid-view/on-click-map/google-map", title: "Google Map", type: "link" },
              {
                path: "/listing/grid-view/on-click-map/leaflet-map",
                title: "Leaflet Map",
                type: "link",
              },
              {
                path: "/listing/grid-view/on-click-map/pigeon-map",
                title: "Pigeon Map",
                type: "link",
              },
            ],
          },
          {
            title: "Map Header",
            type: "sub",
            children: [
              { path: "/listing/grid-view/map-header/google-map", title: "Google Map", type: "link" },
              {
                path: "/listing/grid-view/map-header/leaflet-map",
                title: "Leaflet Map",
                type: "link",
              },
              {
                path: "/listing/grid-view/map-header/pigeon-map",
                title: "Pigeon Map",
                type: "link",
              },
            ],
          },
        ],
      },
      {
        title: "List View",
        type: "sub",
        children: [
          {
            title: "Listing",
            type: "sub",
            children: [
              { path: "/property", title: "Left Sidebar", type: "link" },
              { path: "/listing/list-view/listing/right-sidebar", title: "Right Sidebar", type: "link" },
              { path: "/listing/list-view/listing/no-sidebar", title: "No Sidebar", type: "link" },
            ],
          },
          {
            title: "Map",
            type: "sub",
            children: [
              { path: "/listing/list-view/map/google-map", title: "Google Map", type: "link" },
              { path: "/listing/list-view/map/leaflet-map", title: "Leaflet Map", type: "link" },
              { path: "/listing/list-view/map/pigeon-map", title: "Pigeon Map", type: "link" },
            ],
          },
          { path: "/listing/list-view/slider", title: "Slider", type: "link" },
          { path: "/listing/list-view/thumbnail-image", title: "Thumbnail Image", type: "link" },
          { path: "/listing/list-view/video", title: "Video", type: "link" },
        ],
      },
      {
        title: "Tab Layout",
        type: "sub",
        children: [
          { path: "/listing/tab-layout/tab-full-width", title: "Tab Full Width", type: "link" },
          { path: "/listing/tab-layout/tab-left-sidebar", title: "Tab Left Sidebar", type: "link" },
          { path: "/listing/tab-layout/tab-right-sidebar", title: "Tab Right Sidebar", type: "link" },
        ],
      },
      {
        title: "Infinite Scroll",
        type: "sub",
        children: [
          { path: "/listing/infinite-scroll/tab-full-width", title: "Tab Full Width", type: "link" },
          { path: "/listing/infinite-scroll/tab-left-sidebar", title: "Tab Left Sidebar", type: "link" },
          { path: "/listing/infinite-scroll/tab-right-sidebar", title: "Tab Right Sidebar", type: "link" },
        ],
      },
    ],
  },
  {
    title: "PROPERTY",
    icon: <Link />,
    type: "sub",
    children: [
      { path: "/property/sticky-tab-or-classic", title: "Sticky Tab Or Classic", type: "link" },
      { path: "/property/without-top", title: "Without Top", type: "link" },
      { path: "/property/detail", title: "Left Sidebar", type: "link" },
      { path: "/property/info-tab", title: "Info TAb", type: "link" },
      { path: "/property/image-slider", title: "Image Slider", type: "link" },
      { path: "/property/thumbnail-image", title: "Thumbnail Image", type: "link" },
      { path: "/property/detail", title: "Image Box", type: "link" },
      { path: "/property/template-breadcrumb", title: "Template Breadcrumb", type: "link" },
      {
        path: "/property/modal-details",
        title: "Modal Details",
        type: "link",
        icon: "true",
      },
    ],
  },
  {
    title: "PAGES",
    icon: <Layers />,
    type: "mega-menu",
    children: [
      {
        type: "col",
        children: [
          {
            title: "Portfolio",
            type: "sub",
            children: [
              { path: "/pages/portfolio/2-grid", title: "2 Grid", type: "link" },
              { path: "/pages/portfolio/3-grid", title: "3 Grid", type: "link" },
              { path: "/pages/portfolio/4-grid", title: "4 Grid", type: "link" },
              {
                path: "/pages/portfolio/2-grid-title",
                title: "2 Grid Title",
                type: "link",
              },
              {
                path: "/pages/portfolio/3-grid-title",
                title: "3 Grid Title",
                type: "link",
              },
              {
                path: "/pages/portfolio/4-grid-title",
                title: "4 Grid Title",
                type: "link",
              },
              { path: "/pages/portfolio/3-masonry", title: "3 Masonry", type: "link" },
              { path: "/pages/portfolio/4-masonry", title: "4 Masonry", type: "link" },
              { path: "/pages/portfolio/parallax", title: "Parallax", type: "link" },
              {
                path: "/pages/portfolio/center-slides",
                title: "Center Slides",
                type: "link",
              },
              { path: "/pages/portfolio/creative-1", title: "Creative 1", type: "link" },
              { path: "/pages/portfolio/creative-2", title: "Creative 2", type: "link" },
              {
                path: "/pages/portfolio/creative-3",
                title: "Creative 3",
                type: "link",
                icon: "true",
              },
              { path: "/pages/portfolio/creative-4", title: "Creative 4", type: "link" },
              { path: "/pages/portfolio/details", title: "Details", type: "link" },
            ],
          },
        ],
      },
      {
        type: "col",
        children: [
          {
            title: "Blog Page",
            type: "sub",
            children: [
              {
                path: "/blog/detail",
                title: "Left Sidebar",
                type: "link",
              },
              {
                path: "/blog/detail",
                title: "Right Sidebar",
                type: "link",
              },
              { path: "/pages/blog-page/no-sidebar", title: "No Sidebar", type: "link" },
              {
                path: "/pages/blog-page/creative-left-sidebar",
                title: "Creative Left Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/creative-right-sidebar",
                title: "Creative Right Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/creative-no-sidebar",
                title: "Creative No Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/list-left-sidebar",
                title: "List Left Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/list-right-sidebar",
                title: "List Right Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/list-no-sidebar",
                title: "List No Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/masonry-left-sidebar",
                title: "Masonry Left Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/masonry-right-sidebar",
                title: "Masonry Right Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/masonry-no-sidebar",
                title: "Masonry No Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/mix-list-left-sidebar",
                title: "Mix List Left Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/mix-list-right-sidebar",
                title: "Mix List Right Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/mix-grid-left-sidebar",
                title: "Mix Grid Left Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-page/mix-grid-right-sidebar",
                title: "Mix Grid Right Sidebar",
                type: "link",
              },
            ],
          },
        ],
      },
      {
        type: "col",
        children: [
          {
            title: "Blog Detail Pages",
            type: "sub",
            children: [
              {
                path: "/",
                title: "Left Sidebar",
                type: "link",
              },
              {
                path: "/pages/blog-detail-pages/right-sidebar",
                title: "Right Sidebar",
                type: "link",
              },
              { path: "/pages/blog-detail-pages/no-sidebar", title: "No Sidebar", type: "link" },
              {
                path: "/pages/blog-detail-pages/detail-with-gallery",
                title: "Detail With Gallery",
                type: "link",
              },
              {
                path: "/pages/blog-detail-pages/detail-with-video",
                title: "Detail With Video",
                type: "link",
              },
            ],
          },
          {
            title: "Elements-Breadcrumb",
            type: "sub",
            children: [
              { path: "/listing/grid-view/2-grid/left-sidebar", title: "Basic", type: "link" },
              {
                path: "/pages/elements-breadcrumb/image-with-effect",
                title: "Image With Effect",
                type: "link",
                tag: "New",
              },
              {
                path: "/pages/elements-breadcrumb/right-content",
                title: "Right Content",
                type: "link",
              },
              { path: "/property/sticky-tab-or-classic", title: "Only Image", type: "link" },
              { path: "/listing/list-view/map/pigeon-map", title: "Small", type: "link" },
              { path: "/listing/list-view/map/leaflet-map", title: "Gradient", type: "link" },
            ],
          },
        ],
      },
      {
        type: "col",
        children: [
          {
            title: "Agency",
            type: "sub",
            children: [
              {
                path: "/pages/agency/agency-profile",
                title: "Agency Profile",
                type: "link",
              },
              {
                path: "/pages/agency/agency-grid",
                title: "Agency Grid",
                type: "link",
              },
              { path: "/pages/agency/agency-list", title: "Agency List", type: "link" },
            ],
          },
          // {
          //   title: "Email Template",
          //   type: "sub",
          //   children: [
          //     { path: "/layouts/Basics/Video", title: "Offer", type: "link" },
          //     {
          //       path: "/layouts/Basics/Video",
          //       title: "Confirmation",
          //       type: "link",
          //     },
          //     { path: "/layouts/Basics/Video", title: "Thank You", type: "link" },
          //   ],
          // },
          {
            title: "User Panel",
            type: "sub",
            children: [
              {
                path: "/pages/user-panel/user-dashboard",
                title: "User Dashboard",
                type: "link",
                icon: "true",
              },
              // { path: "/pages/user-panel/my-listing", title: "My Listing", type: "link" },
              {
                path: "/pages/user-panel/create-property",
                title: "Create Property",
                type: "link",
              },
              { path: "/pages/user-panel/my-profile", title: "My Profile", type: "link" },
              { path: "/dashboard/agent-dashboard/favourites", title: "Favorites", type: "link" },
              {
                path: "/pages/user-panel/compare-property",
                title: "Compere Property",
                type: "link",
              },
              {
                path: "/pages/user-panel/cards-&-payment",
                title: "Cards & Payment",
                type: "link",
              },
              { path: "/pages/user-panel/privacy", title: "Privacy", type: "link" },
            ],
          },
        ],
      },
      {
        type: "col",
        children: [
          {
            title: "Other Pages",
            type: "sub",
            children: [
              { path: "/pages/about-us", title: "About Us 1", type: "link" },

              { path: "/pages/other-pages/services", title: "Services", type: "link" },
              { path: "/pages/other-pages/pricing", title: "Pricing", type: "link" },
              {
                path: "/pages/other-pages/coming-soon",
                title: "Coming Soon 1",
                type: "link",
              },
              
              { path: "/pages/other-pages/404", title: "404", type: "link" },
              { path: "/faq", title: "FAQ", type: "link" },
              { path: "/pages/other-pages/login", title: "Log In", type: "link" },
              { path: "/auth/signup", title: "Sign Up", type: "link" },
              
              {
                path: "/auth/forgot-password",
                title: "Forget Password",
                type: "link",
              },
              {
                path: "/terms-&-conditions",
                title: "Terms & Conditions",
                type: "link",
              },
              {
                path: "/privacy-policy",
                title: "Privacy Policy",
                type: "link",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "MODULES",
    icon: <Zap />,
    type: "sub",
    children: [
      {
        path: "/modules/button",
        title: "Button",
        type: "link",
      },
      { path: "/modules/label", title: "Label", type: "link" },
      { path: "/modules/title", title: "Title", type: "link" },
      {
        path: "/modules/image-ratio",
        title: "Image Ratio",
        type: "link",
        icon: "true",
      },
      { path: "/modules/footer", title: "Footer", type: "link" },
      { path: "/modules/blog", title: "Blog", type: "link" },
      { path: "/modules/brand", title: "Brand", type: "link" },
      { path: "/modules/testimonial", title: "Testimonial", type: "link" },
      { path: "/modules/full-banner", title: "Full Banner", type: "link" },
      { path: "/modules/about", title: "About", type: "link" },
      { path: "/modules/service", title: "Service", type: "link" },
      { path: "/modules/property", title: "Property", type: "link" },
      { path: "/modules/feature", title: "Feature", type: "link" },
      { path: "/modules/others", title: "others", type: "link" },
    ],
  },
  {
    title: "AGENT",
    icon: <User />,
    type: "sub",
    children: [
      {
        path: "/agent/agent-profile",
        title: "Agent Profile",
        type: "link",
      },
      { path: "/agent/agent-grid", title: "Agent Grid", type: "link" },
      { path: "/agent/agent-list", title: "Agent List", type: "link" },
      {
        path: "/agent/submit-property",
        title: "Submit Property",
        type: "link",
        tag: "New",
      },
    ],
  },
  {
    // title: "CONTACT",
    path: "/contact",
    title: "Contact Us",
    type: "link"
  },
];

export const RightNavMenuItem = [
  {
    title: "language",
    option: [
      { lang: "en", language: "English" },
      { lang: "fr", language: "French" },
      { lang: "ar", language: "Arabic" },
      { lang: "es", language: "Spanish" },
    ],
  },
  {
    title: "cart",
  },
  {
    title: "currency",
    type: [
      {
        currency: "USD",
        name: "dollar",
        symbol: "$",
        value: 1,
      },
      {
        currency: "EUR",
        name: "euro",
        symbol: "€",
        value: 0.997,
      },
      {
        currency: "GBP",
        name: "pound",
        symbol: "£",
        value: 0.847,
      },
      {
        currency: "IND",
        name: "rupees",
        symbol: "₹",
        value: 79.9,
      },
    ],
  },
  {
    title: "user",
    options: [
      {
        path: "/auth/login",
        title: "Login",
      },
      {
        path: "/auth/signup",
        title: "Register",
      },
    ],
  },
];
