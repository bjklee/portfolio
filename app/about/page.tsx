import Header from "@/components/header";

export default function About() {
  return (
    <div className="h-full w-full">
      <Header />
      <div id="fade_in" className="h-full w-full">
        <p className="absolute text-2xl left-1/2 transform -translate-x-1/2 mt-24">
          About Me
        </p>
      </div>
    </div>
  );
}
