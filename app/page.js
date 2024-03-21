import BenefitsSection from "@/components/BenefitsSection";
import ClientsSection from "@/components/ClientsSection";
import FormSection from "@/components/FormSection";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-5 pb-12">
      <Header />
      <div className="relative md:-top-10 mt-5 md:mt-0 flex flex-wrap md:flex-nowrap   gap-5 w-full md:px-5 justify-between">
        <FormSection />
        <ServicesSection />
      </div>
      <ClientsSection />
      <BenefitsSection />
    </main>
  );
}
