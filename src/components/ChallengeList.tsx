import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Challenge {
  id: number;
  profileImage: string;
  text: string;
}

export default function ChallengeList() {
  const challenges: Challenge[] = [
    {
      id: 1,
      profileImage: "/100x100.svg",
      text: "Grof7h sur MMI",
    },
    {
      id: 2,
      profileImage: "/100x100.svg",
      text: "Pollux sur L3 Maths",
    },
  ];

  return (
    <Card className="w-full max-w-2xl border-none shadow-none">
      <CardContent className="p-6">
    <div >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Défis</h1>
        <Button variant="link" className="text-black text-xs">
          Voir tout
        </Button>
      </div>
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={challenge.profileImage}
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <span className="text-xs">{challenge.text}</span>
              <Button className="bg-blue-300 hover:bg-blue-400 text-black px-3">
                <span className="text-xs">Répondre</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
      </CardContent>
    </Card>
  );
}
