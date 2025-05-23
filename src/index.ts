import { ChessBoard } from './chessBoard';

try {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    throw new Error('Please provide proper inputs.');
  }

  const [piece, position] = args as [string, string];

  const chessBoard = new ChessBoard(piece, position);
  const output = chessBoard.processOnInputAndGetOutput();

  console.log(output);
} catch (error) {
  console.log((error as Error).message);
  process.exit(1);
}
