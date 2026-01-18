/**
 * Dark Mode Implementation Guide
 * 
 * This file demonstrates how to use the ThemeContext in your components
 * to add dark mode support.
 */

import { useTheme } from '../Context/ThemeContext';

// Example Component with Dark Mode
export function ExampleComponent() {
  const { isDark } = useTheme();

  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
      <h1 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
        Example Component
      </h1>
      <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        This component supports dark mode automatically!
      </p>
    </div>
  );
}

/**
 * USAGE GUIDE:
 * 
 * 1. Import useTheme hook in your component:
 *    import { useTheme } from '../Context/ThemeContext';
 * 
 * 2. Get isDark state in your component:
 *    const { isDark } = useTheme();
 * 
 * 3. Use isDark in className to toggle styles:
 *    className={`${isDark ? 'dark-styles' : 'light-styles'}`}
 * 
 * 4. Common dark mode patterns:
 * 
 *    Background: isDark ? 'bg-gray-800' : 'bg-white'
 *    Text: isDark ? 'text-gray-100' : 'text-gray-900'
 *    Border: isDark ? 'border-gray-700' : 'border-gray-200'
 *    Hover: isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
 *    Shadow: isDark ? 'shadow-lg' : 'shadow-md'
 * 
 * TAILWIND DARK MODE (Class-based):
 * You can also use Tailwind's dark: prefix directly:
 * 
 *   className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
 * 
 * Note: This requires the html element to have the 'dark' class,
 * which is automatically managed by ThemeContext.
 */
