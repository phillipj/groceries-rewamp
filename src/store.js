import { extendObservable } from 'mobx';

import { Grocery } from './Grocery';

class GroceryStore {

    constructor() {
        extendObservable(this, {
            groceries: []
        });
    }

    add(text) {
        const existingIdx = this._findIdxByText(text);

        if (existingIdx !== -1) {
            this.groceries[existingIdx].completed = false
        } else {
            this.groceries.push(new Grocery(text));
        }
    }

    _findIdxByText(text) {
        return this.groceries.findIndex((g) => g.text.toLowerCase() === text.toLowerCase());
    }
}

export default new GroceryStore();
