import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc-app';

  currentNumber = '0'; // string that will be displayed in the result input element.
  firstOperand = null; // value of the first operand of the operation.
  operator = null; // operation.
  waitForSecondNumber = false; // a boolean value indicating if the user has finished 
  // typing the first operand and ready to enter the second operand of the operation.

  constructor() { }

  ngOnInit() {
  }

  public getNumber(v: string) {
    // console.log(v);
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      // console.log("b2", this.currentNumber);
      this.waitForSecondNumber = false;
    }
    else {
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
      // console.log("b1", this.currentNumber);

    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op, secondOp) {
    switch (op) {
      case '+':
        return this.firstOperand += secondOp;
      case '-':
        return this.firstOperand -= secondOp;
      case '*':
        return this.firstOperand *= secondOp;
      case '/':
        return this.firstOperand /= secondOp;
      case '=':
        return secondOp;
    }
  }

  public getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    }
    else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }

    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}