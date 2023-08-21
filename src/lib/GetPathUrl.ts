import { usePathname } from "next/navigation";

const useGetPathUrl = () => {
  const pathname = usePathname();
  return pathname;
};

export default useGetPathUrl;
