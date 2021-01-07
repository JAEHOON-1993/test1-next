import { makeAutoObservable } from 'mobx';
import Router from 'next/router'

export type DirectionProps= "left" |"right";

class RouterStore {

  direction: DirectionProps = "left";
  routing: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  push = (url :string, as:string = url, direction:DirectionProps = 'left') => {
    this.direction = direction;
    this.routing = true
    setTimeout(() => {
      Router.push(url, as === null ? url : as);
      this.routing = false
    }, 2000);
  };

  setRouting = (direction:DirectionProps = 'left') => {
    this.direction = direction;
    this.routing = true
    console.log("setRouting")
  }
}

const routerStore = new RouterStore();

export default routerStore;