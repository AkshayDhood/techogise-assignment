import { ChessBoard } from '../src/chessBoard';
import { InvalidPieceError, InvalidPositionError } from '../src/errors';

describe('Chess board common tests', () => {
  test('Invalid position returns error', () => {
    expect(() => {
      new ChessBoard('Queen', 'N10').processOnInputAndGetOutput();
    }).toThrow(InvalidPositionError);
  });

  test('Invalid piece returns error', () => {
    expect(() => {
      new ChessBoard('Knight', 'A6').processOnInputAndGetOutput();
    }).toThrow(InvalidPieceError);
  });

  test('Empty position returns error', () => {
    expect(() => {
      new ChessBoard('King', '').processOnInputAndGetOutput();
    }).toThrow(InvalidPositionError);
  });

  test('Empty piece returns error', () => {
    expect(() => {
      new ChessBoard('', 'A3').processOnInputAndGetOutput();
    }).toThrow(InvalidPieceError);
  });

  test('Both piece and position empty returns error', () => {
    expect(() => {
      new ChessBoard('', '').processOnInputAndGetOutput();
    }).toThrow(InvalidPieceError);
  });
});
