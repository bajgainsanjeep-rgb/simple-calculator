const digits = document.querySelectorAll("#digit");



const input = document.querySelector("#input");
let string = "";
Array.from(digits).forEach((digit) => {
    digit.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else {

            string = string + e.target.innerHTML;
            input.value = string;
        }

    })
})




