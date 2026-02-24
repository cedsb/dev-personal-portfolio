import { useState, useEffect } from "react";

import { Button } from '@/components/ui/button.jsx';
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // On first load, check if dark mode is active
  useEffect(() => {
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const newDarkState =
      document.documentElement.classList.toggle("dark");

    localStorage.theme = newDarkState ? "dark" : "light";
    setIsDark(newDarkState);
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="lg"
      className="dark:text-primary transition px-2 md:rounded-full"
    >
      <p className="flex md:hidden text-md">Switch to</p>
      {isDark ? <Sun className="size-5!"/> : <Moon className="size-5!"/>}
    </Button>
  );
}