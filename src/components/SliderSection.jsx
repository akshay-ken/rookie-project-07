export function SliderSection() {
  return (
    <section className="w-sm rounded-2xl bg-Blue-850 p-6 md:w-xl">
      <p className="text-base text-white/80">
        You’ve used <span className="font-semibold text-white"> 815 GB </span>{" "}
        of your storage
      </p>
      <div className="flex flex-col">
        <label htmlFor="slider" className="sr-only">
          slider
        </label>
        <input type="range" id="slider" className="w-full" />
        <div className="flex flex-row items-start justify-between">
          <label htmlFor="slider">0 GB</label>
          <label htmlFor="slider">100 GB</label>
        </div>
      </div>
    </section>
  );
}
