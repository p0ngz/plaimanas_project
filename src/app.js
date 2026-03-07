import Layout from "./components/Layout.js";
import Navbar from "./components/Navbar.js";

// Create layout structure
const { layout, header } = Layout();

// Create Navbar and mount to header
header.appendChild(Navbar());

// Mount layout to DOM
document.getElementById("app").appendChild(layout);