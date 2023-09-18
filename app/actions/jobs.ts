"use server";

import * as z from "zod";
// import AI sdk

const schema = z.object({
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

async function submit(data: z.infer<typeof schema>) {

  console.log(data);

  // mutate data
  // revalidate cache
}

export { schema, submit };