import { Routes, Route } from 'react-router';
import { useEffect, useState, useCallback } from 'react';
import Home from './pages/Home';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  const applyTheme = useCallback((newTheme: 'light' | 'dark' | 'system') => {
    const root = document.documentElement;
    const isDark = newTheme === 'dark' || 
                  (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home theme={theme} setTheme={setTheme} />} 
      />
    </Routes>
  );
}