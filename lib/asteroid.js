(function(){

  if (typeof window.Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (options) {
    this.color = options.color || Asteroid.COLOR;
    this.radius = options.radius || Asteroid.randomRadius();
    this.velocity = options.velocity || Asteroid.randomVec();
    this.pos = options.pos;
  };

  Asteroid.COLOR = '#FF0000';
  Asteroid.MAX_RADIUS = 10;
  Asteroid.MAX_VELOCITY = 5;

  Asteroid.prototype.draw = function (ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  Asteroid.prototype.move = function() {
    this.pos[0] = this.pos[0] + this.velocity[0];
    this.pos[1] = this.pos[1] + this.velocity[1];
  };

  Asteroid.randomVec = function(){
    return [ Asteroid.MAX_VELOCITY * (Math.random() * 2 - 1), Asteroid.MAX_VELOCITY * (Math.random() * 2 - 1) ];
  };

  Asteroid.randomRadius = function(){
    return Asteroid.MAX_RADIUS * (Math.random());
  };

})();
