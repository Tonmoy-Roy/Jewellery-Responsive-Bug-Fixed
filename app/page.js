import HomeHero from "./components/sections/homeHero/HomeHero";
import About from "./components/sections/about/About";
import TargetAudience from "./components/sections/targetAudience/TargetAudience";
import ShowCase from "./components/sections/showCase/ShowCase";
import Quote from "./components/sections/quote/Quote";
import Process from "./components/sections/process/Process";
import ColorPalette from "./components/sections/coloPallete/ColorPallete";
import WebsiteShowcase from "./components/sections/websiteShowcase/WebsiteShowcase";

export default function Home() {
  return (
    <div>
      <HomeHero/>
      <About/>
      <TargetAudience/>
      <ShowCase/>
      <Quote/>
      <Process/>
      <ColorPalette/>
      <WebsiteShowcase/>
    </div>
  );
}
