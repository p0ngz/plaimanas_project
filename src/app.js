import Layout from "./Layout.js";
import Navbar from "./components/Navbar.js";
import BrandBar from "./components/BrandBar.js";
import Hero from "./components/Hero.js";
import New from "./components/New.js";
import BestSeller from "./components/BestSeller.js";
import Collection from "./components/Collection.js";
import Service from "./components/Service.js";
// Create layout structure
const {
  layout,
  header,
  main,
  heroSection,
  newSection,
  bestsellerSection,
  collectionSection,
  serviceSection,
} = Layout();

const brandBar = BrandBar();
header.appendChild(Navbar(brandBar));
main.insertBefore(brandBar, main.firstChild);

heroSection.appendChild(Hero());
newSection.appendChild(New());
bestsellerSection.appendChild(BestSeller());
collectionSection.appendChild(Collection());
serviceSection.appendChild(Service());

// Mount layout to DOM
document.getElementById("app").appendChild(layout);
