export class InvalidPieceError extends Error {
    constructor(message = 'Invalid piece') {
      super(message);
      this.name = 'InvalidPieceError';
    }
  }