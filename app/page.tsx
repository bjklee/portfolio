import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
export default function Home() {
  return (
    <div>
      <div className="absolute left-0 top-0">
        <p className="text-2xl m-5">Brendan Lee</p>
      </div>

      <div className="absolute top-0 right-0 m-5 space-x-3">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu className="absolute h-[1.2rem] w-[1.2rem]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>About Me</DropdownMenuLabel>
            <DropdownMenuItem>Experience</DropdownMenuItem>
            <DropdownMenuItem>Skills</DropdownMenuItem>
            <DropdownMenuItem>Projects</DropdownMenuItem>
            <DropdownMenuItem>Contact Me</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
