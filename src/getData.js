import { useState, useEffect } from "react";

export default async function useData(url) {
  const data = await fetch(url);
  return data.json();
}
export function ComponentDidMount(url, body) {
  const [state, setState] = useState();
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url, requestOptions)).json();

      setState(data);
    };

    dataFetch();
  }, [state]);

  return [state];
  // Simple POST request with a JSON body using fetch
}
