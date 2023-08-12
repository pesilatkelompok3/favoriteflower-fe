interface ResponseData {
  data: {};
}

type Props = {
  url: string;
};

const getData = async (url: Props["url"]): Promise<ResponseData> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;
};

export default getData;
