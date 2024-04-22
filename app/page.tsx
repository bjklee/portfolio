import Header from "@/components/header";
import Footer from "@/components/footer";
import Typewriter from "@/components/typewriter";

export default function Home() {
  return (
    <div>
      <Header />
      <div id="fade_in">
        <Typewriter />
      </div>
      <Footer />
    </div>
  );
}
