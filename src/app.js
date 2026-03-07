import Layout from "./Layout.js";
import Navbar from "./components/Navbar.js";
import BrandBar from "./components/BrandBar.js";
import Hero from "./components/Hero.js";
import New from "./components/New.js";

// Create layout structure
const { layout, header, main, heroSection, newSection } = Layout();

// Create BrandBar
const brandBar = BrandBar();

// Create Navbar (pass brandBar for toggle control)
header.appendChild(Navbar(brandBar));

// Mount brand bar as first child of main
main.insertBefore(brandBar, main.firstChild);

// Create Hero and mount to hero section
heroSection.appendChild(Hero());

// Create New and mount to new section
newSection.appendChild(New());

// Mount layout to DOM
document.getElementById("app").appendChild(layout);