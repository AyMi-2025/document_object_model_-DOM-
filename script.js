/* ====================================
        Selection of an Element 
   ==================================== */

const { createElement } = require("react");

// const h1 = document.querySelector("h1") // Universal (Always use this)
// console.dir(h1) ------------ dir = directory 

// const h1 = document.querySelectorAll("h1") 
// console.dir(h1) ----------- An Array (Nodelist)

// const h1 = document.getElementsByTagName("h1") 
// console.dir(h1) ----------- HTML Collections

// const h1 = document.getElementById"h1") 
// console.dir(h1) ----------- Give ID Name

// const h1 = document.getElementByClassName"h1") 
// console.dir(h1) ----------- Give Class Name

/* ====================================
        Changing of HTML 
   ==================================== */
//    const h2 = document.querySelector("h2");
//    h2.textContent = "polo"


/* ====================================
        Classes()
   ==================================== */

// const h1 = document.querySelector(".head")

/* contain()-----------------------------------

const isClass = h1.classList.contains("head")
console.log(isClass) */


/* toggle()-----------------------------------

const isToggle = h1.classList.toggle("head")
console.log(iToggle) */


/* replace(old, new)-----------------------------------

const replacing = h1.classList.replace("head", 'head1")
console.log(replacing) */


/* add()-----------------------------------

const div = document.querySelector("#div")

 div.classList.add("boxx")
console.log(div) */

/* ====================================
        Attributes
   ==================================== */
// img , src , alt , placeholder...

// const h3 = document.querySelector("#id1")

// getAttribute -----------------------------
// console.log(h3.getAttribute("id"))

// setAttribute ------------------------------
// console.log(h3.setAttribute("Width", "Value"))

// hasAttribute -----------------------------
// console.log(h3.hasAttribute("Width"))

// removeAttribute ------------------------------
// console.log(h3.removeAttribute("Class"))


/* ====================================
        Custom Attributes
   ==================================== */
// const userCard = document.querySelector("#user_card")

// userCard.dataset.userId = "678"
// console.log(userCard.getAttribute("data-user-id"))

/* ========================================================
        input.value v/s input.getAttribute('Value")
   ======================================================== */
// const inp = document.querySelector("input")
// const btn = document.querySelector("button")

// btn.addEventListener("click", () => {
//         console.log("This is inp.value----> ", inp.value); 
//         console.log("This is via Attribute---------->", inp.getAttribute("value"));     
// })

/* =========================================
        Creating, Inserting & Removing 
   ========================================= */
// Creating -------------------------------

// let footer = document.createElement("footer")
// console.log(footer);

// const span = document.createElement("span")

// Insertion ----------------------------------
// i) appendChild()
// document.body.appendChild(footer)
// document.body.appendChild(span) ---------------> Single

// ii) append
// document.body.append(footer, span) -------> Multiple

// Removee ------------------------------
// body.removeChild(span)
