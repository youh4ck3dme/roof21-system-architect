import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

const getClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY not found in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateArchitecturalInsight = async (query: string, context: string, language: Language): Promise<string> => {
  const client = getClient();
  if (!client) return language === 'en' ? "Simulation Mode: API Key missing." : "Simulačný režim: Chýba API kľúč.";

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        You are an expert System Architect for 'Roof21', a real estate ecosystem.
        
        System Context:
        - Core: Bitrix24 (CRM, Properties, Deals)
        - Frontends: roof21.co.th (International), thajsko-nehnutelnosti.sk (Slovak)
        - Tech: WordPress, REST API, Custom Plugins
        - User's Current View Context: ${context}
        - Current Language: ${language}

        User Question: ${query}

        Provide a concise, technical, and helpful answer (max 100 words).
        IMPORTANT: Respond in the language specified (${language === 'en' ? 'English' : 'Slovak'}).
      `,
    });
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'en' ? "Error connecting to AI Architect. Please try again." : "Chyba pri pripojení k AI architektovi. Skúste to prosím znova.";
  }
};