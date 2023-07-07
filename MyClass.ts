class MyClass {

  value = 0;

  generator(){
    return this._promise().then(
      (value) => {
        this.value = value as number;
        console.log(this.value);
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
