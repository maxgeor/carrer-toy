"use server";


import * as z from "zod";
import OpenAI from 'openai';
import { careerSchema } from "./validations";
import { insightsFromSelectedCareerPrompt } from "@/prompts";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
});

async function sendChatMessage(message: string) {
  // const response = openai.ChatCompletion.create(
  //   const model = "gpt-3.5-turbo",
  //   const messages = [
  //     { "role": "system", "content": "You are a helpful assistant." },
  //     { "role": "user", "content": "Who won the world series in 2020?" },
  //     { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
  //     { "role": "user", "content": "Where was it played?" }
  //   ]
  // )
}

async function careerSubmit(data: z.infer<typeof careerSchema>) {
  const { careers, selectedCareer, reason } = data;

  const isThisAnswerShitty = (question: string, answer: string) => {
    return true;
  };

  // Style. I want it to sound like a conversation between two people. The AI would be direct and inquisitive. 

  // Maybe for the first couple back-and-forths, we can use basic chat conversation.
    // We can add a system prompt that says "You're a career councilor"
    // We can also add a system prompt that says "You're a career councilor. You're trying to understand this person by asking questions, so you can extract the traits a career would need to have or not(?)."
    // We can have a list of stock followup questions. We can tell them to ask a tweaked version of a stock question, or just a raw stock question.
    // The followup questions should be organic. 
  
  // The AI should be persistent.

  // ———
  // The problem with assessing confidence level is that you can have a bad answer that is still confident.

  // EX:
    // Q: Would you rather be an archeologist or a doctor?
    // A: Archeologist because I like exploration.
    // This answer isn't satisfying, but I'm not sure why.

  // So maybe it's not specific enough. Like confident in what? What are we trying to measure? Is it now much new information we learn about the person? No because we can learn something that reinforces something we already know. That's new info, but not a new insight, but it moves us forward.

  // So what does reinforcing a insight you already knew and generating a new insight have in common? I think it's helping you understand the requirements of a career. You're trying to find the traits you need in a career. What do you need? What are the disqualifiers?
  // ———

  // ———
  // Maybe a shortcut is to stock a few good questions so I can whip them out and see if they're good.
    // EX: Why didn't you choose the other career? What about it made it not tickle your fancy?
  // ———
  
  // ———
  // Lol, maybe I just always ignore the first answer. Like the first answer never matters because it's always shit. I should just use the answer as a direction for the next question so you can probe further. 
  // Even in the case that someone gives and exellent, 
  // ———

  // What if I always generated the insights, but with a confidence interval on each one?
  // Then, I'd only offer up an insight if one or more insights met the confidence threshold.
    // Btw, I think this is the process I go through in my head anyways. Based on what I hear
    // What really happens first when I hear a reason, before I start extracting insights, I assess the quality of the answer to see if it's even worth extracting insights from. I think I do this by seeing if the answer is based on the content of the question rather than their intrinsic answers. 
      // A big trap is trying to get insights from a bad answer — you'll just get a shitty insight.
      // It's hard to tell if an insight is shitty, but it's easier to tell if an answer is shitty, given a question.
    // 💡 I don't think I ever reprompt less than 2 or three times
      // For as long as I've done this, I've never gotten a satisfying answer on the first go.
      // 💡 I could hack this by only asking why 5 times.  
  // That way, I could condense multiple OpenAI calls into one.

  if (isThisAnswerShitty) {
    // reprompt
  }

  const insightsFromSelectedCareer = await openai.chat.completions.create({
    messages: [{
      role: 'user',
      content: insightsFromSelectedCareerPrompt(careers, selectedCareer, reason)
    }],
    model: 'gpt-3.5-turbo',
  });
  // only accept insights that meet a certain confidence threshold


  

  console.log(insightsFromSelectedCareer.choices);

  // mutate data
  // revalidate cache
};

export { careerSubmit };