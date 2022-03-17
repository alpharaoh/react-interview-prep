import Link from 'next/link';

const Home = () => {
	return (
		<div className="flex items-center mt-20 w-full h-screen flex-col">
			<div>
				<h1 className="text-2xl mb-2">Current questions:</h1>
				<ul className="text-left list-disc">
					<Link href="/tictactoe">
						<li className="cursor-pointer text-blue-600">Tictactoe</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Home;
