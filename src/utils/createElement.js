// createElement for this function
// tag for assign HTML tag 
// options for assign attributes, classes, and text content to the created element
function createElement(tag, options={}) {
    const element = document.createElement(tag)

    // class
    if(options.class) {
        element.className = options.class
    }
    // text
    if(options.textContent) {
        element.textContent = options.textContent
    }
    // other attributes
    if(options.attrs) {
        Object.entries(options.attrs).forEach(([key, value]) => {
            element.setAttribute(key, value)
        })
    }

    return element;
}
