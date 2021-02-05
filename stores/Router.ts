import { makeAutoObservable, configure } from 'mobx';
configure({ enforceActions: 'never', useProxies: 'never' });

import Router from 'next/router';

export type DirectionProps = 'left' | 'right' | null;

class RouterStore {
  direction: DirectionProps = 'left';
  newPageDirection: DirectionProps = null;
  routing: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  pop = (url: string, as?: string) => {
    // console.log('----RouterStore 뒤로가기!');
    this.direction = 'right';
    this.routing = true;

    setTimeout(() => {
      Router.push(url, as === null ? url : as);
      this.routing = false;
      this.direction = null;
      this.loadNextPage('right');
    }, 300);
  };

  push = (url: string, as: string) => {
    // console.log('----RouterStore 앞으로 가기!');
    this.direction = 'left';
    this.routing = true;

    setTimeout(() => {
      Router.push(url, as === null ? url : as);
      this.routing = false;
      this.direction = null;
      this.loadNextPage('left');
    }, 300);
  };

  loadNextPage = (dir: DirectionProps) => {
    this.newPageDirection = dir;
    this.routing = true;
    setTimeout(() => {
      this.newPageDirection = null;
      this.routing = false;
      this.direction = 'left';
    }, 300);
  };
}

const routerStore = new RouterStore();

export default routerStore;
