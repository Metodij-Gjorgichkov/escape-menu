import List from "./List";
import Header from "./Header";
import {
  beers,
  strongDrinks,
  iceCream,
  water,
  warmDrinks,
  nonAlchocolDrinks,
  coctails,
  vines,
  whiskeyAndBurbon,
  warmDrinksEN,
  waterEN,
  iceCreamEN,
  cocktailsEN,
  beersEN,
  strongDrinksEN,
  vinesEN,
  nonAlcoholicDrinksEN,
  whiskeyAndBourbonEN,
} from "../db";
import Footer from "./Footer";
import { useContext } from "react";
import { LangContext } from "../context/langContextConstructor";
import SocialMedia from "./SocialMedia";

const Menu = () => {
  const { lang } = useContext(LangContext);
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="container">
          <div className="row main-color">
           <div className="col-12">
              {lang === "MK" ? <List {...warmDrinks} /> : <List {...warmDrinksEN} />}
              {lang === "MK" ? <List {...nonAlchocolDrinks} /> : <List {...nonAlcoholicDrinksEN} />}
              {lang === "MK" ? <List {...water} /> : <List {...waterEN} />}
              {lang === "MK" ? <List {...iceCream} /> : <List {...iceCreamEN} />}
              {lang === "MK" ? <List {...beers} /> : <List {...beersEN} />}
              {lang === "MK" ? <List {...coctails} /> : <List {...cocktailsEN} />}
              {lang === "MK" ? <List {...vines} /> : <List {...vinesEN} />}
              {lang === "MK" ? <List {...strongDrinks} /> : <List {...strongDrinksEN} />}
              {lang === "MK" ? <List {...whiskeyAndBurbon} /> : <List {...whiskeyAndBourbonEN} />}
           </div>
          </div>
        </div>
        <SocialMedia/>
        <Footer />
      </div>
    </>
  );
};

export default Menu;
