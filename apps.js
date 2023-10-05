const username = prompt(`Enter your Name`);
const weight = Number(prompt(`Enter your weight in Kilograms`));
const height = Number(prompt(`Enter your height in Centimeters`));
/* var step2 = {}; */
// used this like an idiot, but it esentially makes a list!!!

function calc(){
    const convert = (height*0.01)
    const step1 = (convert*convert)
    step2 = (weight/step1)
}
function BMILVL(){
    const bmi = calc();
    if(step2 <= 18.5){
        console.log(`${username} you are underweight`);
    }
    if(18.5 <= step2 && step2<= 24.9){
      console.log(`${username} you are normal weight`); 
    }
    if(25 <= step2 && step2 <= 29.9 ){
        console.log(`${username} you are overweight`);
    }
    if(step2 >= 30){
        console.log(`${username} you are obese`);
    }
}
const BMI= BMILVL();
