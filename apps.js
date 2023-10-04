const name = prompt(`Enter your Name`);
const weight = Number(prompt(`Enter your weight in Kilograms`));
const height = Number(prompt(`Enter your height in Centimeters`));

function calc(){
    const convert = (height*0.01)
    console.log(convert)
    const step1 = (convert*convert)
    console.log(step1)
    const step2 = (weight/step1)
    console.log(step2)

    if(step2 <= 18.5){
        console.log(`${name} you are underweight`);
    }
    if(18.5 <= step2 && step2<= 24.9){
      console.log(`${name} you are normal weight`); 
    }
    if(25 <= step2 && step2 <= 29.9 ){
        console.log(`${name} you are overweight`);
    }
    if(step2 >= 30){
        console.log(`${name} you are obese`);
    }
}
const bmi = calc();
