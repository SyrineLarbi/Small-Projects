const body=document.querySelector(".container")
const toggle=document.getElementById("dark-mode")
const circleh=document.querySelector('.circle');
const label=document.querySelector('.labelToggle');
toggle.addEventListener("click", ()=>{
    console.log(circleh);
    circleh.classList.toggle("move");
    label.classList.toggle('white');
    body.classList.toggle('dark');
})