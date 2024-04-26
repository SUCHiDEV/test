"use server";

const getData = async (
  endpoint: string,
  revalidateOption: RequestInit = { cache: "force-cache" }
) => {
  const result = await fetch(endpoint, revalidateOption);

  return result.ok ? result.json() : [];
};

export default getData;
