import Layout from "./Layout.js";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";

// Create layout structure
const { layout, header, heroSection } = Layout();

// Create Navbar and mount to header
header.appendChild(Navbar());

// Create Hero and mount to hero section
heroSection.appendChild(Hero());

// Mount layout to DOM
document.getElementById("app").appendChild(layout);