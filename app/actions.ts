"use server";

import * as z from "zod";
import { jobSchema } from "./validations";

async function jobSubmit(data: z.infer<typeof jobSchema>) {
  console.log(data);

  // mutate data
  // revalidate cache
};

export { jobSubmit };