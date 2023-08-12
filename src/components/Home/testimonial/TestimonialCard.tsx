import Image1 from "~/assets/images/7a41c59ebeff0bc91f253a0c85d18e01.jpeg";
import Image from "next/image";

export default function TestimonialCard() {
  const gradient =
    "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)";

  return (
    <div className="w-40 h-40 relative inline-block justify-center rounded-3xl overflow-hidden ml-2 first:ml-0">
      <Image
        className="w-full h-full object-cover"
        src={Image1}
        alt="Picture of the author"
      />
      <div
        className="w-full h-16 absolute bottom-0 pb-1 px-5 flex items-end"
        style={{ background: gradient }}
      >
        <h1 className="text-base font-semibold mb-4">Flower Bouquet</h1>
      </div>
    </div>
  );
}
