"use client";

import { useState, useEffect } from "react";
import { shuffleCards } from "@/utils/shuffleCards";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface GameData {
  question: string;
  answer: string;
}

interface GameProps {
  data: GameData[];
}

interface CardMatchProps {
  content: string;
  isSelected: boolean;
  isMatched: boolean;
  onClick: () => void;
}

export function Game({ data }: GameProps) {
  const [cards, setCards] = useState<string[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set());

  useEffect(() => {
    resetGame();
  }, [data]);

  const resetGame = () => {
    const allCards = data.flatMap((item) => [item.question, item.answer]);
    setCards(shuffleCards(allCards));
    setSelectedIndices([]);
    setMatchedPairs(new Set());
  };

  const handleCardClick = (index: number) => {
    if (
      selectedIndices.length === 2 ||
      selectedIndices.includes(index) ||
      matchedPairs.has(index)
    )
      return;

    const newSelectedIndices = [...selectedIndices, index];
    setSelectedIndices(newSelectedIndices);

    if (newSelectedIndices.length === 2) {
      const [firstIndex, secondIndex] = newSelectedIndices;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      const isMatch = data.some(
        (item) =>
          (item.question === firstCard && item.answer === secondCard) ||
          (item.question === secondCard && item.answer === firstCard)
      );

      if (isMatch) {
        setMatchedPairs((prev) =>
          new Set(prev).add(firstIndex).add(secondIndex)
        );
      }

      setTimeout(() => setSelectedIndices([]), 100);
    }
  };

  const isGameComplete = matchedPairs.size === cards.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <h1 className="text-3xl font-bold mb-8">Memory Match Game</h1>
      {isGameComplete ? (
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 mb-4">
            Congratulations! You&apos;ve completed the game!
          </div>
          <Button onClick={resetGame}>Play Again</Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {cards.map((card, index) => (
              <CardMatch
                key={index}
                content={card}
                isSelected={selectedIndices.includes(index)}
                isMatched={matchedPairs.has(index)}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
          <div className="text-xl mb-4">
            Matched Pairs: {matchedPairs.size / 2} / {data.length}
          </div>
          <Button onClick={resetGame}>Reset Game</Button>
        </>
      )}
    </div>
  );
}

function CardMatch({
  content,
  isSelected,
  isMatched,
  onClick,
}: CardMatchProps) {
  if (isMatched) {
    return null;
  }

  return (
    <Card
      className={`w-32 h-32 flex items-center justify-center cursor-pointer transition-all duration-300 ${
        isSelected ? "bg-primary text-primary-foreground" : "bg-secondary"
      }`}
      onClick={onClick}
    >
      <div className="text-center p-2 text-sm">{content}</div>
    </Card>
  );
}
