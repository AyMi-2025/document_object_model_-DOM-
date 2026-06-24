/* ====================================
        Selection of an Element 
   ==================================== */

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