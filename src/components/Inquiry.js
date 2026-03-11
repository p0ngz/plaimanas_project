function createInquiryHeader() {
  const header = document.createElement("div");
  header.className = "inquiry-header";

  const title = document.createElement("h2");
  title.className = "inquiry-title";
  title.textContent = "MAKE AN INQUIRY";

  const description = document.createElement("p");
  description.className = "inquiry-description";
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, nisl non rhoncus commodo.";

  header.appendChild(title);
  header.appendChild(description);

  return header;
}

function createRadioGroup() {
  const group = document.createElement("div");
  group.className = "inquiry-radio-group";

  const options = ["Onsite", "Hybrid"];
  options.forEach((option, i) => {
    const label = document.createElement("label");
    label.className = "inquiry-radio-label";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "inquiry-type";
    radio.value = option.toLowerCase();
    radio.className = "inquiry-radio";
    if (i === 0) radio.checked = true;

    const text = document.createElement("span");
    text.textContent = option;

    label.appendChild(radio);
    label.appendChild(text);
    group.appendChild(label);
  });

  return group;
}

function createInput(labelText, type = "text") {
  const wrapper = document.createElement("div");
  wrapper.className = "inquiry-field";

  const input = document.createElement("input");
  input.className = "inquiry-input";
  input.type = type;
  input.placeholder = " ";

  const label = document.createElement("label");
  label.className = "inquiry-label";
  label.textContent = labelText;

  wrapper.appendChild(input);
  wrapper.appendChild(label);

  return wrapper;
}

function createSelect(labelText, options) {
  const wrapper = document.createElement("div");
  wrapper.className = "inquiry-field";

  const label = document.createElement("label");
  label.className = "inquiry-label";
  label.textContent = labelText;

  const select = document.createElement("select");
  select.className = "inquiry-select";
  select.required = true;

  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = "Select Subject*";
  defaultOpt.disabled = true;
  defaultOpt.selected = true;
  select.appendChild(defaultOpt);

  options.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.toLowerCase();
    option.textContent = opt;
    select.appendChild(option);
  });

  wrapper.appendChild(label);
  wrapper.appendChild(select);

  return wrapper;
}

function createCheckbox() {
  const wrapper = document.createElement("div");
  wrapper.className = "inquiry-checkbox-wrapper";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "inquiry-checkbox";
  checkbox.id = "inquiry-terms";

  const label = document.createElement("label");
  label.className = "inquiry-checkbox-label";
  label.setAttribute("for", "inquiry-terms");
  label.textContent = "I agree to all terms & conditions";

  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);

  return wrapper;
}

function createInquiryForm() {
  const form = document.createElement("form");
  form.className = "inquiry-form";

  form.appendChild(createRadioGroup());

  const fieldGroup = document.createElement("div");
  fieldGroup.className = "inquiry-field-group";
  fieldGroup.appendChild(createInput("Full name*"));
  fieldGroup.appendChild(createInput("Email*", "email"));
  fieldGroup.appendChild(createInput("Phone Number*", "tel"));

  const selectWrapper = createSelect("", [
    "General Inquiry",
    "Partnership",
    "Support",
    "Other",
  ]);
  fieldGroup.appendChild(selectWrapper);

  form.appendChild(fieldGroup);
  form.appendChild(createCheckbox());

  const submitBtn = document.createElement("button");
  submitBtn.className = "inquiry-submit";
  submitBtn.type = "submit";
  submitBtn.textContent = "SEND";
  form.appendChild(submitBtn);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  return form;
}

function Inquiry() {
  const section = document.createElement("section");

  section.className = "inquiry-section";
  section.appendChild(createInquiryHeader());
  section.appendChild(createInquiryForm());
  return section;
}

