const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const task = document.querySelector('.add-task');

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

task.addEventListener("click",function(e){
    
})