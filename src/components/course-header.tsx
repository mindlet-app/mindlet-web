import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function CourseHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-2 w-full">
      <div className="flex-1 max-w-xl">
        <Search className="absolute left-14 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="search"
          placeholder="Search ..."
          className="pl-10 w-full bg-background"
        />
      </div>
      <div className="flex items-center gap-2 ml-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <span className="sr-only">Messages</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M21.5 12a9.5 9.5 0 1 0-9.5 9.5 9.46 9.46 0 0 0 4.252-1" />
            <path d="M21.5 12v7" />
            <path d="M21.5 12h-7" />
          </svg>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <span className="sr-only">Notifications</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </Button>
        <div className="flex items-center gap-3 ml-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User avatar" />
            <AvatarFallback>JR</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Jason Ranti</span>
        </div>
      </div>
    </div>
  );
}
