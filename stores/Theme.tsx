import { makeAutoObservable } from 'mobx';

class Theme {
  currentTheme: string = 'light';

  constructor() {
    makeAutoObservable(this);
  }

  changeThemeMode = () => {
    console.log(this.currentTheme);

    if (this.currentTheme === 'light') {
      this.currentTheme = 'dark';
    } else {
      this.currentTheme = 'light';
    }
  };
}

const ThemeStore = new Theme();

export default ThemeStore;
