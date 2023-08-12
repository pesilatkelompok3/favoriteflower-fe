interface ResponseData {
  data: {};
}
type Props = {
  url: string;
};

const getData = async (url: Props["url"]): Promise<ResponseData> => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getData;
