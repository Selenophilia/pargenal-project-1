let uiController = (() => {
    return{
         getDOMStr(){
            let obj = {
                 calc_input: document.querySelector('.name-input'),
                 calculator: document.querySelector('.calculator'),
                 calc_keys: document.querySelector('.calculator__keys'),
                 calc_display: document.querySelector('.calculator__display'),
                 clear: document.querySelector(".clear")
            }
            return obj;
        }
    }


})()

let main = (( UICtrls) => {
   
   let eventListeners = function(){
        const input = UICtrls.getDOMStr().calc_input
        const calculator = UICtrls.getDOMStr().calculator
        const display = UICtrls.getDOMStr().calc_display

        input.addEventListener('keypress', function(e){
            if(e.keyCode === 13 && input.value !== ""){
                display.textContent = input.value
                input.value = ""
            }
        });

        UICtrls.getDOMStr().calc_keys.addEventListener('click', function(e){
            const key = e.target 
            const action = key.dataset.greeting      
            const keyContent = key.textContent
            const displayName  = display.textContent
            let greeting = calculator.dataset.greeting
   
            if(e.target.matches('button')){
                    if(action === "Hello,World!" ){
                               if(display.textContent == "0" || greeting === "Goodbye!"){
                                    display.textContent = action
                               } else {
                                    if(!displayName.includes('Hello,')){
                                         display.textContent = `Hello, ${displayName}!`
                                    }
                                }   
                       calculator.dataset.greeting = action     
                    }

                    if(action === "Goodbye!"){
                        if(display.textContent == "0" || greeting === "Hello,World!"){
                                display.textContent = action

                        } else {
                           if(!displayName.includes('Goodbye,')){
                                display.textContent = `Goodbye, ${displayName}`
                           }

                        }       
                        calculator.dataset.greeting = action     
                     }

                    if(action === 'clear'){
                        display.textContent = '0'
                        calculator.dataset.greeting = ""
                        calculator.dataset.name = "nameBtn"
                    }

                    if(!action){
                       display.textContent = keyContent   
                       calculator.dataset.name = "nameBtn"     
                    }

                } 
            });
    }
    return{
        init: function(){
            eventListeners();
        }
    }

})(calcController,uiController)
main.init()