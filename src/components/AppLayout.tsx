import Hero from "./Hero";
import MenuSection from "./MenuSection";
import ContactSection from "./ContactSection";

const AppLayout = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MenuSection />
      <ContactSection />
    </div>
  );
};

export default AppLayout;