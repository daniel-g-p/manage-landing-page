const domElements = {
    headerNav: document.querySelector(".header__nav"),
    burger: document.querySelector(".header__toggle")
}

const functions = {
    toggleState(element, className, state) {
        element.classList.toggle(`${className}--${state}`);
    }
};

domElements.burger.addEventListener("click", () => {
    functions.toggleState(domElements.headerNav, "header__nav", "active");
    functions.toggleState(domElements.burger, "header__toggle", "active");
})