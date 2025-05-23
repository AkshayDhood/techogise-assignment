import { rows } from './constants';
import { PiecesEnum, Position } from './types';
import { convertPositionDetails } from './utils';
import {
  isValidPosition,
  validatePieceType,
  validatePosition,
} from './validators';

export class ChessBoard {
  private readonly inputPiece: string;
  private readonly inputPosition: string;

  constructor(inputPiece: string, inputPosition: string) {
    this.inputPiece = inputPiece;
    this.inputPosition = inputPosition;
  }

  /**
   * Process the input and get output of all possible moves
   * @returns string[]
   */
  processOnInputAndGetOutput(): string {
    this.validateInput();
    const positionDetails = this.getPositionDetails();
    const possiblePositions = this.getAllPossibleMoves(positionDetails);

    if (
      possiblePositions.length === 0 ||
      (possiblePositions.length === 1 &&
        positionDetails.row === possiblePositions[0].row &&
        positionDetails.column === possiblePositions[0].column)
    ) {
      return 'No possible moves for this piece at this position.';
    } else {
      const allPossibleMoves = convertPositionDetails(possiblePositions);
      return `All Possible Positions the ${this.inputPiece} can move are ${allPossibleMoves.join(', ')}`;
    }
  }

  /**
   * Validate provided input
   * @returns void
   */
  private validateInput(): void {
    validatePieceType(this.inputPiece);
    validatePosition(this.inputPosition);
  }

  /**
   * Get position details
   * @returns Position
   */
  private getPositionDetails(): Position {
    let row: string | number = this.inputPosition[0];
    let column = parseInt(this.inputPosition[1]);

    row = rows.indexOf(row);
    column = column - 1;

    return { row, column };
  }

  /**
   * Get all possible moves.
   * @returns Position[]
   */
  private getAllPossibleMoves(positionDetails: Position): Position[] {
    const possiblePositions: Position[] = [];

    switch (this.inputPiece) {
      case PiecesEnum.PAWN:
        possiblePositions.push(this.getPositionsForPawn(positionDetails));
        break;

      case PiecesEnum.KING:
        possiblePositions.push(...this.getPositionsForKing(positionDetails));
        break;

      case PiecesEnum.QUEEN:
        possiblePositions.push(...this.getPositionsForQueen(positionDetails));
        break;
    }

    return possiblePositions;
  }

  /**
   * Get Pawn Position (1 as it only moves 1 position)
   * @param positionDetails
   * @returns Position
   */
  private getPositionsForPawn(positionDetails: Position): Position {
    const position: Position = {
      row: positionDetails.row,
      column: positionDetails.column + 1,
    };

    return isValidPosition(position) ? position : positionDetails;
  }

  /**
   * Get King Positions
   * @param positionDetails
   * @returns Position[]
   */
  private getPositionsForKing(positionDetails: Position): Position[] {
    const positions: Position[] = [];

    for (let rowIndex of [-1, 0, 1]) {
      for (let columnIndex of [-1, 0, 1]) {
        if (rowIndex !== 0 || columnIndex !== 0) {
          const position: Position = {
            row: positionDetails.row + rowIndex,
            column: positionDetails.column + columnIndex,
          };

          if (isValidPosition(position)) positions.push(position);
        }
      }
    }

    return positions;
  }

  /**
   * Get Queen Positions
   * @param positionDetails
   * @returns Position[]
   */
  private getPositionsForQueen(positionDetails: Position): Position[] {
    const positions: Position[] = [];

    for (let rowIndex of [-1, 0, 1]) {
      for (let columnIndex of [-1, 0, 1]) {
        if (rowIndex !== 0 || columnIndex !== 0) {
          let position: Position = {
            row: positionDetails.row + rowIndex,
            column: positionDetails.column + columnIndex,
          };

          while (isValidPosition(position)) {
            positions.push({ row: position.row, column: position.column });
            position.row += rowIndex;
            position.column += columnIndex;
          }
        }
      }
    }

    return positions;
  }
}
