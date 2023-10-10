export const getData = async () => {
  const response = await fetch(
    "https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json",
    {
      method: "GET",
    }
  );
  return response.json();
};
