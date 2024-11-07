export type ThemeColor = {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    card: string;
    border: string;
  };
  
  export type ThemeOption = {
    name: string;
    colors: ThemeColor;
  };
  
  export const themes: Record<string, ThemeOption> = {
    default: {
      name: 'Classic Blue',
      colors: {
        primary: 'bg-blue-600 hover:bg-blue-700',
        secondary: 'bg-gray-200 hover:bg-gray-300',
        accent: 'bg-green-600 hover:bg-green-700',
        background: 'bg-gray-50',
        text: 'text-gray-800',
        card: 'bg-white',
        border: 'border-gray-200'
      }
    },
    emerald: {
      name: 'Emerald Green',
      colors: {
        primary: 'bg-emerald-600 hover:bg-emerald-700',
        secondary: 'bg-gray-200 hover:bg-gray-300',
        accent: 'bg-teal-600 hover:bg-teal-700',
        background: 'bg-emerald-50',
        text: 'text-emerald-900',
        card: 'bg-white',
        border: 'border-emerald-200'
      }
    },
    purple: {
      name: 'Royal Purple',
      colors: {
        primary: 'bg-purple-600 hover:bg-purple-700',
        secondary: 'bg-gray-200 hover:bg-gray-300',
        accent: 'bg-indigo-600 hover:bg-indigo-700',
        background: 'bg-purple-50',
        text: 'text-purple-900',
        card: 'bg-white',
        border: 'border-purple-200'
      }
    },
    dark: {
      name: 'Dark Mode',
      colors: {
        primary: 'bg-indigo-600 hover:bg-indigo-700',
        secondary: 'bg-gray-700 hover:bg-gray-600',
        accent: 'bg-purple-600 hover:bg-purple-700',
        background: 'bg-gray-900',
        text: 'text-gray-100',
        card: 'bg-gray-800',
        border: 'border-gray-700'
      }
    }
  };