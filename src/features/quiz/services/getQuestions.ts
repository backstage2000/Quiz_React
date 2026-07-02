import { api } from "@config";
import type { OTDBResponse } from "../types";

 async function getQuestions(amount = 10, token?: string) {
  const { data } = await api.get<OTDBResponse>("/api.php", {
    params: {
      amount,
      token,
      encode: "url3986",
    },
  });

  return data.results;
}

export default getQuestions;