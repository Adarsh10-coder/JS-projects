const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height ==='' || height <0 || isNaN(height)){
        results.innerHTML = "please give valid height"
    }
    else if(weight ==='' || weight <0 || isNaN(weight)){
        results.innerHTML = "please give valid weight"
    }
    else if(height && weight ==='' || height & weight <0 || isNaN(height && weight)){
        results.innerHTML = "please give valid height and weight"
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        // toFixed(2) --> it give data upto 2 decimal place
        results.innerHTML = `Your BMI is : <span>${bmi}</span>`;
    }

});