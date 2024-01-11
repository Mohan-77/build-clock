//clock
//variable
const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')



//functions clock
function setTime () {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12 ;

    wareegSamee(secondHand, secondRatio)
    wareegSamee(minuteHand, minuteRatio)
    wareegSamee(hourHand, hourRatio)
}

function wareegSamee (element, rotationRatio) {
    element.style.setProperty('--wareeg', rotationRatio * 360)
}
setTime();
setInterval(setTime, 1000);

//Buttons
//variable
const btnOne = document.getElementById('button1')
const btnTwo = document.getElementById('button2')
const btnThree = document.getElementById('button3')
const btnFour = document.getElementById('button4')
const clock = document.querySelector('.clock')
const buttons = document.querySelectorAll('.button')

// changing node list to an array
const buttonsArray = Array.from(buttons);

const colors = ['#fad490', '#f19292', '#edf0f2', '#ffe100']



//EventListeners
buttonsArray[0].addEventListener('click', changeToOrange)
buttonsArray[1].addEventListener('click', changeToRed)
buttonsArray[2].addEventListener('click', changeToGrey)
buttonsArray[3].addEventListener('click', changeToYellow)

function changeToOrange(){
    clock.style.background = colors[0];
}

function changeToRed(){
    clock.style.background = colors[1]
}
function changeToGrey(){
    clock.style.background = colors[2]
}
function changeToYellow(){
    clock.style.background = colors[3]
}



// functions
