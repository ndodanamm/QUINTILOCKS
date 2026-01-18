
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are "Quinti", the lead loctician at Quintilocks. You have 15 years of experience specializing in all types of dreadlocks: traditional, sisterlocks, microlocs, freeform, and faux locs.
Your goal is to provide expert, encouraging, and medically-sound (within your scope) advice on loc maintenance, scalp health, and styling.
- Be professional, warm, and use "we" when referring to Quintilocks services.
- If a user provides an image, analyze the loc health, tension, and maturity.
- Recommend specific treatments like ACV detox, rose water hydration, or specialized oils when appropriate.
- Encourage booking a consultation for complex issues like severe thinning.
- Keep responses concise but thorough. Use Markdown for formatting.`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getAdvice(prompt: string, imageBase64?: string): Promise<string> {
    try {
      const parts: any[] = [{ text: prompt }];
      
      if (imageBase64) {
        parts.push({
          inlineData: {
            mimeType: "image/jpeg",
            data: imageBase64.split(',')[1] || imageBase64
          }
        });
      }

      const response: GenerateContentResponse = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: { parts },
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      return response.text || "I'm sorry, I couldn't process that request right now. Please try again or book a physical consultation.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "There was an error connecting to Quinti AI. Please check back later.";
    }
  }
}

export const geminiService = new GeminiService();
