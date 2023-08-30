import { VectorStorage } from "vector-storage";

const storage = new VectorStorage({
  openAIApiKey: "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", // This will be the API key of openAI
});

export const save = async (message, response) => {
  storage.addText(message, { response }).catch(console.log);
};
