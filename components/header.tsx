import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div>
      <a href="/" className="absolute left-0 top-0">
        <p className="text-2xl mx-5 mt-5">Brendan Lee</p>
        <p className="text-sm ml-5">Software Engineer / UI Designer</p>
      </a>

      <div className="absolute top-0 right-0 m-5 space-x-3">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-5 mr-2">
            <DropdownMenuItem>
              <a href="/about">About Me</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/skills">Skills</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/experience">Experience</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/projects">Projects</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/contact">Contact Me</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
