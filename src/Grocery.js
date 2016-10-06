import { extendObservable } from 'mobx';

export class Grocery {

  constructor(text) {
    this.id = Math.random();

    extendObservable(this, {
      text: text,
      completed: false
    });
  }

}
