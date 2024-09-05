const form = document.querySelector('form');
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight/ ((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            results.innerHTML = `Your BMI is <span><u>${bmi}</u></span> you are <u>Underweight</u>` 
        }else if(bmi>=18.6 &&  bmi<=24.9){
            results.innerHTML = `Your BMI is <span><u>${bmi}</u></span> you are <u>Normal</u>`
        }else if(bmi>24.9)
        {
            results.innerHTML = `Your BMI is <span><u>${bmi}</u></span> you are <u>Overweight</u>`
        }
        
    }
    // results.innerHTML = `${height}`;
});
