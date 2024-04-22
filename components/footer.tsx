import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="absolute inset-x-0 left-0 bottom-0 right-0 p-3 border-t-2">
      <div className="flex flex-row justify-between">
        <p className="text-sm">© Brendan Lee 2024 </p>
        <div className="flex flex-row">
          <a href="mailto:bjklee@umich.edu" className="mx-1 text-sm">
            bjklee@umich.edu
          </a>
          <p className="text-sm">|</p>
          <a href="https://github.com/bjklee" className="mx-1">
            <Github strokeWidth={1} />
          </a>
          <p className="text-sm">|</p>
          <a href="https://www.linkedin.com/in/brendanjklee/" className="ml-1">
            <Linkedin strokeWidth={1} />
          </a>
        </div>
      </div>
    </div>
  );
}