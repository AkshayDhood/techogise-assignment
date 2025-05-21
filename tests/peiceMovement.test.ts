import { ChessBoard } from '../src/chessBoard';

describe('Chess board movement tests', () => {
  // Pawn Tests starts
  test('Pawn at A1', () => {
    const chessBoard = new ChessBoard('Pawn', 'A1');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual(['A2']);
  });

  test('Pawn at H8', () => {
    const chessBoard = new ChessBoard('Pawn', 'H8');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual(['H8']);
  });

  test('Pawn at A8', () => {
    const chessBoard = new ChessBoard('Pawn', 'A8');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual(['A8']);
  });

  test('Pawn at E2', () => {
    const chessBoard = new ChessBoard('Pawn', 'E2');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual(['E3']);
  });
  // Pawn Tests ends

  // King Tests start
  test('King at A1', () => {
    const chessBoard = new ChessBoard('King', 'A1');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual(['A2', 'B1', 'B2']);
  });

  test('King at H8', () => {
    const chessBoard = new ChessBoard('King', 'H8');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual(['G7', 'G8', 'H7']);
  });

  test('King at A8', () => {
    const chessBoard = new ChessBoard('King', 'A8');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual(['A7', 'B7', 'B8']);
  });

  test('King at C5', () => {
    const chessBoard = new ChessBoard('King', 'C5');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual([
      'B4',
      'B5',
      'B6',
      'C4',
      'C6',
      'D4',
      'D5',
      'D6',
    ]);
  });
  // King Tests ends

  // Queen Tests starts
  test('Queen at A1', () => {
    const chessBoard = new ChessBoard('Queen', 'A1');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual([
      'A2',
      'A3',
      'A4',
      'A5',
      'A6',
      'A7',
      'A8',
      'B1',
      'B2',
      'C1',
      'C3',
      'D1',
      'D4',
      'E1',
      'E5',
      'F1',
      'F6',
      'G1',
      'G7',
      'H1',
      'H8',
    ]);
  });

  test('Queen at H8', () => {
    const chessBoard = new ChessBoard('Queen', 'H8');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual([
      'A1',
      'A8',
      'B2',
      'B8',
      'C3',
      'C8',
      'D4',
      'D8',
      'E5',
      'E8',
      'F6',
      'F8',
      'G7',
      'G8',
      'H1',
      'H2',
      'H3',
      'H4',
      'H5',
      'H6',
      'H7',
    ]);
  });

  test('Queen at A8', () => {
    const chessBoard = new ChessBoard('Queen', 'A8');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual([
      'A1',
      'A2',
      'A3',
      'A4',
      'A5',
      'A6',
      'A7',
      'B7',
      'B8',
      'C6',
      'C8',
      'D5',
      'D8',
      'E4',
      'E8',
      'F3',
      'F8',
      'G2',
      'G8',
      'H1',
      'H8',
    ]);
  });

  test('Queen at E4', () => {
    const chessBoard = new ChessBoard('Queen', 'E4');
    const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

    expect(allPossibleMoves.sort()).toEqual([
      'A4',
      'A8',
      'B1',
      'B4',
      'B7',
      'C2',
      'C4',
      'C6',
      'D3',
      'D4',
      'D5',
      'E1',
      'E2',
      'E3',
      'E5',
      'E6',
      'E7',
      'E8',
      'F3',
      'F4',
      'F5',
      'G2',
      'G4',
      'G6',
      'H1',
      'H4',
      'H7',
    ]);
  });
  // Queen Tests ends
});
