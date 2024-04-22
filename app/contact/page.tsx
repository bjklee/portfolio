import Footer from "@/components/footer";
import ContactForm from "@/components/form";
import Header from "@/components/header";

export default function Contact() {
  return (
    <div>
      <Header />
      <div id="fade_in">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
