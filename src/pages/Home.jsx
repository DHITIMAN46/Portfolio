import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { CertificateSection } from "../components/CertificateSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle */}
         <ThemeToggle />
        {/*Backgourand Effects */}
          <StarBackground />
        {/*Navbar */}
          <Navbar />
        {/*Main COntent */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <CertificateSection />
            <ContactSection />
        </main>


        {/*Footer */}
        <Footer />
    </div>
    );
};