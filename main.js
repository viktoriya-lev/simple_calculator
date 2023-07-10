(()=> {
   const resultElement = document.getElementById('result');
   const input1 = document.getElementById('input1');
   const input2 = document.getElementById('input2');
   const plusBtn = document.querySelector('.btn-plus');
   const minusBtn = document.querySelector('.btn-minus');
   const multiplyBtn = document.querySelector('.btn-multiply');
   const divideBtn = document.querySelector('.btn-divide');
   const submitBtn = document.querySelector('.btn-submit');
   const restartBtn = document.querySelector('.btn-restart');

   let action = '';

   plusBtn.onclick = function() {
       action = '+';
   }

    minusBtn.onclick = function() {
        action = '-';
    }

    multiplyBtn.onclick = function() {
        action = '*';
    }

    divideBtn.onclick = function() {
        action = '/';
    }

    function computeResult(inp1, inp2, actionSymbol) {
       const num1 = Number(inp1.value);
       const num2 = Number(inp2.value);

       if (actionSymbol === '+') {
           return num1 + num2;
       } else if (actionSymbol === '-') {
           return num1 - num2;
       } else if (actionSymbol === '*') {
           return num1 * num2;
       } else if (actionSymbol === '/') {
           return num1 / num2;
       } else {
           alert('Oops! It seems that you forgot to choose a calculation method...')
           return resultElement.textContent = ':(';
       }
    }

    function printResult(result) {
       resultElement.textContent = result;
    }

   submitBtn.onclick = function() {
      const result = computeResult(input1, input2, action);
      printResult(result);
   }

    restartBtn.onclick = function() {
        input1.value = '';
        input2.value = '';
        printResult('0');
    }
})();
