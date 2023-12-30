import * as z from "zod";

// ============================================================
// Auth
// ============================================================
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});


// ============================================================
// Doc CRUD
// ============================================================
export const CreateDocValidation = z.object({
  creator_id: z.string(),
  doc_title: z.string().min(3, { message: "Documet title must be at lease 3 chars" }),
  is_public: z.boolean(),
});
