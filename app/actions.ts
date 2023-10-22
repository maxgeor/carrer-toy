"use server";

import * as z from "zod";
import OpenAI from 'openai';
import { sql } from "@vercel/postgres";
import { careerSchema } from "./validations";
import { insightsFromSelectedCareerPrompt } from "@/prompts";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
});

async function getChatResponse() {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Who won the world series in 2020?" },
      { role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020." },
      { role: "user", content: "Where was it played?" }
    ],
  });

  console.log(response);
  return response;
}

async function careerSubmit(data: z.infer<typeof careerSchema>) {
  const { careers, selectedCareer, reason } = data;

  const insightsFromSelectedCareer = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: insightsFromSelectedCareerPrompt(careers, selectedCareer, reason)
    }],
  });

  console.log(insightsFromSelectedCareer.choices);
};

export { careerSubmit };