"use server";


import * as z from "zod";
import OpenAI from 'openai';
import { careerSchema } from "./validations";
import { insightsFromSelectedCareerPrompt } from "@/prompts";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
});

async function careerSubmit(data: z.infer<typeof careerSchema>) {
  console.log(data);

  const { careers, selectedCareer, reason } = data;

  const insightsFromSelectedCareer = await openai.chat.completions.create({
    messages: [{ 
      role: 'user', 
      content: insightsFromSelectedCareerPrompt(careers, selectedCareer, reason) 
    }],
    model: 'gpt-3.5-turbo',
  });

  console.log(insightsFromSelectedCareer.choices);

  // mutate data
  // revalidate cache
};

export { careerSubmit };