const equContainers = document.getElementsByClassName("equation");
const inputs = document.getElementsByClassName("the_input");
const resultContainers = document.getElementsByClassName("result");

let equValues = {};

const rollValues = () => {
    for(var i = 0; i < equContainers.length; i++) {
        const x = Math.floor(Math.random() * 10 + 1);
        const y = Math.floor(Math.random() * 10 + 1);
        equValues[i] = {
            x_value: x,
            y_value: y,
            result: x*y,
            string_value: `${x} x ${y} =`
        };
    }
};
const insertValues = () => {
    for(var i = 0; i < equContainers.length; i++) {
        if(equValues[i]) 
            equContainers[i].innerHTML = equValues[i].string_value;
    }
};
const clean = () => {
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        resultContainers[i].innerHTML = "";
    }
}
rollValues();
insertValues();


//BUTTON FUNCTIONS
const checkValues = () => {
    let score = 0;
    let max = inputs.length;
    for(var i = 0; i < inputs.length; i++) {
        const input_val = inputs[i].value;
        if(input_val == equValues[i].result) {
            score++;
            resultContainers[i].innerHTML = "<p class='result-text good'>:-)</p>";
        } else {
            resultContainers[i].innerHTML = "<p class='result-text bad'>:-(</p>";
        }
    }
    alert(`Sait ${score} / ${max} oikein!`);
};  

const reRoll = () => {
    clean();
    rollValues();
    insertValues();
};

const showRealValues = () => {
    for(var i = 0; i<inputs.length; i++) {
        inputs[i].value = equValues[i].result;
    }
};
