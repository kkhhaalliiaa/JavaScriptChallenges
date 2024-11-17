function excercise(excerciseName){
    return()=>{
        console.log(`Todays exercise: ${excerciseName}`);
    };
}

const running = excercise('Running');
const swimming = excercise('Swimming');
const  dancing = excercise('Dancing');
const fencing = excercise('Fencing');

running();
swimming();
dancing();
fencing();