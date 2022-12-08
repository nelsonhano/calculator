//SELECTING OF ELEMENT
const output_operation_element = document.querySelector("operation .value");
const output_result_element = document.querySelector(".result .value");
const input_element =  document.querySelector(".input");

//SOME VARIABLES
const OPERATORS = ["+","-","*","/"];
const POWER = "POWER(", FACTORIAL = "FACTORIAL";
let data = {
    operation : [],
    formula : []
}
let ans = 0;

 // CALCULATOR BUTTONS
const calculator_btns = [

    {
        name: "rad",
        symbol: "Rad",
        formula: false,
        type: "key"
    },
    {
        name: "deg",
        symbol: "Deg",
        formula: "math.deg",
        type: "key"
    },
    {
        name: "square_root",
        symbol: "SR",
        formula: "math.sqrt",
        type: "math_function"
    },
    {
        name: "square",
        symbol: "square",
        formula: POWER,
        type: "math_function"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    },
    {
        name: "delete",
        symbol: "DEL",
        formula: false,
        type: "operator"
    }
]

// CREATING CALCULATOR BUTTONS
function creatCalculatorButtons() {
    const bts_per_row = 8;
    let added_btns = 0;

    calculator_btns.forEach( button => {
        if (added_btns % bts_per_row == 0) {
            input_element.innerHTML += `<div class="row"></div>`;
        }

        const row = document.querySelector(".row:last-child");
        row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;
        added_btns++;
    } )
}
creatCalculatorButtons();

//CLICK EVENT LISTENER

input_element.addEventListener("click", event => {
    const target_btn = event.target;

    calculator_btns.forEach( button => {
        if(button.name == target_btn.id ) calculator(button);
    })

})

//CALCULATOR 
function calculator(button) {
    if (button.type == "operator") {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);

        
    } else if(button.type == "number"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    } else if(button.type == "trigo_function"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    }  else if(button.type == "math_function"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    }  else if(button.type == "key"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    }  else if(button.type == "calculate"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    }   
    updateOutputOperation(data.operation.join(''))
    }

    //UPDATE OUTPUT
    function updateOutputOperationme(operation) {
        output_operation_element.innerHTML = operation;
    }
    function updateOutputResult(result) {
        output_result_element.innerHTML = result;
    }
    


// let vvv =  calculator_btn.length;
// console.log(vvv);