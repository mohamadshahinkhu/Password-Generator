import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gnPassword: string = ''
  includeLetters: boolean = false
  includeNumbers: boolean = false
  includesymbol: boolean = false
  length!: number
  onButtonClick() {
    const number = '0123456789'
    const letter = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '~!@#$%^&*()_+'
    let validChr = ''
    if (this.includeNumbers) {
      validChr += number
    }
    if (this.includeLetters) {
      validChr += letter
    }
    if (this.includesymbol) {
      validChr += symbols
    }
    let generatePassword = ''
    for (let x = 0; x < this.length; x++) {
      let x = Math.floor(Math.random() * validChr.length)
      generatePassword += validChr[x]
    }
    this.gnPassword = generatePassword
  }
  onchaneLetters() {
    this.includeLetters = !this.includeLetters
  }
  onchanenumbers() {
    this.includeNumbers = !this.includeNumbers
  }
  onchanesymbol() {
    this.includesymbol = !this.includesymbol
  }
  onChangeValue(value: any) {
    const parsedValue = parseInt(value)
    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }
}
