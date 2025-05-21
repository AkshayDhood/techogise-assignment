export class InvalidPositionError extends Error {
    constructor(message = 'Invalid position') {
      super(message);
      this.name = 'InvalidPositionError';
    }
  }