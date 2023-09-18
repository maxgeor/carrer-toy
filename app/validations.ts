import * as z from "zod";

const jobSchema = z.object({
  jobs: z.array(z.string()).min(2).max(2),
  selectedJob: z.string(),
  reason: z
    .string()
    .min(10, {
      message: "Must be at least 10 characters",
    })
    .max(1000, {
      message: "Must be less than 1000 characters",
    }),
});

export { jobSchema };