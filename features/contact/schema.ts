import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Can't be empty"),
  email: z.string().min(1, "Can't be empty").email("Please use a valid email address"),
  phone: z.string().min(1, "Can't be empty"),
  message: z.string().min(1, "Can't be empty"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
