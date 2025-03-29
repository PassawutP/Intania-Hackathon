import dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();

const openaiClient = new OpenAI();


export async function generateImage(prompt: string) {
  try {
    const response = await openaiClient.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024"
    });

    const imageUrl = response.data[0].url;
    console.log("Generated Image URL:", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

