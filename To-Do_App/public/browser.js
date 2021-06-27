document.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter new")
        axios.post('/update-item', { text: userInput }).then(function() {
            // do somthing later
        }).catch(function() {
            console.log("Try again later")
        })
    }
})