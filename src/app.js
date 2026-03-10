import Layout from "./Layout.js";
import Navbar from "./components/Navbar.js";
import BrandBar from "./components/BrandBar.js";
import Hero from "./components/Hero.js";
import New from "./components/New.js";
import BestSeller from "./components/BestSeller.js";
import Collection from "./components/Collection.js";
import Service from "./components/Service.js";
import Marquee from "./components/Marquee.js"
import Faq from "./components/Faq.js";
import Inquiry from "./components/Inquiry.js"
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
  marqueeSection,
  faqSection,
  inquirySection
} = Layout();

const brandBar = BrandBar();
header.appendChild(Navbar(brandBar));
main.insertBefore(brandBar, main.firstChild);

heroSection.appendChild(Hero());
newSection.appendChild(New());
bestsellerSection.appendChild(BestSeller());
collectionSection.appendChild(Collection());
serviceSection.appendChild(Service());
marqueeSection.appendChild(Marquee());
faqSection.appendChild(Faq());
inquirySection.appendChild(Inquiry());


// Mount layout to DOM
document.getElementById("app").appendChild(layout);
