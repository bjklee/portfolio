import Header from "@/components/header";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Header />
      <div id="fade_in" className="h-full w-full content-center justify-center">
        <div className="flex flex-row justify-center space-x-3.5 mt-7">
          <p className="text-3xl">Welcome!</p>
          <p id="hand" className="text-3xl">
            👋
          </p>
        </div>
        <p className="text-center px-10 mt-5">
          Thanks for coming to my website! If you have any questions or would
          like to connect, contact me through the link in the drop down menu!
        </p>
      </div>
    </div>
  );
}
