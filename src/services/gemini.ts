import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const getAIResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "I'm sorry, I couldn't process your request at the moment.";
  }
};

export const getCostEstimation = async (projectDetails: string) => {
  const prompt = `As a construction cost estimator, provide a detailed cost breakdown and estimation for the following project: ${projectDetails}. Return the response in a structured markdown format with categories like Materials, Labor, Equipment, and Contingency.`;
  return getAIResponse(prompt);
};

export const getRiskPrediction = async (projectDetails: string) => {
  const prompt = `As a construction risk analyst, predict potential risks for the following project: ${projectDetails}. Identify risks related to delays, budget, safety, and supply chain. Provide mitigation strategies for each risk.`;
  return getAIResponse(prompt);
};

export const getMaterialQuantityPrediction = async (dimensions: string) => {
  const prompt = `As a materials engineer, predict the quantities of cement, steel, bricks, and sand needed for the following dimensions: ${dimensions}. Provide the quantities in standard units (bags, tons, units, cubic meters).`;
  return getAIResponse(prompt);
};
