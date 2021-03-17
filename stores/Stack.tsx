import { makeAutoObservable } from 'mobx';

export type DirectionProps = 'left' | 'right' | null;

class StackStore {
  stack: any = [];

  constructor() {
    makeAutoObservable(this);
  }

  setStack = (data: any) => {
    console.log('stackStore', data);
    this.stack = data;
  };
}

const stackStore = new StackStore();

export default stackStore;
