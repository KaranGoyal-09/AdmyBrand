'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        aria-label="Toggle theme"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="rounded-full shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-700 hover:bg-white hover:dark:bg-gray-800 transition-colors"
      >
        {resolvedTheme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-blue-600" />
        )}
      </Button>
    </div>
  );
} 