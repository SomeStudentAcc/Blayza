import ContactCard from "@/components/shared/ContactCard";
import DustButton from "@/components/shared/DustButton";
import MainBanner from "@/components/shared/MainBanner";
import MainProducts from "@/components/shared/MainProducts";
import OurTechnology from "@/components/shared/OurTechnology";
import WhoAreWe from "@/components/shared/WhoAreWe";
import WhyUs from "@/components/shared/WhyUs";

export default function Home() {
  return (
    <>
      <MainBanner />
      <WhyUs />
      <DustButton />
      <MainProducts />
      <WhoAreWe />
      <OurTechnology />
      <ContactCard />
    </>
  );
}
