const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")

// METHOD 01 - (LONG)

// let status = true;

// btn.addEventListener("click", function () {
//     if(status){
//         bulb.style.backgroundColor = "yellow";
//         btn.textContent = "OFF";
//         status = false;
//     }else{
//         bulb.style.backgroundColor = "transparent";
//         btn.textContent = "ON";
//         status = true;
//     }
// })

// METHOD 02 - (SHORT)

btn.addEventListener("click", function(){
    if(bulb.classList.toggle("lightUp")){
        btn.textContent = "OFF"
    }else{
        btn.textContent = "ON"
    }
})