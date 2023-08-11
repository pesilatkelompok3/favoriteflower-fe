
'use client';

import { RiInstagramLine, RiFacebookBoxLine, RiWhatsappLine } from "react-icons/ri";
import {  BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Footer } from 'flowbite-react';

export default function TheFooter() {
    return (
        <Footer container className="text-white bg-black">
            <div className="w-full text-center lg:mx-96 lg:pt-12">
                <div className="w-full justify-between sm:flex sm:items-start sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">
                            FavoriteFlower
                        </h1>
                        <p className="text-sm mb-8 text-justify max-w-xs">
                            Lorem ipsum dolor sit amet consectetur. Quis amet ac est pellentesque pulvinar et ac sed lorem. Vitae viverra congue tellus ut. Ante nisl in sagittis vulputate. Molestie venenatis elit scelerisque aliquam egestas amet hac diam tincidunt lacus.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-4 max-w-xs">
                            Alamat
                        </h1>
                        <p className="text-sm mb-8">
                            Jl. Cihideung, Kab. Bandung,
                            Lembang, Jawa Barat
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold mb-4">
                            Social Media
                        </h1>
                        <div className="gap-2 flex mb-8">
                            <BsFacebook className="cursor-pointer hover:text-gray-300 h-8 w-8" />
                            <BsInstagram className="cursor-pointer hover:text-gray-300 h-8 w-8" />
                            <BsWhatsapp className="cursor-pointer hover:text-gray-300 h-8 w-8" />
                        </div>
                    </div>
                </div>
                <Footer.Copyright
                    by="❤ WeebzDev XD"
                    href="#"
                    year={new Date().getFullYear()}
                />
            </div>
        </Footer>
    )
}



// export function Footer() {
//     return (
//         <footer className="bg-slate-900 text-slate-50">
//             <div>
//                 <h1 className="text-md">
//                     FavoriteFlower
//                 </h1>
//                 <p className="text-xs">
//                     Lorem ipsum dolor sit amet consectetur. Quis amet ac est pellentesque pulvinar et ac sed lorem. Vitae viverra congue tellus ut. Ante nisl in sagittis vulputate. Molestie venenatis elit scelerisque aliquam egestas amet hac diam tincidunt lacus.
//                 </p>
//             </div>
//             <div>
//                 <h1 className="text-2xl">
//                     Alamat
//                 </h1>
//                 <p className="text-sm">
//                     Jl. Cihideung, Kab. Bandung,
//                     Lembang, Jawa Barat
//                 </p>
//             </div>
//             <div>
//                 <h1 className="text-2xl">
//                     Social Media
//                 </h1>
//                 <ul>
//                     <li>
//                         <RiFacebookLine />
//                     </li>
//                     <li>
//                         <RiInstagramLine />
//                     </li>
//                     <li>
//                         <RiWhatsappLine />
//                     </li>
//                 </ul>
//             </div>
//         </footer>
//     )
// }