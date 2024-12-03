import { Card } from "@/components/ui/card"
import { Lock } from 'lucide-react'
import Image from "next/image"

export default function CourseCard() {
  return (
    <Card className="p-6 max-w-4xl mx-auto flex justify-between items-center bg-white">
      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">
            Concepts de programmation et paradigmes
          </h1>
          <div className="flex items-center gap-2 text-lg text-muted-foreground">
            <span>35 cartes</span>
            <Lock className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-sky-100">
              <Image
                src="/100x100.svg"
                alt="Profile avatar"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <span className="font-medium">Mini_pk_2b</span>
          </div>
        </div>
      </div>
      <div className="relative w-48 h-48">
        <Image
          src="/100x100.svg"
          alt="Programming illustration"
          width={100}
          height={100}
          className="object-cover rounded-lg"
        />
      </div>
    </Card>
  )
}

