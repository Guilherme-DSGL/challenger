class MyClass {

  myVar = 0;

  generator(){
    return this._promise().then(
      (value) => {
        this.myVar = value as number;
        console.log(this.myVar);
      }
    )
  }
  _promise(){
    return new Promise(
    (resolve) => resolve(1))
  }
}
let m = new MyClass();
m.generator();
