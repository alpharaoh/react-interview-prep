import { FC, useEffect } from 'react';

interface countProps {}

const count: FC<countProps> = ({}) => {
	const count = (str: string) => {
		let map: any = {};

		for (let i = 0; i < str.length; i++) {
			let char = str[i];
			map[char] = map[char] ? map[char] + 1 : 1;
		}

		let max = 0;
		let maxChar = '';

		for (let char in map) {
			if (map[char] > max) {
				maxChar = char;
				max = map[char];
			}
		}

		return maxChar;
	};

	useEffect(() => {
		const a = count('12244dsq2455');
		console.log('ANS', a);
	}, []);

	return <div />;
};

export default count;
