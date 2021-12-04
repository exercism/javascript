// @ts-check

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x, y) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class Window {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const targetWidth = Math.max(1, newSize.width);
    const maxPossibleWidth = this.screenSize.width - this.position.x;
    const newWidth = Math.min(targetWidth, maxPossibleWidth);

    const targetHeight = Math.max(1, newSize.height);
    const maxPossibleHeight = this.screenSize.height - this.position.y;
    const newHeight = Math.min(targetHeight, maxPossibleHeight);

    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    const targetX = Math.max(0, newPosition.x);
    const maxPossibleX = this.screenSize.width - this.size.width;
    const newX = Math.min(targetX, maxPossibleX);

    const targetY = Math.max(0, newPosition.y);
    const maxPossibleY = this.screenSize.height - this.size.height;
    const newY = Math.min(targetY, maxPossibleY);

    this.position.move(newX, newY);
  }
}

export function changeWindow(window) {
  const newSize = new Size(400, 300);
  window.resize(newSize);
  const newPosition = new Position();
  newPosition.move(100, 100);

  window.move(newPosition);
  return window;
}
