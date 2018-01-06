function Rectangle(
  x = 0,
  y = 0,
  width = 100,
  height = 100,
  border = "black",
  background = "white",
  img = null
) {
  this.x = x;
  this.y = y;
  this.type = "rectangle";
  this.label = "Labelind sfdsfds";
  this.width = width;
  this.height = height;
  this.drag = {
    dx: 0,
    dy: 0,
    enabled: false
  };
  this.speed = 5;
  this.fillStyle = background;
  this.strokeStyle = border;
  this.lineWidth = 5;
  this.lineDash = [];
  this.image = null;
  this.urlImage = img;

  this.init = function() {};

  this.bound = function(cx, cy) {
    return (
      cx >= this.x &&
      cx <= this.x + this.width &&
      (cy >= this.y && cy <= this.y + this.height)
    );
  };

  this.paint = function(ctx) {
    ctx.fillStyle = this.fillStyle;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    if (this.image == null && this.urlImage) {
      this.image = new Image();
      this.image.src = this.urlImage;
      var params = [this.image, this.x, this.y, this.width, this.height];
      this.image.onload = function() {
        ctx.drawImage(params[0], params[1], params[2], params[3], params[4]);
      };
    }
    if (this.image) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    ctx.beginPath();
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    ctx.setLineDash(this.lineDash);
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  };

  this.showLabel = function(ctx) {
    ctx.font = "16px sans";
    var wLabel = Math.ceil(ctx.measureText(this.label).width / 2 + 5);
    ctx.fillStyle = "#ccc";
    ctx.fillRect(
      this.x + Math.ceil(this.width / 2) - wLabel,
      this.y + this.height,
      wLabel * 2,
      20
    );
    ctx.fillStyle = "#333";
    ctx.fillText(
      this.label,
      this.x + Math.ceil(this.width / 2) - wLabel + 5,
      this.y + this.height + 16
    );
  };

  this.move = function(dx, dy, canvas) {
    this.x += dx;
    if (this.x >= canvas.width - this.width) this.x = canvas.width - this.width;
    if (this.x <= 0) this.x = 0;
    this.y += dy;
    if (this.y >= canvas.height - this.height)
      this.y = canvas.height - this.height;
    if (this.y <= 0) this.y = 0;
  };

  this.size = function(dsize) {
    this.width += dsize;
    this.height += dsize;
  };

  this.animate = function(canvas) {
    if (this.y <= canvas.height - this.height && this.y >= 0) this.y++;
  };
}
