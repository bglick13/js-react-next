import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center p-24">
        <h1 className="tracking-tight text-4xl font-extrabold bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 inline-block text-transparent bg-clip-text">
          JS, React, Next, and You or:
        </h1>
        <h2 className="text-center text-xl font-bold text-slate-200">
          How I learned to stop worrying and love functional programming
        </h2>
      </div>

      <div className="flex flex-row items-center gap-8">
        <Button>Slides</Button>
        <Button variant="secondary">
          <Github className="mr-2 h-4 w-4" /> Code
        </Button>
      </div>
    </main>
  );
}
