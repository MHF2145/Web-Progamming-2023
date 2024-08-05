// function calculateResult() 
// {
//     let fnum = parseFloat(document.getElementById('fnum').value);
//     let lnum = parseFloat(document.getElementById('lnum').value);
//     let operator = document.getElementById('operator').value;

//     // Perform the calculation based on the selected operator
//     let result;
//     switch (operator) {
//         case '+':
//             result = fnum + lnum;
//             break;
//         case '-':
//             result = fnum - lnum;
//             break;
//         case '*':
//             result = fnum * lnum;
//             break;
//         case '/':
//             if (lnum !== 0) {
//                 result = fnum / lnum;
//             } else {
//                 result = 'Ngga bisa.';
//             }
//             break;
//         default:
//             result = 'Invalid operator';
//     }

//     document.getElementById('result').textContent = 'Result: ' + result;
// }

      import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

      createApp({
        data() {
          return {
            angka1: "",
            angka2: "",
            hasil: "",
          };
        },
        methods: {
          tambah() {
            this.hasil = parseFloat(this.angka1) + parseFloat(this.angka2);
            return this.hasil;
          },
          kurang() {
            this.hasil = parseFloat(this.angka1) - parseFloat(this.angka2);
            return this.hasil;
          },
          kali() {
            this.hasil = parseFloat(this.angka1) * parseFloat(this.angka2);
            return this.hasil;
          },
          bagi() {
            if (this.angka2 == 0) {
              this.hasil = "UNDIFINED";
            } else {
              this.hasil = parseFloat(this.angka1) / parseFloat(this.angka2);
            }
          },
        },
      }).mount("#app");
