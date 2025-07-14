import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen container bg-background text-foreground overflow-x-hidden" >
        <ThemeToggle />
    </div>
  );
}