import ContactCard from "@/components/shared/ContactCard";
import DustButton from "@/components/shared/DustButton";
import GlassesGrid from "@/components/shared/GlasessGrid";
import MainProducts from "@/components/shared/MainProducts";
import OurTechnology from "@/components/shared/OurTechnology";
import SliderBanner from "@/components/shared/SliderBanner";
import WhoAreWe from "@/components/shared/WhoAreWe";
import WhyUs from "@/components/shared/WhyUs";

export default function Home() {
  return (
    <>
      <SliderBanner />
      {/*       <MainBanner />
       */}{" "}
      <WhyUs />
      <DustButton />
      <MainProducts />
      <WhoAreWe />
      <GlassesGrid title="Hyper Optics"/>
      <OurTechnology />
      <ContactCard />
    </>
  );
}
