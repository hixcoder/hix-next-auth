"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export async function login(values: z.infer<typeof LoginSchema>) {
  console.log(values);
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  return { success: "Email sent!" };
}
