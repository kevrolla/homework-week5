var myList = document.getElementsByTagName("li");
var index;

for (index = 0; index < myList.length; index++) {
    const aSpanTag = document.createElement("SPAN");
    const someTxt = document.createTextNode("\u00D7");
    aSpanTag.className = "close";
    aSpanTag.appendChild(someTxt);
    myList[index].appendChild(aSpanTag);
}

// close button
var closeButton = document.getElementsByClassName("close");

for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
        const theDiv = this.parentElement;
        theDiv.style.display = "none";
    }
}

// close button
var closeButton = document.getElementsByClassName("close");

// creating new day planner
function createNewElement() {
    const li = document.createElement('li'); 
    const theInputValue = document.getElementById("the-input").value;
    const textNode = document.createTextNode(theInputValue);
    li.appendChild(textNode);

    if (theInputValue === '') {
        alert("Hey this cannot be empty")
    } else {
        document.getElementById("the-ul").appendChild(li);
    }
    document.getElementById("the-input").value = "";
    const thePanTag = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    thePanTag.className = "close";
    thePanTag.appendChild(txt);
    li.appendChild(thePanTag);

    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
            const theDiv = this.parentElement;
            theDiv.style.display = "none";
        }
    }

}

const ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('checked');
    }
})