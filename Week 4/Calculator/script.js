function calculateResult() 
{
    let fnum = parseFloat(document.getElementById('fnum').value);
    let lnum = parseFloat(document.getElementById('lnum').value);
    let operator = document.getElementById('operator').value;

    // Perform the calculation based on the selected operator
    let result;
    switch (operator) {
        case '+':
            result = fnum + lnum;
            break;
        case '-':
            result = fnum - lnum;
            break;
        case '*':
            result = fnum * lnum;
            break;
        case '/':
            if (lnum !== 0) {
                result = fnum / lnum;
            } else {
                result = 'Ngga bisa.';
            }
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').textContent = 'Result: ' + result;
}
