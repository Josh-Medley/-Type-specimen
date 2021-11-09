
document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)

myInputElement.select();

document.execCommand("Copy");

function copyText(element) {

    var textToCopy = element.innerText;

    var myTemporaryInputElement = document.createElement("input");
    myTemporaryInputElement.type = "text";
    myTemporaryInputElement.value = textToCopy;

    document.body.appendChild(myTemporaryInputElement);

    myTemporaryInputElement.select();
    document.execCommand("Copy");

    document.body.removeChild(myTemporaryInputElement);

}
