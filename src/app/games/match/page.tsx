import { Game } from "../../../components/games/MatchGame";

const gameData = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the capital of Italy?", answer: "Rome" },
  { question: "What is the capital of Germany?", answer: "Berlin" },
  { question: "What is the capital of Spain?", answer: "Madrid" },
  { question: "What is the capital of Portugal?", answer: "Lisbon" },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Game data={gameData} />
    </main>
  );
}
