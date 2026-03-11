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
  inquirySection,
  footer
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
footer.appendChild(Footer());


// Mount layout to DOM
document.getElementById("app").appendChild(layout);
