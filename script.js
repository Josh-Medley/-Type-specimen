
document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)

myInputElement.select("color span");

document.execCommand("Copy");

function copyText(element) {

    var textToCopy = element.innerText;

    var myTemporaryInputElement = document.createElement("input");
    myTemporaryInputElement.type = "text";
    myTemporaryInputElement.value = textToCopy;

    document.body.appendChild(myTemporaryInputElement);

    myTemporaryInputElement.select("color span");
    document.execCommand("Copy");

    document.body.removeChild(myTemporaryInputElement);

}
