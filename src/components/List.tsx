import { useState } from "react";
import { GenericType } from "../types/types";

const Banner1 = ({ title, allProducts }: GenericType) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center main-border cursor-pointer p-2 mb-4"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <h6 className="mb-0 text-uppercase">{title}</h6>
        <i
          className={`fa-solid fa-angle-up angle-transition ${
            toggle ? "make-transition" : ""
          }`}
        ></i>
      </div>
      {toggle && (
        <>
          <ul>
            {allProducts.map((prod, index) => {
              return (
                <li key={index} className="mt-3">
                  <div className="d-flex justify-content-between align-items-center px-2">
                    <p className="mb-0">{prod.nameAndMl}</p>
                    <p className="mb-0">{prod.price}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Banner1;
