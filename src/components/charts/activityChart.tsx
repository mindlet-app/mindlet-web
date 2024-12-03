'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { ThumbsUp } from 'lucide-react'

interface ActivityData {
  month: string
  segments: number[]
}

const activityData: ActivityData[] = [
  { month: 'Jan', segments: [35, 30, 35] },
  { month: 'Jan', segments: [40, 20, 40] },
  { month: 'Aug', segments: [45, 25, 30] },
  { month: 'Sep', segments: [30, 35, 35] },
  { month: 'Oct', segments: [35, 35, 30] },
  { month: 'Nov', segments: [40, 30, 30] },
  { month: 'Dec', segments: [35, 25, 40] }
]

export default function ActivityChart() {
  return (
    <Card className="w-full max-w-2xl border-none shadow-none">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-1">
          <div className="space-y-2">
            <h2 className=" font-bold">Activity</h2>
   
          </div>
          <Select defaultValue="year">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="year">Year</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="week">Week</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2 w-full mb-1">
              <span className="text-2xl font-bold">3.5h</span>
              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full w-36">
                <ThumbsUp className="w-8 h-4 text-yellow-500 fill-yellow-500" />
                <p className="text-xs line-clamp-1">Great result!</p>
              </div>
            </div>
        
        <div className="grid grid-cols-7 gap-2 h-[100px] items-end">
          {activityData.map((data, index) => (
            <div 
              key={`${data.month}-${index}`} 
              className={`relative h-full flex flex-col justify-end`}
            >
              <div 
                className="w-full rounded-t-lg bg-pink-200" 
                style={{ height: `${data.segments[0]}%` }}
              />
              <div 
                className="w-full bg-orange-100" 
                style={{ height: `${data.segments[1]}%` }}
              />
              <div 
                className="w-full rounded-b-lg bg-purple-200" 
                style={{ height: `${data.segments[2]}%` }}
              />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
                {data.month}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

