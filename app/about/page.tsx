import Header from "@/components/header";
import RelativeFooter from "@/components/relative_footer";
import Image from "next/image";

export default function About() {
  var size = require("window-size");
  console.log(size);

  return (
    <div>
      <Header />
      <div className="overscrll-contain" id="fade_in">
        <div className="w-full"></div>
        <div className="flex flex-row justify-center space-x-3.5 mt-8">
          <Image
            alt="A picture of me!"
            src="/images/headshot.png"
            width={200}
            height={200}
            className="flex-row justify-center mt-20 border-2 border-white rounded-full"
          />
          <div className="flex flex-col ">
            <p className="text-3xl mt-36">Hello!</p>
            <p id="hand" className="text-3xl text-center mt-2">
              👋
            </p>
          </div>
        </div>
        <p className="text-center text-sm px-6 mt-5">
          Thanks for visiting my website!
        </p>
        <p className="text-center text-sm px-6 mt-5">
          I am an incoming SWE intern at Yazaki and a senior at the University
          of Michigan with a major in Computer Science and a minor in User
          Experience Design.
        </p>
        <p className="text-center text-sm px-6 mt-5">
          I current have over 5+ years of coding experience and have worked on
          projects anywhere from full stack web/mobile apps to multithreaded
          projects.
        </p>
        <p className="text-center text-sm px-6 mt-5">
          I love both the practical and conceptual layers of programming and am
          looking to use my skills to help people in need.
        </p>
        <p className="text-center text-sm px-6 mt-5 pb-10">
          If you are interested in my or my skillset or simply would like to
          connect, please feel free to reach out to me below!
        </p>
      </div>
      <RelativeFooter />
    </div>
  );
}
