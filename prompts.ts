export const insightsFromSelectedCareerPrompt = (careers: [string, string], selectedCareer: string, reason: string) => `
    I'm helping someone choose a career. They are choosing between ${careers[0]} and ${careers[1]}. They chose ${selectedCareer} because "${reason}".

    The exercise is designed to tease out insights about someone. We'll give this person their insights to help them understand themselves so they can pick careers that suit them.
    
    Given that they chose ${selectedCareer} and their reason, what are some insights about this person?

    Structure the insights as a list of bullet points. Each bullet should only be one sentence. Don't give more than 5 insights.
  `;