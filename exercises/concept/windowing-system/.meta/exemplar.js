// @ts-check

/**
 * Creates a new Size instance.
 * @class
 *
 * @param {number} width
 * @param {number} height
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/**
 * Applies a new height and width to the Size instance.
 *
 * @param {number} newWidth
 * @param {number} newHeight
 */
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
 * Creates a new Position instance.
 *
 * @class
 * @param {number} x
 * @param {number} y
 */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

/**
 * Sets new coordinates for the Position instance.
 *
 * @param {number} newX
 * @param {number} newY
 */
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  /**
   * Creates a new ProgramWindow instance with default size
   * and position values and a screenSize of 800x600.
   */
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * Change the size of the program window to the provided
   * input size. The height or width will be adjusted if too
   * small or too big.
   *
   * @param {Size} newSize
   */
  resize(newSize) {
    const targetWidth = newSize.width > 1 ? newSize.width : 1;
    const maxWidth = this.screenSize.width - this.position.x;
    const newWidth = maxWidth > targetWidth ? targetWidth : maxWidth;

    const targetHeight = newSize.height > 1 ? newSize.height : 1;
    const maxHeight = this.screenSize.height - this.position.y;
    const newHeight = maxHeight > targetHeight ? targetHeight : maxHeight;

    this.size.resize(newWidth, newHeight);
  }

  /**
   * Move the program window to the provided input position.
   * The x or y value will be adjusted if too small or too big.
   *
   * @param {Position} newPosition
   */
  move(newPosition) {
    const targetX = newPosition.x > 0 ? newPosition.x : 0;
    const maxX = this.screenSize.width - this.size.width;
    const newX = maxX > targetX ? targetX : maxX;

    const targetY = newPosition.y > 0 ? newPosition.y : 0;
    const maxY = this.screenSize.height - this.size.height;
    const newY = maxY > targetY ? targetY : maxY;

    this.position.move(newX, newY);
  }
}

/**
 * Adjust the size and position of the program window that was
 * passed in to specific values.
 *
 * @param {ProgramWindow} programWindow
 * @returns {ProgramWindow} adjusted window instance
 */
export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  programWindow.resize(newSize);

  const newPosition = new Position(100, 150);
  programWindow.move(newPosition);

  return programWindow;
}
