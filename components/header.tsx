import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, User, Keyboard, Send, ScrollText } from "lucide-react";

export default function Header() {
  return (
    <div className="flex">
      <a href="/" className="absolute left-0 top-0">
        <p className="text-2xl mx-5 mt-5 lg:text-3xl">Brendan Lee</p>
        <p className="text-sm ml-5 lg:text-base">
          Software Engineer / UI Designer
        </p>
      </a>

      <div className="absolute top-3 right-5 space-x-3">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger className="lg:w-12 lg:h-12 m-5" value="Day">
            <Menu className="r" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="absolute top-5 right-1/2 lg:w-24">
            <a href="/about" className="hover:underline">
              <DropdownMenuItem>
                About
                <User className="absolute right-0 mr-1.5 w-5" />
              </DropdownMenuItem>
            </a>
            <DropdownMenuSeparator />
            <a href="/work" className="hover:underline">
              <DropdownMenuItem>
                Work
                <Keyboard className="absolute right-0 mr-1.5 w-5" />
              </DropdownMenuItem>
            </a>
            <DropdownMenuSeparator />
            <a
              href="/Brendan Lee Resume.pdf"
              download="Brendan Lee Resume.pdf"
              className="hover:underline"
            >
              <DropdownMenuItem>
                Resume
                <ScrollText className="absolute right-0 mr-1.5 w-5" />
              </DropdownMenuItem>
            </a>
            <DropdownMenuSeparator />
            <a href="/contact" className="hover:underline">
              <DropdownMenuItem>
                Contact
                <Send className="absolute right-0 mr-1.5 w-5" />
              </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
