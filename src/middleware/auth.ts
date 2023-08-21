// import { useRouter } from "next/router";
// import { checkUserLoggedIn } from "@/lib/utils";

// type WrappedComponentProps = React.ReactElement;

// type CbProps = () => void;
// const isAuthenticated = (WrappedComponent: WrappedComponentProps) => {
//   return (props: CbProps) => {
//     // Contoh cek status login, sesuaikan dengan implementasi Anda
//     const isLoggedIn = checkUserLoggedIn(); // Implementasikan fungsi ini

//     // Jika belum login, arahkan pengguna ke halaman login
//     if (!isLoggedIn) {
//       const router = useRouter();
//       router.replace("/admin/login");
//       return null;
//     }

//     // Jika sudah login, lanjutkan ke komponen yang diberikan
//     return <WrappedComponent {...props} />;
//   };
// };

// export default isAuthenticated;
