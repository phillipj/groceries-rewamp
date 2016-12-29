import { extendObservable } from 'mobx';

import { Grocery } from './Grocery';

export default class GroceryStore {

    constructor(initialGroceries = []) {
        extendObservable(this, {
            groceries: initialGroceries
        });
    }

    add(text) {
        const existingIdx = this._findIdxByText(text);

        if (existingIdx !== -1) {
            this.groceries[existingIdx].completed = false
            this._moveGroceryToTop(existingIdx);
        } else {
            this.groceries.unshift(new Grocery(text));
        }
    }

    _findIdxByText(text) {
        return this.groceries.findIndex((g) => g.text.toLowerCase() === text.toLowerCase());
    }

    _moveGroceryToTop(fromIndex) {
      const toIndex = 0;
      const element = this.groceries[fromIndex];
      this.groceries.splice(fromIndex, 1);
      this.groceries.splice(toIndex, 0, element);
    }
}
