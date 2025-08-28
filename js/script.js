// functions to short this codes

// function-1 console log
function consol(para) {
    return console.log(para)
}

// function-2 get element by id
function getID(id) {
    return document.getElementById(id)
}

// function-3 get elements by class name
function getsClass(clas) {
    return document.getElementsByClassName(clas)
}



// requirement 1 "the love counter"
const counters = getsClass("h-a-counter")

let count = getID("heart-attack").innerText;
for (let counter of counters) {
    counter.addEventListener("click", function () {
        count++
        getID("heart-attack").innerText = count;
    })
}
