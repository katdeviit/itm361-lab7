function init() {
    // get required elements
    let alertMe = document.getElementById("entrybutton");
    alertMe.addEventListener('click', () => {
        // alert popup
        alert("Kat [REDACTED]: This is a test");
        let inputElement = document.getElementById("entryinput");
        let textOutputElement = document.getElementById("textoutput");
        // get the value of the input
        let inputContents = inputElement.value;
        // Copy text from input - use innerText as innerHTML would allow DOM injection
        textOutputElement.innerText = inputContents;
    })
}
window.addEventListener('load', init);