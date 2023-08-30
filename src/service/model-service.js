const API_KEY = "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"; // This will be the API Key from hugging face
const URL = "https://api-inference.huggingface.co/models/gpt2";

export const getResponse = async (inputs) => {
  const response = await fetch(URL, {
    headers: { Authorization: "Bearer " + API_KEY },
    method: "POST",
    body: JSON.stringify({ inputs }),
  });
  const result = await response.json();
  return result[0]["generated_text"].split(inputs)[1];
};
