import HeroSection from "@/components/landing/Hero";
import AIInput_01 from "@/components/snapui/ai-input/ai-input-01";
import AIInput_02 from "@/components/snapui/ai-input/ai-input-02";
import AIInput_03 from "@/components/snapui/ai-input/ai-input-03";
import AIInput_04 from "@/components/snapui/ai-input/ai-input-04";
import AIInput_05 from "@/components/snapui/ai-input/ai-input-05";
import AIInput_06 from "@/components/snapui/ai-input/ai-input-06";
import AIInput_07 from "@/components/snapui/ai-input/ai-input-07";
import AIInput_08 from "@/components/snapui/ai-input/ai-input-08";
import AIInput_09 from "@/components/snapui/ai-input/ai-input-09";
import AIInput_10 from "@/components/snapui/ai-input/ai-input-10";
import Image from "next/image";

export default function Home() {
  return (
<main className="bg-white dark:bg-black/5 overflow-x-hidden">
<div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
  <HeroSection/>
</div>
<div className="flex flex-col justify-center gap-10">
  <AIInput_01/>
  <AIInput_02/>
  <AIInput_03/>
  <AIInput_04/>
  <AIInput_05/>
  <AIInput_06/>
  <AIInput_07/>
  <AIInput_08/>
  <AIInput_09/>
  <AIInput_10/>
</div>
  </main>
  );
}
