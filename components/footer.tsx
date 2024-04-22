import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="absolute inset-x-0 left-0 bottom-0 right-0 p-3 border-t-2">
      <div className="flex flex-row justify-between">
        <p className="text-sm">© Brendan Lee 2024</p>
        <div className="flex flex-row">
          <a href="https://github.com/bjklee" className="mr-4">
            <Github strokeWidth={1} />
          </a>
          <a href="https://www.linkedin.com/in/brendanjklee/">
            <Linkedin strokeWidth={1} />
          </a>
        </div>
      </div>
    </div>
  );
}
