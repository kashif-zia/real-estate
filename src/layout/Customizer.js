import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Settings, X } from "react-feather";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { ConfigDB } from "../config/themeCustomizerConfig";
import NoSsr from "../libs/utils/NoSsr";
import { toast } from "react-toastify";

const Customizer = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState({
    LayoutMode: "",
    LayoutType: "",
    PrimaryColor: "",
    SecondaryColor: "",
  });
  const notify = () => toast(`config copied successfully`, { type: "success", position: "top-right" });
  const handleCopy = () =>
    navigator.clipboard.writeText(`{
    "LayoutMode": "${config.LayoutMode}",
    "LayoutType": "${config.LayoutType}",
    "PrimaryColor": "${config.PrimaryColor}",
    "SecondaryColor": "${config.SecondaryColor}",
  }`);
  useEffect(() => {
    if (ConfigDB.LayoutType === "rtl") {
      document.body.classList.add("rtl");
      document.documentElement.dir = "rtl";
      setConfig((prev) => ({ ...prev, LayoutType: "rtl" }));
    } else {
      document.body.classList.remove("rtl");
      document.documentElement.dir = "";
      setConfig((prev) => ({ ...prev, LayoutType: "ltr" }));
    }
    if (ConfigDB.LayoutMode) {
      document.body.classList.add("dark-layout");
      setConfig((prev) => ({ ...prev, LayoutMode: "dark-layout" }));
    } else {
      document.body.classList.remove("dark-layout");
      setConfig((prev) => ({ ...prev, LayoutMode: "light-layout" }));
    }
    setTimeout(() => {
      const getColor = document.documentElement.getAttribute("style");
      const color1Index = getColor?.search("--theme-default:");
      const color2Index = getColor?.search("--theme-default2:");
      color1Index != -1 && setConfig((prev) => ({ ...prev, PrimaryColor: getColor?.slice(color1Index + 16, color1Index + 16 + 7) }));
      color2Index != -1 && setConfig((prev) => ({ ...prev, SecondaryColor: getColor?.slice(color1Index + 16, color1Index + 16 + 7) }));
      setConfig((prev) => ({ ...prev, LayoutType: document.body.classList.contains("rtl") ? "rtl" : "ltr" }));
      setConfig((prev) => ({ ...prev, LayoutMode: document.body.classList.contains("dark-layout") ? "dark-layout" : "light-layout" }));
    }, 100);
  }, [router.pathname]);

  const handleColor1 = (e) => {
    setConfig((prev) => ({ ...prev, PrimaryColor: e.target.value }));
    document.documentElement.style.setProperty("--theme-default", e.target.value);
  };
  const handleColor2 = (e) => {
    setConfig((prev) => ({ ...prev, SecondaryColor: e.target.value }));
    document.documentElement.style.setProperty("--theme-default2", e.target.value);
  };

  return (
    <div className={`customizer-wrap ${isOpen ? "open" : ""} `}>
      <div className="customizer-links" onClick={() => setIsOpen(true)}>
        <Settings />
      </div>
      <div className="customizer-contain custom-scrollbar">
        <div className="setting-back">
          <a>
            <X onClick={() => setIsOpen(false)} />
          </a>
        </div>
        <div className="layouts-settings">
          <div className="customizer-title">
            <h6>Layout type</h6>
          </div>
          <div className="option-setting">
            <span>Light</span>
            <label className="switch">
              <input
                type="checkbox"
                name="chk1"
                value="option"
                className="setting-check"
                onClick={(e) => {
                  if (e.target.checked) {
                    document.body.classList.add("dark-layout");
                    setConfig((prev) => ({ ...prev, LayoutMode: "dark-layout" }));
                  } else {
                    document.body.classList.remove("dark-layout");
                    setConfig((prev) => ({ ...prev, LayoutMode: "light-layout" }));
                  }
                }}
              />
              <span className="switch-state"></span>
            </label>
            <span>Dark</span>
          </div>
        </div>
        <div className="layouts-settings">
          <div className="customizer-title">
            <h6>Layout Direction</h6>
          </div>
          <div className="option-setting">
            <span>LTR</span>
            <label className="switch">
              <input
                type="checkbox"
                name="chk2"
                value="option"
                className="setting-check1"
                onClick={(e) => {
                  if (e.target.checked) {
                    document.body.classList.add("rtl");
                    document.documentElement.dir = "rtl";
                    setConfig((prev) => ({ ...prev, LayoutType: "rtl" }));
                  } else {
                    document.body.classList.remove("rtl");
                    document.documentElement.dir = "";
                    setConfig((prev) => ({ ...prev, LayoutType: "ltr" }));
                  }
                }}
              />
              <span className="switch-state"></span>
            </label>
            <span>RTL</span>
          </div>
        </div>
        <div className="layouts-settings">
          <div className="customizer-title">
            <h6>Unlimited Color</h6>
          </div>
          <NoSsr>
            <div className="option-setting unlimited-color-layout">
              <Input id="ColorPicker1" type="color" name="Default" className="m-1" value={config.PrimaryColor || ""} onChange={handleColor1} />
              <Input id="ColorPicker2" type="color" name="Default" className="m-1" value={config.SecondaryColor || ""} onChange={handleColor2} />
            </div>
          </NoSsr>
        </div>
        <div className="layouts-settings">
          <div className="customizer-title">
            <h6>Copy Layout Config</h6>
            <ul>
              <li className="text-muted">
                LayoutMode :<b> {config.LayoutMode} </b>
              </li>
              <li className="text-muted">
                LayoutType :<b> {config.LayoutType} </b>
              </li>
              <li className="text-muted">
                {" "}
                PrimaryColor :<b> {config.PrimaryColor} </b>
              </li>
              <li className="text-muted">
                {" "}
                SecondaryColor :<b> {config.SecondaryColor}</b>
              </li>
              <li>
                <span className="text-danger">* (You need to put this in config/themeCustomizerConfig.js to reflect your changes permently) </span>
              </li>
            </ul>
            <Button
              className="mt-3 btn btn-gradient btn-pill"
              onClick={() => {
                handleCopy();
                notify();
              }}>
              Copy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customizer;
