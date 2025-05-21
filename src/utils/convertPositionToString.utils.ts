import { rows } from '../constants';
import { Position } from '../types';

/**
 * Convert position to output string array
 * @param positionDetails
 * @returns string[]
 */
export const convertPositionDetails = (
  positionDetails: Position[],
): string[] => {
  return positionDetails.map(({ row, column }) => `${rows[row]}${column + 1}`);
};
