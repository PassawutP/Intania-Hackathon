import dotenv from 'dotenv';
import fs from "fs";

dotenv.config();

const CLIP_API_URL = process.env.CLIP_API_URL;
const CLIP_API_KEY = process.env.CLIP_API_KEY;

export async function getSimilarity(image:Base64URLString, textPrompts:string[]) {
  try {
    const response = await fetch(CLIP_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CLIP_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: image,
        parameters: {
          candidate_labels: textPrompts
        }
      })
    });
    
    if (!response.ok) {
      return response.status;
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.log('Error message:', error.message); 
  }
}

export function getImageBase64(filePath:string) {
  const imageBuffer = fs.readFileSync(filePath);
  return imageBuffer.toString("base64");
}