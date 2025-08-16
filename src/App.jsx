import { HeaderSection } from "./components/HeaderSection";
import { SliderSection } from "./components/SliderSection";

function App() {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center gap-4 md:gap-8">
        <HeaderSection />
        <SliderSection />
      </main>
    </>
  );
}

export default App;
