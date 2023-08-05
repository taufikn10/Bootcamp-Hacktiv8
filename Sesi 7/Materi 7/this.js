// this
let counter = {
  val: 0,
  increment: function () {
    this.val += 1;
  },
};
console.log(counter);
