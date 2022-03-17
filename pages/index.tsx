import Link from 'next/link';
import { useEffect } from 'react';

const Home = () => {
	return (
		<div className="flex items-center mt-20 w-full h-screen flex-col">
			<div>
				<h1 className="text-2xl mb-5">Current questions:</h1>

				<h2 className="my-2 text-md font-medium">React questions</h2>
				<ul className="text-left list-disc">
					<Link href="/tictactoe">
						<li className="cursor-pointer text-blue-600">Tictactoe</li>
					</Link>
				</ul>

				<h2 className="my-2 text-md font-medium">Typescript/Javascript questions</h2>
				<ul className="text-left list-disc">
					<Link href="/count">
						<li className="cursor-pointer text-blue-600">Return max occurance of char in string</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Home;
