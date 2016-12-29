import { toJS, autorun } from 'mobx';

const localStorageKey = 'groceries';

export function fromStorageOrEmpty() {
  const itemsFromStorage = localStorage.getItem(localStorageKey);
  return itemsFromStorage ? JSON.parse(itemsFromStorage) : [];
}

export function saveUponChanges(store) {
  autorun((reaction) => {
    // crucial to touch the state we're interested in, or this
    // autorun observer won't be run upon state changes later
    const currentGroceries = toJS(store.groceries);

    // don't persist the initial state
    if (reaction.runId === 1) {
      return;
    }

    localStorage.setItem(localStorageKey, JSON.stringify(currentGroceries));
    console.log('Saved into localStorage:', currentGroceries);
  })
};
