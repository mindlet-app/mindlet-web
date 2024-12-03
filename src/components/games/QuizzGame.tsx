"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shuffle } from 'lucide-react'

const gameData = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the capital of Italy?", answer: "Rome" },
  { question: "What is the capital of Germany?", answer: "Berlin" },
  { question: "What is the capital of Spain?", answer: "Madrid" },
  { question: "What is the capital of Portugal?", answer: "Lisbon" },
]

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [options, setOptions] = useState<string[]>([])
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (currentQuestion < gameData.length) {
      generateOptions()
    } else {
      setGameOver(true)
    }
  }, [currentQuestion])

  const generateOptions = () => {
    const currentItem = gameData[currentQuestion]
    const correctAnswer = showQuestion ? currentItem.answer : currentItem.question
    const otherOptions = gameData
      .filter((_, index) => index !== currentQuestion)
      .map(item => showQuestion ? item.answer : item.question)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
    
    setOptions([correctAnswer, ...otherOptions].sort(() => 0.5 - Math.random()))
  }

  const handleAnswer = (selectedOption: string) => {
    const currentItem = gameData[currentQuestion]
    const correctAnswer = showQuestion ? currentItem.answer : currentItem.question

    if (selectedOption === correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < gameData.length) {
      setCurrentQuestion(currentQuestion + 1)
      setShowQuestion(!showQuestion)
    } else {
      setGameOver(true)
    }
  }

  const restartGame = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowQuestion(true)
    setGameOver(false)
  }

  if (gameOver) {
    return (
      <Card className="w-full max-w-md mx-auto mt-10">
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
          <p className="text-xl mb-6">Your score: {score} / {gameData.length}</p>
          <Button onClick={restartGame} className="w-full">
            Play Again
            <Shuffle className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-4">
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            {showQuestion ? "Question" : "Answer"}
          </h2>
          <p className="text-xl text-center">
            {showQuestion ? gameData[currentQuestion].question : gameData[currentQuestion].answer}
          </p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(option)}
            className="h-24 text-lg"
            variant="outline"
          >
            {option}
          </Button>
        ))}
      </div>
      <p className="mt-6 text-center text-lg">
        Score: {score} / {currentQuestion}
      </p>
    </div>
  )
}

