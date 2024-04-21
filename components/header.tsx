import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  User,
  Keyboard,
  BookCheck,
  SquareGanttChart,
  Send,
} from "lucide-react";

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
          <DropdownMenuTrigger value="Day">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-5 mr-2">
            <a href="/about" className="hover:underline">
              <DropdownMenuItem>
                About Me
                <User className="absolute right-0 mr-1.5 w-5" />
              </DropdownMenuItem>
            </a>
            <a href="/skills" className="hover:underline">
              <DropdownMenuItem>
                Skills
                <Keyboard className="absolute right-0 mr-1.5 w-5" />
              </DropdownMenuItem>
            </a>
            <a href="/experience" className="hover:underline">
              <DropdownMenuItem>
                Experience
                <BookCheck className="absolute right-0 mr-1.5 w-5" />
              </DropdownMenuItem>
            </a>
            <a href="/projects" className="hover:underline">
              <DropdownMenuItem>
                Projects
                <SquareGanttChart className="absolute right-0 mr-1.5 w-5" />
              </DropdownMenuItem>
            </a>
            <a href="/contact" className="hover:underline">
              <DropdownMenuItem>
                Contact Me
                <Send className="absolute right-0 mr-1.5 w-5" />
              </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
