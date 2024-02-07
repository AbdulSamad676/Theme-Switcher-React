import React from 'react';
import { useEffect, useState } from 'react';
import Card from './componants/Card';
import ThemeBtn from './componants/ThemeBtn';
import { ThemeProvider } from './context/Theme';
function App() {
	const [themeMood, setThemeMood] = useState('light');

	const lightTheme = () => {
		setThemeMood('light');
	};
	const darkTheme = () => {
		setThemeMood('dark');
	};

	useEffect(() => {
		let wholeBody = document.querySelector('html');
		wholeBody.classList.remove('dark', 'light');
		wholeBody.classList.add(themeMood);
	}, [themeMood]);

	return (
		<ThemeProvider value={{ themeMood, darkTheme, lightTheme }}>
			<div className='flex flex-wrap min-h-screen items-center'>
				<div className='w-full'>
					<div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
						<ThemeBtn />
					</div>

					<div className='w-full max-w-sm mx-auto'>
						<Card />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
