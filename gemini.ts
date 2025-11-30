import { GoogleGenAI, Chat } from "@google/genai";

const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) || '';

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
} else {
  console.warn("Gemini API Key is missing.");
}

export const createChatSession = (): Chat | null => {
  if (!ai) return null;

  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `
        Ты - эксперт-историк и футуролог в области искусственного интеллекта.
        Твоя задача - помогать пользователям сайта "Эволюция Разума" узнавать больше об истории ИИ.
        
        Твой стиль общения:
        - Образовательный, но доступный.
        - Краткий и по существу (ответы не более 3-4 предложений, если не попросили подробнее).
        - Дружелюбный и вдохновляющий.
        
        Если тебя спрашивают о событиях, которых нет в контексте, используй свои общие знания.
        Если спрашивают, кто тебя создал, отвечай, что ты работаешь на модели Gemini от Google.
        Отвечай на русском языке.
      `,
    },
  });
};