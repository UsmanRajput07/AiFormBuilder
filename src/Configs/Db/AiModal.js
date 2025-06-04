

import {
  GoogleGenAI,
} from '@google/genai';

export async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-1.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `${prompt} on the basis of description please give a form in json formate with the form title, form subheading , form filed , form name , placeholder , and form label in json formate`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });
 
  return response
}


