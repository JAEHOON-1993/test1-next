import { makeAutoObservable } from 'mobx';

class CountStore {
  number: number = 0;

  constructor() {
    makeAutoObservable(this);
  }
  increase = () => {
    this.number++;
  };
  decrease = () => {
    this.number--;
  };
}

export default CountStore;
