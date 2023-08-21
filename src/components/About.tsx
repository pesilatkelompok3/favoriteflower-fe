"use client";
import Image1 from "~/assets/images/a17c7d559fbb38fe1d2502aaaaaea3db.jpeg";
import Image2 from "~/assets/images/b8b76b022084829211b00a2bae5ded3a.jpeg";
import Image3 from "~/assets/images/e8d996ed9ee9115837d4116e0bc2c5d7.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <main className="w-full h-auto bg-white px-4 md:px-8 pt-3">
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-24 md:w-96 bg-black" style={{ height: "1px" }}></div>
        <h1 className="mx-4 text-lg font-bold underline">Tentang Kami</h1>
        <div className="w-24 md:w-96 bg-black" style={{ height: "1px" }}></div>
      </div>
      <div className="flex gap-4 justify-center">
        <p className="my-8 text-center max-w-6xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci amet atque voluptatem laudantium dolorum sint voluptates, quisquam corrupti sapiente, veniam tenetur! Cum, consequatur ab porro reprehenderit cupiditate inventore quam rerum facilis, unde nostrum dolores qui, consequuntur dolor. Ullam sunt laboriosam adipisci voluptate, explicabo sequi dolores in dolorem repudiandae rerum.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center md:flex-row md:justify-center md:gap-8 md:flex-wrap">
        <Image className="w-60 h-36 object-cover mb-4" src={Image1} alt="Picture of the author" />
        <Image className="w-60 h-36 object-cover mb-4" src={Image2} alt="Picture of the author" />
        <Image className="w-60 h-36 object-cover mb-4" src={Image3} alt="Picture of the author" />
        <Image className="w-60 h-36 object-cover mb-4" src={Image3} alt="Picture of the author" />
        <Image className="w-60 h-36 object-cover mb-4" src={Image3} alt="Picture of the author" />
      </div>
    </main>
  );
};

export default About;
