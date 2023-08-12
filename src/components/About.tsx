import Image1 from "~/assets/images/a17c7d559fbb38fe1d2502aaaaaea3db.jpeg";
import Image2 from "~/assets/images/b8b76b022084829211b00a2bae5ded3a.jpeg";
import Image3 from "~/assets/images/e8d996ed9ee9115837d4116e0bc2c5d7.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <main className="w-full h-auto bg-white px-4 pt-3">
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-24 bg-black" style={{ height: "1px" }}></div>
        <h1 className="mx-4 text-lg font-bold underline">Tentang Kami</h1>
        <div className="w-24 bg-black" style={{ height: "1px" }}></div>
      </div>
      <p className="px-12 my-3 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur. Vitae elit nisl mi neque eget
        arcu id orci pretium. Mauris risus ut enim justo pellentesque. A et
        suspendisse pellentesque integer. Tristique at egestas at adipiscing
        mattis sit sed. Dictum mi odio fringilla cursus eget. Facilisi luctus
        pellentesque nulla lacus massa eu.
      </p>
      <div className="mt-2 flex flex-col items-center">
        <Image
          className="w-60 h-36 object-cover mb-4"
          src={Image1}
          alt="Picture of the author"
        />
        <Image
          className="w-60 h-36 object-cover mb-4"
          src={Image2}
          alt="Picture of the author"
        />
        <Image
          className="w-60 h-36 object-cover mb-4"
          src={Image3}
          alt="Picture of the author"
        />
      </div>
    </main>
  );
};

export default About;
