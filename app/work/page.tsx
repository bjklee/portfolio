import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Work() {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="pt-20 pb-20" id="fade_in">
        <p className="text-center text-lg px-6 mt-5 font-bold lg:text-2xl">
          Work Experience
        </p>
        <p className="text-center text-md px-6 mt-5 lg:text-lg">
          Incoming SWE Intern at Yazaki - Summer 2024
        </p>
        <div className="flex flex-row justify-center">
          <Image
            alt="Yazaki logo"
            src="/images/yazaki.webp"
            width={200}
            height={200}
            className="flex flex-row self-center w-1/2 lg:w-1/3 mt-5 border-2 border-[rgb(29,33,42)] rounded-lg"
          />
        </div>
        <p className="text-center text-md px-6 mt-8 lg:text-lg">
          UIUX Design Intern at I-Tech USA - Summer 2023
        </p>
        <div className="flex flex-row justify-center">
          <Image
            alt="Yazaki logo"
            src="/images/i_tech_usa_logo.jpeg"
            width={200}
            height={200}
            className="flex flex-row self-center w-1/2 lg:w-1/3 mt-5 border-2 border-[rgb(29,33,42)] rounded-lg"
          />
        </div>
        <p className="text-center text-sm px-6 mt-5 lg:text-base">
          Developed UI designs in Figma and Adobe XD for mobile fitness app
          'K•GO'
        </p>
        <p className="text-center text-lg px-6 mt-20 font-bold lg:text-2xl">
          Personal Projects
        </p>
        <p className="text-center text-md px-6 mt-5 lg:text-lg">Dirty Knee</p>
        <p className="text-center text-sm px-6 mt-3 lg:text-base">
          Developed mobile app using React Native and Firebase.
        </p>
        <p className="text-center text-sm px-6 mt-3 lg:text-base">
          Utilized firebase authentication to protect user information.
        </p>
        <p className="text-center text-sm px-6 mt-3 lg:text-base">
          Employed the OpenAI API to provide AI generated responses customized
          to user preferences.
        </p>
      </div>
      <Footer />
    </div>
  );
}
