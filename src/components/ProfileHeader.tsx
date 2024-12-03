import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="p-4">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative z-0">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/100x100.svg"
                alt="Profile picture"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="mt-2 text-xl font-medium">Pierre Philippe</h1>
        </div>
      </div>
    </div>
  );
}
