const h4Title = document.getElementById("saved-value")
const input = document.getElementById("input")
const saveButton = document.getElementById("save")
const deleteButton = document.getElementById("delete")

saveButton.addEventListener("click", function(){
    const insertValue = input.ariaValue
    localStorage.setItem("saved-name", insertValue)
    h4Title.innerText = insertValue
    input.value = " "
})

deleteButton.addEventListener("click", function(){
    input.value = " "
    localStorage.removeItem("saved-name")
    h4Title.innerText = " "
})

const initialValue = function(){
    const savedValue = localStorage.getItem("saved-name")
    if(savedValue){
        h4Title.innerText = savedValue
    }
}
initialValue()