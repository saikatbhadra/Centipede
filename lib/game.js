(function(){

  if (typeof window.Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (options) {
    this.dimX = options.dimX;
    this.dimY = options.dimY;
    this.num_asteroids = options.num_asteroids || Game.NUM_ASTEROIDS;
    this.addAsteroids();
  };

  Game.NUM_ASTEROIDS = 500;

  Game.prototype.addAsteroids = function(){
    this.asteroids = [];
    for (var i = 0; i < this.num_asteroids; i++) {
      this.asteroids.push(new Asteroids.Asteroid( { pos: this.randomPosition() } ));
    }
  };

  Game.prototype.draw = function (ctx){
    ctx.clearRect(0,0, this.dimX, this.dimY);
    this.asteroids.forEach( function (asteroid) { asteroid.draw(ctx); } );
  };

  Game.prototype.moveObjects = function (ctx){
    this.asteroids.forEach( function (asteroid) {
      asteroid.move(); }
    );
  };

  Game.prototype.randomPosition = function(){
    return [ this.dimX * Math.random(), this.dimY * Math.random()];
  };

})();
