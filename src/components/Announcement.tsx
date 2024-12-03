import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Announcement() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-200 px-6 py-8 md:px-8">
      <div className="absolute right-0 top-0 h-24 w-24">
        <div className="absolute right-8 top-8 h-4 w-4 rotate-45 bg-white/20" />
      </div>
      <div className="max-w-xl space-y-2">
        <p className="text-sm font-medium tracking-wider text-white/90">
          Défis de la semaine
        </p>
        <h1 className="text-2xl font-medium leading-tight text-white md:text-3xl">
          La programmation en python
        </h1>
        <Button
          className="mt-4 bg-black text-white hover:bg-black/80"
          size="sm"
        >
          Apprendre
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
