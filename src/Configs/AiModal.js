import { GoogleGenAI } from "@google/genai";

export async function generateForm(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  });
  const config = {
    responseMimeType: "application/json",
  };
  const model = "gemini-1.5-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `${prompt} on the basis of description please give a form in json format with the form title, form subheading, form field, form name, placeholder, and form label in json format`,
        },
      ],
    },
  ];

  return ai.models.generateContent({
    model,
    config,
    contents,
  });
}

