import Chip from "./shared/Chip.js";
import Accordion from "./shared/Accordion.js";

const questionData = {
  title: "Frequently Asked Questions",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, nisl non rhoncus commodo.",
  Category: [
    {
      topic: "Orders",
      question: [
        {
          title: "How can I track my order?",
          description:
            "Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package through our shipping partner's website.",
        },
        {
          title: "Can I change or cancel my order?",
          description:
            "Orders can be modified or canceled within 1 hour after placing them. After that, the order may already be processed for shipping and cannot be changed.",
        },
        {
          title: "Do you offer international shipping?",
          description:
            "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on your location and will be calculated at checkout.",
        },
      ],
    },
    {
      topic: "Shipping",
      question: [
        {
          title: "Do you offeer international shipping?",
          description:
            "Items can be returned within 14 days of receipt, provided they are unworn, unwashed, and in original condition with tags attached.",
        },
        {
          title: "How long does delivery take?",
          description:
            "Delivery usually takes 3–5 business days for domestic orders. International shipping may take between 7–14 business days depending on the destination.",
        },
        {
          title: "How can I track my order?",
          description:
            "After your order has been shipped, you will receive a confirmation email containing a tracking number and a link to track your package in real time.",
        },
      ],
    },
    {
      topic: "Return & Exchanges",
      question: [
        {
          title: "What is your return policy",
          description:
            "Items can be returned within 14 days of receipt provided they are unworn, unwashed, and in original condition with tags attached.",
        },
        {
          title: "Can I exchange for a different size?",
          description:
            "If the size doesn't fit, you can request an exchange within 14 days of receiving your order. The item must be unused and returned with its original packaging and tags.",
        },
        {
          title: "Are sale items refundable?",
          description:
            "Sale items are final sale and cannot be refunded. In some cases, they may be exchanged for another size if stock is available.",
        },
      ],
    },
    {
      topic: "Sizing & Products",
      question: [
        {
          title: "How do I choose the right size?",
          description:
            "You can refer to our size guide available on each product page. We recommend comparing the measurements with a similar item you already own to find the best fit.",
        },
        {
          title: "Can I exchange for a different size?",
          description:
            "Yes, if the size doesn't fit you can request an exchange within 14 days of receiving your order, provided the item is unworn and still in its original condition with tags attached.",
        },
        {
          title: "Do your products fit true to size?",
          description:
            "Most of our products are designed to fit true to size. However, the fit may vary slightly depending on the style and fabric. Please check the product description and size guide for more details.",
        },
      ],
    },
  ],
};

function renderQuestions(container, questions) {
  container.innerHTML = "";
  questions.forEach((question, i) => {
    container.appendChild(
      Accordion({ titleAccordion: question.title, content: question.description, open: i === 0 })
    );
  });
}

function Faq() {
  const section = document.createElement("section");
  section.className = "faq-section";

  // Header area (black background)
  const header = document.createElement("div");
  header.className = "faq-header";

  const title = document.createElement("h2");
  title.className = "faq-title";
  title.textContent = questionData.title;

  const description = document.createElement("p");
  description.className = "faq-description";
  description.textContent = questionData.description;

  // Chips
  const chipGroup = document.createElement("div");
  chipGroup.className = "faq-chips";

  const chips = [];
  questionData.Category.forEach((cat, i) => {
    const chip = Chip({ text: cat.topic, active: i === 0 });
    chips.push(chip);
    chipGroup.appendChild(chip);
  });

  header.appendChild(title);
  header.appendChild(description);
  header.appendChild(chipGroup);

  // Accordion list (white background)
  const accordionList = document.createElement("div");
  accordionList.className = "faq-accordion-list";
  renderQuestions(accordionList, questionData.Category[0].question);

  // Chip handler
  chips.forEach((chip, i) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("chip--active"));
      chip.classList.add("chip--active");
      renderQuestions(accordionList, questionData.Category[i].question);
    });
  });

  section.appendChild(header);
  section.appendChild(accordionList);

  return section;
}

export default Faq;
