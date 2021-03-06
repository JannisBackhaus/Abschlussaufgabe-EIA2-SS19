var AbschlussaufgabeSS19;
(function (AbschlussaufgabeSS19) {
    document.addEventListener("DOMContentLoaded", function () {
        const closeModalButtons = document.getElementsByClassName("close-modal");
        for (let i = 0; i < closeModalButtons.length; i++) {
            closeModalButtons[i].addEventListener("click", closeModal);
        }
    });
    AbschlussaufgabeSS19.address = "https://eisdealer-19.herokuapp.com/";
    //let address: string = "http://localhost:8100/";
    function newElement(_element, _classes, _appendTo) {
        const classArray = _classes.split(" ");
        switch (_element) {
            case "div":
                const div = document.createElement("div");
                for (let i = 0; i < classArray.length; i++) {
                    if (_classes !== "")
                        div.classList.add(classArray[i]);
                }
                if (_appendTo !== null)
                    _appendTo.append(div);
                return div;
            case "input":
                const input = document.createElement("input");
                for (let i = 0; i < classArray.length; i++) {
                    if (_classes !== "")
                        input.classList.add(classArray[i]);
                }
                if (_appendTo !== null)
                    _appendTo.append(input);
                return input;
            case "select":
                const select = document.createElement("select");
                for (let i = 0; i < classArray.length; i++) {
                    if (_classes !== "")
                        select.classList.add(classArray[i]);
                }
                if (_appendTo !== null)
                    _appendTo.append(select);
                return select;
            case "option":
                const option = document.createElement("option");
                for (let i = 0; i < classArray.length; i++) {
                    if (_classes !== "")
                        option.classList.add(classArray[i]);
                }
                if (_appendTo !== null)
                    _appendTo.append(option);
                return option;
            case "button":
                const button = document.createElement("button");
                for (let i = 0; i < classArray.length; i++) {
                    if (_classes !== "")
                        button.classList.add(classArray[i]);
                }
                if (_appendTo !== null)
                    _appendTo.append(button);
                return button;
            default:
                const element = document.createElement(_element);
                for (let i = 0; i < classArray.length; i++) {
                    if (_classes !== "")
                        element.classList.add(classArray[i]);
                }
                if (_appendTo !== null)
                    _appendTo.append(element);
                return element;
        }
    }
    AbschlussaufgabeSS19.newElement = newElement;
    function closeModal() {
        toggleModal("", "", null, true);
        // TS-Lint is not allowing access to arguments.callee, therefore we reinitialize the button
        let confirmButton = document.getElementById("confirm-modal");
        confirmButton.remove();
        let url = document.URL;
        if (url.includes("index")) {
            confirmButton = newElement("button", "btn btn-danger", null);
            const divForButton = document.getElementById("modal-footer");
            divForButton.insertBefore(confirmButton, divForButton.children[0]);
            confirmButton.setAttribute("type", "button");
            confirmButton.setAttribute("id", "confirm-modal");
            confirmButton.innerHTML = "Delete";
        }
        else if (url.includes("orders")) {
            confirmButton = newElement("button", "btn btn-success", null);
            const divForButton = document.getElementById("modal-footer");
            divForButton.insertBefore(confirmButton, divForButton.children[0]);
            confirmButton.setAttribute("type", "button");
            confirmButton.setAttribute("id", "confirm-modal");
            confirmButton.innerHTML = "Close order";
        }
    }
    AbschlussaufgabeSS19.closeModal = closeModal;
    function toggleModal(typeOfElement, placeholderText, elementToRemove, isHidden) {
        const modal = document.getElementById("modal");
        const namePlaceholders = document.getElementsByClassName("modal-name-placeholder");
        const typePlaceholders = document.getElementsByClassName("modal-type-placeholder");
        for (let i = 0; i < namePlaceholders.length; i++) {
            namePlaceholders[i].innerHTML = placeholderText;
        }
        for (let i = 0; i < typePlaceholders.length; i++) {
            typePlaceholders[i].innerHTML = typeOfElement;
        }
        let confirmButton = document.getElementById("confirm-modal");
        confirmButton.addEventListener("click", function (event) {
            closeModal();
            if (document.URL.includes("orders"))
                AbschlussaufgabeSS19.deleteSingleOrder(elementToRemove);
            elementToRemove.remove();
        });
        modal.hidden = isHidden;
    }
    AbschlussaufgabeSS19.toggleModal = toggleModal;
})(AbschlussaufgabeSS19 || (AbschlussaufgabeSS19 = {}));
//# sourceMappingURL=main.js.map