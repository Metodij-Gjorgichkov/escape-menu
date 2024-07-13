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
} from "../db";
import Footer from "./Footer";

const Menu = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="container flex-grow-1">
          <div className="row main-color">
            <div className="col-12">
              <List {...warmDrinks} />
              <List {...nonAlchocolDrinks} />
              <List {...water} />
              <List {...iceCream} />
              <List {...beers} />
              <List {...coctails} />
              <List {...vines} />
              <List {...strongDrinks} />
              <List {...whiskeyAndBurbon} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Menu;
