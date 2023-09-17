import * as z from "zod";

async function onSubmit(data: z.infer<typeof formSchema>) {
  "use server";

  // mutate data
  // revalidate cache
}