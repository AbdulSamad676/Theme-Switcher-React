import { createContext, useContext } from 'react';

// step 1 creating context
export const ThemeContext = createContext({
	themeMood: 'light',
	darkTheme: () => {},
	lightTheme: () => {},
});

// step 2 provider

export const ThemeProvider = ThemeContext.Provider;

// step 3 creating custom hook that will give themeContext
export default function useTheme() {
	return useContext(ThemeContext);
}
