import { rows, maxRow, minRow } from '../constants';
import { InvalidPieceError, InvalidPositionError } from '../errors';
import { PiecesEnum, Position } from '../types';

/**
 * Check if Chess piece is correct
 * @param piece 
 * @throws InvalidPieceError
 */
export const validatePieceType = (piece: string) => {
  if (!piece || !Object.values(PiecesEnum).includes(piece as PiecesEnum)) {
    throw new InvalidPieceError();
  }
};

/**
 * Check if Piece position is correct
 * @param position 
 * @throws InvalidPositionError
 */
export const validatePosition = (position: string) => {
  if (!position || position.length !== 2) {
    throw new InvalidPositionError();
  }

  const columnIndex = rows.indexOf(position[0]);
  const rowIndex = parseInt(position[1]);

  if (columnIndex === -1 || rowIndex < minRow || rowIndex > maxRow) {
    throw new InvalidPositionError();
  }
};

/**
 * Check if new positions are correct
 * @param param0 
 * @returns boolean
 */
export const isValidPosition = ({ row, column }: Position): boolean => {
  return (
    row >= minRow - 1 && row < maxRow && column >= minRow - 1 && column < maxRow
  );
};
