import {
  GoogleGenAI,
} from '@google/genai';

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-1.5-flash';

export const AiChatSession = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
