class Child {
  constructor() {}
  getCallback(arg: Function) {
    arg();
  }
}

class Main {
  name: 'main';
  id: 10;
  fun1() {
    console.log('fun1 is run');
  }
  callback() {
    this.fun1();
  }
  constructor() {}
  child1: Child = new Child();
  init() {
    /**
     * while you are pass an callback which is run another functions in main class to an function in another class, you should bind its to class refrence by .bind(this)
     */
    this.child1.getCallback(this.callback.bind(this));
  }
}
const main1 = new Main();
main1.init();
