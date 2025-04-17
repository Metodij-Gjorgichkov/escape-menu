import { LangContext } from "../context/langContextConstructor";
import { useContext } from "react";

const Header = () => {
  const { lang, handleLanguageChange } = useContext(LangContext);
  return (
    <>
      <div className="container position-relative">
        <div className="pos-absolute d-flex justify-content-between align-items-center main-color cursor-pointer">
          <p
            className={`${lang === "MK" ? "border-bottom-custom" : ""}`}
            onClick={() => {
              handleLanguageChange("MK");
            }}
          >
            MK
          </p>
          <p className="mx-1">|</p>
          <p
            className={`${lang === "EN" ? "border-bottom-custom" : ""} `}
            onClick={() => {
              handleLanguageChange("EN");
            }}
          >
            EN
          </p>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <img className="logo" src="/images/logo.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
