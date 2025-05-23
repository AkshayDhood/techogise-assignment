import { rows, maxColumn, minColumn } from '../constants';
import { InvalidPieceError, InvalidPositionError } from '../errors';
import { PiecesEnum, Position } from '../types';

/**
 * Check if Chess piece is correct
 * @param piece
 * @throws InvalidPieceError
 */
export const validatePieceType = (piece: string) => {
  if (!piece) throw new InvalidPieceError('Piece Not found.');

  if (!Object.values(PiecesEnum).includes(piece as PiecesEnum)) {
    throw new InvalidPieceError('Incorrect Piece');
  }
};

/**
 * Check if Piece position is correct
 * @param position
 * @throws InvalidPositionError
 */
export const validatePosition = (position: string) => {
  if (!position) throw new InvalidPositionError('Position not found.');

  if (position.length !== 2) {
    throw new InvalidPositionError('Incorrect Position');
  }

  const rowIndex = rows.indexOf(position[0]);
  const columnIndex = parseInt(position[1]);

  if (rowIndex === -1 || columnIndex < minColumn || columnIndex > maxColumn) {
    throw new InvalidPositionError('Incorrect Position');
  }
};

/**
 * Check if new positions are correct
 * @param Position
 * @returns boolean
 */
export const isValidPosition = ({ row, column }: Position): boolean => {
  return (
    row >= minColumn - 1 &&
    row < maxColumn &&
    column >= minColumn - 1 &&
    column < maxColumn
  );
};
