import { useState, useEffect } from 'react';

export function useDarkMode() {
  // Use localStorage if available, otherwise default to system preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedValue = window.localStorage.getItem('darkMode');
      if (storedValue !== null) {
        return storedValue === 'true';
      }
    }
    
    // Fall back to system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // Default fallback
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('darkMode', darkMode.toString());
    }
  }, [darkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only change if user hasn't explicitly set a preference
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches);
      }
    };
    
    // Add event listener if supported
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    
    return undefined;
  }, []);

  return { darkMode, toggleDarkMode: () => setDarkMode(prevMode => !prevMode) };
}