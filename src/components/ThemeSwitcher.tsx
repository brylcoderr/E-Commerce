import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../types/theme';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative group">
      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full flex items-center gap-2">
        <Palette size={24} />
      </button>
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block">
        {Object.entries(themes).map(([key, option]) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            className={`${
              theme.name === option.name ? 'bg-gray-100 dark:bg-gray-700' : ''
            } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};