import { useEffect, useState } from 'react';

const winningCombinations = [
	[ 0, 1, 2 ],
	[ 3, 4, 5 ],
	[ 6, 7, 8 ],
	[ 0, 3, 6 ],
	[ 1, 4, 7 ],
	[ 2, 5, 8 ],
	[ 0, 4, 8 ],
	[ 2, 4, 6 ]
];

const Board = ({ children }) => {
	return <div className="grid grid-cols-3 m-2">{children}</div>;
};

const Square = ({ setBoard, playerTurn, rowIndex, board, gameOver }) => {
	const clicked = () => {
		if (gameOver) {
			alert('The game has finished');
			return;
		}

		if (board[rowIndex] !== null) {
			alert('That square is taken!');
			return;
		}

		setBoard((prevBoard) => {
			const newBoard = [ ...prevBoard ];
			newBoard[rowIndex] = playerTurn;
			return newBoard;
		});
	};

	return (
		<div className="w-32 h-32 flex items-center justify-center border cursor-pointer" onClick={clicked}>
			{board[rowIndex]}
		</div>
	);
};

const Home = () => {
	const [ board, setBoard ] = useState(Array(9).fill(null));
	const [ playerTurn, setPlayerTurn ] = useState('X');
	const [ winner, setWinner ] = useState(null);
	const [ gameOver, setGameOver ] = useState(false);

	useEffect(
		() => {
			const checkWinner = () => {
				const winner = winningCombinations.some((combination) => {
					return combination.every((index) => {
						console.log(combination, board[index], board[index] === playerTurn);
						return board[index] === playerTurn;
					});
				});

				if (winner) {
					setWinner(playerTurn);
					setGameOver(true);
				}
			};

			const checkGameOver = () => {
				if (board.every((square) => square !== null)) {
					setGameOver(true);
				}
			};

			checkWinner();
			checkGameOver();

			setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
		},
		[ board ]
	);

	const gameStatus = () => {
		if (gameOver && !winner) {
			return "It's a tie!";
		}

		if (winner) {
			return `${winner} is the winner!`;
		}

		if (!gameOver) {
			return `${playerTurn}'s turn`;
		}
	};

	const refresh = () => {
		setBoard(Array(9).fill(null));
		setPlayerTurn('X');
		setWinner(null);
		setGameOver(false);
	};

	return (
		<div className="flex items-center justify-center w-full h-screen flex-col">
			<button className="bg-blue-500 rounded-sm px-3 py-1 text-white m-3" onClick={refresh}>
				Refresh
			</button>
			<h1>{gameStatus()}</h1>
			<Board>
				{board.map((_, rowIndex) => (
					<Square
						key={rowIndex}
						setBoard={setBoard}
						playerTurn={playerTurn}
						rowIndex={rowIndex}
						board={board}
						gameOver={gameOver}
					/>
				))}
			</Board>
		</div>
	);
};

export default Home;
