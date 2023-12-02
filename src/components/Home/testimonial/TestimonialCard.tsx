import Image, { StaticImageData } from "next/image";

// Deklarasikan tipe props yang akan diteruskan ke dalam komponen
type TestimonialCardProps = {
  key: string; // React menggunakan key sebagai prop khusus, Anda mungkin tidak ingin meneruskannya
  dataComment: {
    id: string;
    name: string;
    comment: string;
    occupation: string;
    image: StaticImageData;
    // ... tambahkan properti lain yang ada di objek dataComment
  };
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ dataComment }) => {
  return (
    <div className="w-72 h-80 md:w-80 md:h-[352px] relative rounded-3xl overflow-hidden inline-block drop-shadow-lg shadow-black/50 mr-2 md:mr-4 first-of-type:ml-8 md:first-of-type:ml-0 last:mr-8 md:last:mr-0">
      <div className="w-full h-64 md:h-72 absolute bottom-0 pb-1 px-5 rounded-t-3xl bg-secondary flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-2 border-black overflow-hidden bg-black absolute -top-12">
          <Image className="w-full h-full object-cover scale-125 transition ease-in-out delay-100 hover:scale-100 duration-200" src={dataComment.image} alt="Picture of the author" />
        </div>
        <h1 className="mt-14 font-semibold text-lg text-center">{dataComment.name}</h1>
        <h3 className="text-[12px] text-center font-light">{dataComment.occupation}</h3>
        <p className="mt-2 font-normal italic text-black text-center whitespace-normal">
          &quot;{dataComment.comment}&quot;
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
