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




// requirement-1 "the love counter"
const counters = getsClass("h-a-counter")

let count = Number(getID("heart-attack").innerText);
for (let counter of counters) {
    counter.addEventListener("click", function () {
        count++
        getID("heart-attack").innerText = count;
    })
}

// requirement-2 "showing an alert when click the call button in card and adding them in the sidebar called "call-history"

getID("service-cards").addEventListener("click", function (e) {
    if (e.target.className.includes("call-button")) {

        let countCoin = Number(getID("coin").innerText);

        const callButton = e.target;
        let title = callButton.parentNode.parentNode.children[0].innerText;
        let subTitle = callButton.parentNode.parentNode.children[1].innerText;
        let number = callButton.parentNode.parentNode.children[2].innerText;
       

        if (countCoin >= 20) {
            countCoin -= 20;
            getID("coin").innerText = countCoin;

           alert("📞 Calling " + subTitle + " " + number + "...");
        } else {
          return alert("You've to at least 20 coin to make a call!😫");
        }

        const callTime = new Date().toLocaleTimeString()

        const callHistory = getID("call-container");

        const newHistory = document.createElement("div")
        newHistory.innerHTML = `
            <div class="bg-zinc-50 p-4 rounded-xl shadow-xl flex items-center justify-between my-3">
                    <div class="">
                        <h1>${title}</h1>
                        <p>${number}</p>
                    </div>
                    <p>${callTime}</p>
            </div>
        `;

        callHistory.append(newHistory);
    }
})

// requirement-3 clear the sidebar after clicking the "clear" button

getID("clear-history").addEventListener("click", function () {
    getID("call-container").innerHTML = "";
})

// requirement-4 copy the number

getID("service-cards").addEventListener("click", function (e) {

    let copyCounter = Number(getID("copy-counter").innerText);

    if (e.target.className.includes("copy-btn")) {
        const copyBtn = e.target;
        const copied = copyBtn.parentNode.parentNode.children[2].innerText

        copyCounter++
        getID("copy-counter").innerText = copyCounter;
        
        navigator.clipboard.writeText(copied)
        alert("Number Copied 👍 " + copied)
    }
})

// functions for the"floating button" to show the call history section on mobile devices

getID("floating-button").addEventListener("click", function () {
    const callHistories = document.querySelector(".call-history")
    consol(callHistories)

    callHistories.classList.toggle("hidden")

    if (callHistories.className.includes("hidden") === false) {
        callHistories.classList.add("sticky", "bottom-20", "w-11/12", "mx-auto")
    }

});