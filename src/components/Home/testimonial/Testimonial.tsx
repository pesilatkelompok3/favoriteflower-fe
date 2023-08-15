import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  const cardListStyle: React.CSSProperties = {
    scrollbarWidth: "none", // For Firefox
    msOverflowStyle: "none", // For Internet Explorer and Edge
    WebkitOverflowScrolling: "touch", // For iOS Safari
    scrollBehavior: "smooth",
  };

  const datas = [
    {
      id: "1",
      name: "cokendi",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi, dicta possimus undedeserunt autem ipsa quam vel ratione nemo.",
    },
    {
      id: "2",
      name: "agato",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi, dicta possimus undedeserunt autem ipsa quam vel ratione nemo.",
    },
    {
      id: "3",
      name: "dachi",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi, dicta possimus undedeserunt autem ipsa quam vel ratione nemo.",
    },
  ];

  return (
    <div className="w-full h-auto bg-white px-4 md:px-16 pt-3">
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-24 md:w-96 bg-black" style={{ height: "1px" }}></div>
        <h1 className="mx-4 text-lg font-bold underline">Testimoni</h1>
        <div className="w-24 md:w-96 bg-black" style={{ height: "1px" }}></div>
      </div>
      <div className="w-full h-[372px] relative md:px-28 flex items-center">
        <div className="w-full h-auto md:p-4 whitespace-nowrap scroll-auto overflow-x-auto" style={cardListStyle}>
          <style>{`::-webkit-scrollbar { display: none; }`}</style>
          {datas.map((data) => (
            <TestimonialCard key={data.id} dataKomen={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
