import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

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
        <Button>
          <Link href="/slides/1">Slides</Link>
        </Button>
        <Link href="https://github.com/bglick13/js-react-next">
          <Button variant="link">
            <Github className="mr-2 h-4 w-4" /> Code
          </Button>
        </Link>
      </div>
    </main>
  );
}
