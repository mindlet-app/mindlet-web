"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FlashcardData {
  question: string;
  answer: string;
}

const gameData: FlashcardData[] = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the capital of Italy?", answer: "Rome" },
  { question: "What is the capital of Germany?", answer: "Berlin" },
  { question: "What is the capital of Spain?", answer: "Madrid" },
  { question: "What is the capital of Portugal?", answer: "Lisbon" },
];

export default function FlashcardGame() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
    setShowButtons(false);
  }, [currentCardIndex]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    setShowButtons(true);
  };

  const handleKnowledgeLevel = (level: string) => {
    console.log(`Card ${currentCardIndex + 1}: ${level}`);
    if (currentCardIndex < gameData.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      alert("Game Over! You've completed all flashcards.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-8">Capital Cities Flashcard Game</h1>
      <Card
        className={`w-80 h-48 p-6 cursor-pointer transition-transform duration-500 transform perspective-1000 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={handleCardClick}
      >
        <div className="w-full h-full flex items-center justify-center text-center">
          <p
            className={`text-xl font-semibold ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {isFlipped
              ? gameData[currentCardIndex].answer
              : gameData[currentCardIndex].question}
          </p>
        </div>
      </Card>
      {showButtons && (
        <div className="mt-8 space-x-4">
          <Button
            onClick={() => handleKnowledgeLevel("Don't know")}
            variant="destructive"
          >
            Don&apos;t know
          </Button>
          <Button
            onClick={() => handleKnowledgeLevel("Averagely know")}
            variant="default"
          >
            Averagely know
          </Button>
          <Button
            onClick={() => handleKnowledgeLevel("Know")}
            variant="secondary"
          >
            Know
          </Button>
        </div>
      )}
      <p className="mt-4 text-sm text-gray-500">
        Card {currentCardIndex + 1} of {gameData.length}
      </p>
    </div>
  );
}
