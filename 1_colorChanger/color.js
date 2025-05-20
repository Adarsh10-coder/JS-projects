const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = "grey"; // OR e.target.id
        }
        if(e.target.id === 'violet'){
            body.style.backgroundColor = "violet";
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = "blue";
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = "yellow";
        }
    })
})
