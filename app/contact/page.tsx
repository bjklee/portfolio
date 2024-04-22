import Footer from "@/components/footer";
import ContactForm from "@/components/form";
import Header from "@/components/header";

export default function Contact() {
  return (
    <div className="h-full w-full">
      <Header />
      <div id="fade_in" className="h-full w-full">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
