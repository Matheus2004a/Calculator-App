const moneyPerson = document.querySelector("#value-bill")
const numPeoples = document.querySelector("#numbers-peoples")
const percentTip = document.querySelectorAll(".container-tips-percentage button")
const percentTipCustom = document.querySelector("#btn-custom")
const resetValues = document.querySelector(".btn-reset-data-person")
resetValues.addEventListener("click", clearDataPerson)

const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
    calcBill()
})

let costTotalBill
let resultTip

function calcBill() {
    let messageError = document.createElement("span")
    costTotalBill = moneyPerson.value / numPeoples.value

    if (numPeoples.value <= 0 && percentTipCustom.value <= 0) {
        messageError.innerHTML = "Can't be zero or less"
        document.querySelectorAll("legend")[2].appendChild(messageError)
        numPeoples.classList.add("error")
    } else {
        messageError.innerHTML = ""
        dataPerson[1].innerHTML = `$${costTotalBill.toFixed(2)}`
        numPeoples.classList.remove("error")
        calcTip()
    }
    function calcTip() {
        percentTip.forEach(valueTip => {
            valueTip.addEventListener("click", () => {
                resultTip = costTotalBill * valueTip.value / 100
                costTotalBill += resultTip
                dataPerson[0].innerHTML = `$${resultTip.toFixed(2)}`
                dataPerson[1].innerHTML = `$${costTotalBill.toFixed(2)}`
            })
        })
    }
}

function checkNumberTipCustom(valueTipCustom) {
    let ruleValue = /^[1-9]+$/
    let messageError = document.createElement("p")

    if (valueTipCustom.match(ruleValue)) {
        messageError.innerHTML = ""
    } else {
        messageError.innerHTML = "Type only positive integer number!"
        messageError.classList.add("error")
        document.querySelector(".container-tips-percentage").appendChild(messageError)
    }

    resultTip = moneyPerson.value * valueTipCustom / 100
    resultTip /= numPeoples.value
    costTotalBill += resultTip

    dataPerson[0].innerHTML = `$${resultTip.toFixed(2)}`
    dataPerson[1].innerHTML = `$${costTotalBill.toFixed(2)}`
}

function clearDataPerson() {
    dataPerson.forEach(element => {
        element.innerHTML = "$0.00"
    })
    moneyPerson.value = ""
    numPeoples.value = ""
    percentTipCustom.value = ""
    moneyPerson.focus()
}

const dataPerson = document.querySelectorAll(".rows-data span")