document.addEventListener("click", function(e) {
    // delete
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Do you want delete this")) {
            axios.post('/delete-item', { id: e.target.getAttribute("data-id") }).then(function() {
                e.target.parentElement.parentElement.remove()
            }).catch(function() {
                console.log("Try again later")
            })
        }
    }
    // update
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter new", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
        if (userInput) {
            axios.post('/update-item', { text: userInput, id: e.target.getAttribute("data-id") }).then(function() {
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
            }).catch(function() {
                console.log("Try again later")
            })
        }
    }
})