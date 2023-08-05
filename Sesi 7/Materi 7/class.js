class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4, 3).area);

//Another Way
let pol = new Polygon(3, 3);
console.log(pol.area);
