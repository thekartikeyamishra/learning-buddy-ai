import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export const fetchQuiz = async (exam, subject, topic) => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Generate a structured quiz for the topic "${topic}" in "${subject}" for the "${exam}" exam.
            The response should be in **valid JSON format** with the following keys:
            {
              "important_topics": { "topic1": 9, "topic2": 8, "topic3": 7 },
              "frequent_topics": ["Topic A", "Topic B", "Topic C"],
              "questions": [
                {
                  "question": "Sample Question?",
                  "options": ["A", "B", "C", "D"],
                  "answer": "B",
                  "explanation": "Explanation for the correct answer."
                }
              ],
              "cheat_codes": ["Hack 1", "Hack 2", "Hack 3"]
            }`
          }
        ],
        temperature: 0.7,
        max_tokens: 600,
      },
      {
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        }
      }
    );

    const aiResponse = response.data.choices[0]?.message?.content.trim();

    try {
      return JSON.parse(aiResponse);  // Parse AI response into JSON
    } catch (parseError) {
      console.error("Error parsing AI response:", parseError);
      return {
        error: "⚠️ AI response is not correctly formatted. Please try again."
      };
    }
  } catch (error) {
    console.error("Error fetching AI quiz:", error);
    return { error: "❌ Error fetching quiz. Please check API key and internet connection." };
  }
};
