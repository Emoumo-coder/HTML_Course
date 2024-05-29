const view1 = document.getElementById("view1");
const view2 = document.querySelector("#view2");

console.log(view1);
console.log(view2);

const view1WithClass = document.querySelector(".view");
// another way of selecting elements by class
const views = document.getElementsByClassName('view');
console.log(view1WithClass);

// get elements by tagName

const divs = document.getElementsByTagName("div");
console.log(divs);

const divsWithQuery = document.querySelectorAll('div');

console.log(divsWithQuery);

//   style property on the selected elements
view1.style.backgroundColor = "#ddd";
// view1.style.display = "block"

for (let i = 0; i < divs.length; i++) {
    divs[i].style.borderRadius = "20px";
}

// Pseudo class
const evenDivs = document.querySelectorAll('div:nth-of-type(2n)');

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "steelblue"
}

const header = document.querySelector("header");
const headerP = document.querySelector("header p");

header.style.display ="flex";
header.style.alignItems = "center"
header.style.justifyContent = "space-between"
headerP.style.display = "block"

console.log(headerP.textContent);
headerP.textContent = "<span class='text-stand' >This was changed.</span>"
console.log(headerP.innerHTML);
headerP.innerHTML = "<span class='text-stand' >This was changed.</span>";

// Nodes
view1.style.display = "none";

const createDiv = (parentElement, textContent) => {
    const div = document.createElement("div");
    div.setAttribute("class", "box");
    div.textContent = textContent;
    parentElement.append(div);
}

console.log(view2.lastElementChild);
if (view2.lastElementChild) {
    view2.lastElementChild.remove();
}

view2.style.padding = "1rem"
view2.style.flexFlow = "row wrap";
view2.style.gap = "5px"

let i = 0;
while (i < 6) {
    createDiv(view2, "Umar");
    i++;
}