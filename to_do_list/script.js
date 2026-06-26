const inp = document.querySelector("input")
const btn = document.querySelector("#add")

btn.addEventListener("click", () => {
    const value = inp.value
    if(value.trim() === "") return;
    todoBox.innerHTML  += `<div class="li">
                <h3>${value}</h3>
                <div>
                    <button class="btn edit">EDIT</button>
                    <button class="btn del">DELETE</button>
                </div>
            </div>`

    inp.value = ""

})