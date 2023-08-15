import Image1 from "~/assets/images/Chobi - すいちゃん今日も (94091894)  - Copy.png";
import Image from "next/image";

// Deklarasikan tipe props yang akan diteruskan ke dalam komponen
type TestimonialCardProps = {
  key: string; // React menggunakan key sebagai prop khusus, Anda mungkin tidak ingin meneruskannya
  dataKomen: {
    id: string;
    name: string;
    comment: string;
    // ... tambahkan properti lain yang ada di objek dataKomen
  };
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ dataKomen }) => {
  return (
    <div className="w-72 h-80 md:w-80 md:h-[352px] relative rounded-3xl overflow-hidden inline-block drop-shadow-lg shadow-black/50 mr-2 md:mr-4">
      <div className="w-full h-64 md:h-72 absolute bottom-0 pb-1 px-5 rounded-t-3xl bg-secondary flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-black absolute -top-12">
          <Image className="w-full h-full object-cover" src={Image1} alt="Picture of the author" />
        </div>
        <h1 className="mt-14 font-semibold text-lg text-center">{dataKomen.name}</h1>
        <p className="mt-2 font-normal italic text-base text-center whitespace-normal">
          &quot;{dataKomen.comment}&quot;
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
