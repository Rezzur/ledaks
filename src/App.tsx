import { FloatingContact } from "./components/FloatingContact";
import { HashScroll } from "./components/HashScroll";
import { SiteHeader } from "./components/SiteHeader";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { MobileStickyCta } from "./sections/MobileStickyCta";
import { ModularitySection } from "./sections/ModularitySection";
import { PackageStackSection } from "./sections/PackageStackSection";
import { ProjectsShowcase } from "./sections/ProjectsShowcase";

function App() {
  return (
    <div className="site-shell">
      <HashScroll />
      <SiteHeader />
      <main>
        <HeroSection />
        <ModularitySection />
        <ProjectsShowcase />
        <PackageStackSection />
        <ContactSection />
      </main>
      <FloatingContact />
      <MobileStickyCta />
    </div>
  );
}

export default App;
