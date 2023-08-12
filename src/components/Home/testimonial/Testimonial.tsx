import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  return (
    <main className="w-full h-auto bg-slate-200 px-4 pt-3">
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-24 bg-black" style={{ height: "1px" }}></div>
        <h1 className="mx-4 text-lg font-bold underline">Testimonial</h1>
        <div className="w-24 bg-black" style={{ height: "1px" }}></div>
      </div>
      <div className="w-full h-80 flex items-center">
        <div className="w-full h-auto whitespace-nowrap scroll-auto overflow-hidden">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </main>
  );
}
