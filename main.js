const numPeoples = Number(document.querySelector("#numbers-peoples"))

const resetValues = document.querySelector(".btn-reset-data-person")
resetValues.addEventListener("click", clearDataPerson)

function clearDataPerson() {
    if (numPeoples.value == 0) {
        alert("O nº de pessoas tem de ser maior que 0")
    } else {
        dataPerson.forEach(element => {
            element.innerHTML = "$0.00"
        })
    }
}

const dataPerson = document.querySelectorAll(".rows-data span")