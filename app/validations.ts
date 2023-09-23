import * as z from "zod";

const careerSchema = z.object({
  careers: z.tuple([z.string(), z.string()]),
  selectedCareer: z.string(),
  reason: z
    .string()
    .min(10, {
      message: "Must be at least 10 characters",
    })
});

export { careerSchema };