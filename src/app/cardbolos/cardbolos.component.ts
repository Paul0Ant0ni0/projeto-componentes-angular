import { Component, Input } from '@angular/core';

@Component({
  selector: 'cardbolos',
  templateUrl: './cardbolos.component.html',
  styleUrls: ['./cardbolos.component.css']
})
export class CardbolosComponent {

  @Input()
  nomeBolo: string = ''


  @Input()
  imgBolo: string = ''


  @Input()
  precoBolo: number = 0

  n1: number = this.add('-')

  n2: number = 1

  multiplicar(n1: number, n2: number) {
    return (n1 * n2).toFixed(2)
  }

  add(v: string) {
    let n = 1

    if(this.n2 > 0 && this.n2 < 10){
      if (v == '+' && n < 10) {
        this.n2 += n
      } else {
        this.n2 -= n
      }

    }

    return this.n2

  }

}
