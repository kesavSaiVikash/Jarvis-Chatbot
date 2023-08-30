import { VectorStorage } from "vector-storage";

const storage = new VectorStorage({
  openAIApiKey: "", // This will be the API key of openAI
});

export const save = async (message, response) => {
  storage.addText(message, { response }).catch(console.log);
};
