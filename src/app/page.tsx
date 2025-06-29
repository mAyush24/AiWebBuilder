import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-200">
      <h1 className="text-rose-500">Welcome to My App</h1>
      <p>This is the main page of the application.</p>
      <Button>Click Me</Button>
    </div>
  );
}

export default Page; 