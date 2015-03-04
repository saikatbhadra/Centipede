(function(){
  if (typeof window.Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (canvasEl, ctx) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;
    this.game = new Asteroids.Game({
      dimX: this.canvasEl.width,
      dimY: this.canvasEl.height
    });
  };

  GameView.prototype.start = function(){
    var that = this;
    setInterval(function ()
      {
        that.game.moveObjects(that.ctx);
        that.game.draw(that.ctx);
      }, 20);
  };

})();
