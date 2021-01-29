import { makeAutoObservable } from 'mobx';
import Router from 'next/router';

export type DirectionProps = 'left' | 'right';

class RouterStore {
  direction: DirectionProps = 'left';
  routing: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  push = (
    url: string,
    as: string = url,
    direction: DirectionProps = 'left',
  ) => {
    console.log('push : ', url);
    this.direction = direction;
    this.routing = true;
    setTimeout(() => {
      Router.push(url, as === null ? url : as);
      this.routing = false;
    }, 800);
  };
}

const routerStore = new RouterStore();

export default routerStore;
