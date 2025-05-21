import { ChessBoard } from './chessBoard';

try {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.log('Invalid Input provided.');
    process.exit(1);
  }

  const [piece, position] = args as [string, string];

  const chessBoard = new ChessBoard(piece, position);
  const allPossibleMoves = chessBoard.processOnInputAndGetOutput();

  console.log(
    `All Possible Positions the ${piece} can move are ${allPossibleMoves.join(', ')}`,
  );
} catch (error) {
  console.log({ error });
}
