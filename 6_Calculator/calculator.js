const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        themeLabel.textContent = "Switch to Dark Theme";
    } else {
        themeLabel.textContent = "Switch to Light Theme";
    }
});

let input = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        if (value == '=') {
            try {
                string = eval(string.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-'));
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (value == 'AC') {
            string = "";
            input.value = string;
        } else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});