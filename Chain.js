class Chain {
  constructor(bodyA, pointB) {
    const options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10,
    };
    this.pointB = pointB;
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
  }
  display() {
    if (this.chain.bodyA) {
      const pointA = this.chain.bodyA.position;
      const pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
  fly() {
    this.chain.bodyA = null;
  }
  attach(body2) {
    const options = {
      bodyA: this.chain,
      pointB: body2,
      stiffness: 0.04,
      length: 10,
    };
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
  }
}
