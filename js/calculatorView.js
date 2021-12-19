import calculatorLogic from './calculatorLogic.js';
class calculatorView {
    #operator = null;
    #y=0;
    #x=0;
    #result=0;
    #dot=false;

    pressNumber = (number, e) => {
        let element = e.currentTarget;
        this.handleEventButtons(element);
        if(this.#operator){
            if(this.#dot){
                this.#y = `${this.#y}${number}`
            }else{
                this.#y = this.#y*10 + number;
            }
            this.handleClearScreen();
            this.handleUpdateScreen(this.#y)
        }else{
            if(this.#dot){
                this.#x = `${this.#x}${number}`
            }else{
                this.#x = this.#x*10 + number;
            }
            this.handleUpdateScreen(this.#x)
        }
    }

    pressDot = (e)=>{
        let element = e.currentTarget;
        this.handleEventButtons(element);
        this.#dot = true;
        if (this.#operator) {
            this.#y = `${this.#y}.`;
            this.handleUpdateScreen(this.#y)
        } else {
            this.#x = `${this.#x}.`;
            this.handleUpdateScreen(this.#x)
        }
    }

    handleOperator = (newOperator)=>{
        this.#dot=false;
        if(this.#operator){
            this.#x = calculatorLogic.calculation(this.#operator , this.#x , this.#y)
        }
        this.#operator = newOperator;
        this.#y=0;
        this.handleEventButtons(document.getElementById(newOperator))
    }

    handleSquareRoot = (newOperator) => {
        this.#dot=false;
    if (this.#operator) {
        this.#x = calculatorLogic.calculation(this.#operator , this.#x , this.#y)
    }
    this.#operator = newOperator;
    this.handleEventButtons(document.getElementById(newOperator))
    this.#x = calculatorLogic.calculation(this.#operator , this.#x)
    this.handleClearScreen();
    this.handleUpdateScreen(this.#x);
    this.#operator = null;
    }

    handleResult = (resultButton) => {
        this.handleClearScreen();
        this.handleEventButtons(document.getElementById(resultButton))
        if(this.#operator){
            this.#result = calculatorLogic.calculation(this.#operator , this.#x , this.#y);
            this.#x=this.#result;
        }
        else{
            this.#result = this.#x;
        }
        this.handleUpdateScreen(this.#result);
        this.#operator = null;
        this.#dot=false;
    }

    handleUpdateScreen = (newNumber) => {
        let elementDigit = Array.from(document.querySelectorAll('.digit-number'))
        newNumber = newNumber.toString();
        if (newNumber.length > 14) { newNumber = newNumber.substr(0, 14) }
        for (let i = newNumber.length; i >= 1; i--) {
            elementDigit[elementDigit.length - i].innerHTML = newNumber[newNumber.length - i]
        }
    }

    handleClearScreen = ()=>{
        let elementDigit = Array.from(document.querySelectorAll('.digit-number'));
        for (let element of elementDigit) {
            element.innerHTML = '';
        }
    }

    handleClear = (e)=>{
        this.#x = 0;
        this.#y = 0;
        this.#operator = null;
        this.handleEventButtons(e.currentTarget);
        this.handleClearScreen();
        this.handleUpdateScreen(this.#x);
    }

    handleEventButtons = (button) => {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 100)
    }
}
export default calculatorView;
