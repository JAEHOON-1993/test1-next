import { makeAutoObservable } from 'mobx';

class Count {
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

const CountStore = new Count();
export default CountStore;
