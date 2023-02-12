
// Select all buttons
const btns = document.querySelectorAll('table button');

// Select screen
const screen = document.querySelector('#screen');


// evaluate function in JavaScript is used for
// the calculation.


for(let button of btns) {
    
    // e is the event object
    button.addEventListener('click' , (event_object) => {

        // console.log(event_object.target);
        
        const buttonText = event_object.target.innerText;

        console.log(buttonText)

        if(buttonText === 'C') {

            screen.value = "";
            
        } else if(buttonText === 'x') {

            screen.value += '*';

        } else if(buttonText === '='){

           try { // <-- if eval donot gives error.

               screen.value = eval(screen.value);
           }

           catch (event_object) { // <-- if error occurred by eval.

              screen.value = 'Invalid Operation';
           }
            

        }else {

            screen.value += buttonText;
        }

    })
}


// ------------ Mode --------------

const mode_btns = document.querySelectorAll('#Mode');

const Html = document.querySelector('Html');
const body = document.querySelector('body');
const container = document.querySelector('#container')

for(let mode of mode_btns) {

    mode.addEventListener('click',(e) => {
        
        const modeText = e.target.innerText;

       
        console.log(e.target)
        if(modeText === "Dark Mode") {

            console.log("hello");
            Html.style.background = "black";
            Html.style.color = "white";

            body.style.background = "black"

            screen.style.background = "white";
            screen.style.color = "black";

            


        } else {

            console.log("light")
            Html.style.background = "white"
            Html.style.color = "black"

            body.style.background = "white"
            body.style.color = "black"

            container.style.background = "white"
            container.style.color = "black"
        }
         
    })
}