import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === 'dark' ? FiSun : FiMoon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-zinc-900 shadow-lg backdrop-blur transition hover:border-mint/60 hover:text-mint dark:text-white"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <Icon aria-hidden="true" />
    </button>
  );
}
