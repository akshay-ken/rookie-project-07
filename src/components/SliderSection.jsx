export function SliderSection() {
  return (
    <section className="relative w-sm rounded-2xl bg-Blue-850 p-6 md:mt-10 md:w-xl">
      <p className="mt-2 text-base text-white/80">
        You’ve used <span className="font-semibold text-white"> 815 GB </span>{" "}
        of your storage
      </p>
      <div className="mt-4 mb-8 flex flex-col">
        <label htmlFor="slider" className="sr-only">
          slider
        </label>
        <input type="range" id="slider" className="w-full" />
        <div className="flex flex-row items-start justify-between">
          <label htmlFor="slider">0 GB</label>
          <label htmlFor="slider">100 GB</label>
        </div>
      </div>
      <div className="absolute top-[75%] right-[20%] left-[20%] flex flex-row items-center justify-center gap-x-4 rounded-xl bg-white p-4 md:-top-[25%] md:right-[5%] md:left-[60%]">
        <p className="text-5xl font-extrabold text-Blue-950">185</p>
        <span className="text-base font-bold text-gray-500 uppercase">
          gb left
        </span>
      </div>
      <div class="hidden h-0 w-0 border-t-[0px] border-r-[30px] border-b-[50px] border-t-transparent border-r-white border-b-transparent md:absolute md:top-[10%] md:right-[5%] md:block"></div>
    </section>
  );
}
