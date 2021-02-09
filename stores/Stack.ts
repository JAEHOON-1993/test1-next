import { makeAutoObservable } from 'mobx';

export type DirectionProps = 'left' | 'right' | null;

class StackStore {
  stack: any = [];

  constructor() {
    makeAutoObservable(this);
  }

  setStack = (data: any) => {
    this.stack = data;
  };
}

const stackStore = new StackStore();

export default stackStore;
