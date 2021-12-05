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
    const targetWidth = Math.max(1, newSize.width);
    const maxPossibleWidth = this.screenSize.width - this.position.x;
    const newWidth = Math.min(targetWidth, maxPossibleWidth);

    const targetHeight = Math.max(1, newSize.height);
    const maxPossibleHeight = this.screenSize.height - this.position.y;
    const newHeight = Math.min(targetHeight, maxPossibleHeight);

    this.size.resize(newWidth, newHeight);
  }

  /**
   * Move the program window to the provided input position.
   * The x or y value will be adjusted if too small or too big.
   *
   * @param {Position} newPosition
   */
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
