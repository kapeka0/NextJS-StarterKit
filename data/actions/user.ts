"use server";

import { returnValidationErrors } from "next-safe-action";
import { z } from "zod";

import { actionClient } from "@/lib/safe-actions";

const signInSchema = z.object({
  email: z.string().email({}),
  password: z
    .string()
    .min(8)
    .max(20)
    .regex(/[a-z]/, {})
    .regex(/[A-Z]/, {})
    .regex(/[0-9]/, {})
    .regex(/[^a-zA-Z0-9]/, {}),
});

export const signIn = actionClient
  .metadata({
    actionName: "signIn",
  })
  .inputSchema(signInSchema)
  .action(async ({ parsedInput }) => {
    //Sign in logic
    const error = true;
    console.log(error);
    if (error) {
      returnValidationErrors(signInSchema, {
        _errors: ["loginError"],
      });
    }

    // TODO: Check if user have selected a plan
    return error;
  });

const signUpSchema = z.object({
  redirect: z.string().optional(),
  email: z.string().email({}),
  password: z
    .string()
    .min(8)
    .max(20)
    .regex(/[a-z]/, {})
    .regex(/[A-Z]/, {})
    .regex(/[0-9]/, {})
    .regex(/[^a-zA-Z0-9]/, {}),

  acceptTerms: z.boolean().refine((data) => data === true, {}),
});

export const signUp = actionClient
  .metadata({
    actionName: "signUp",
  })
  .inputSchema(signUpSchema)
  .action(async ({ parsedInput }) => {
    const error = true;
    const mailExists = true;
    if (error) {
      console.log(error);

      throw error;
    }
    if (mailExists) {
      returnValidationErrors(signUpSchema, {
        email: {
          _errors: ["mail_already_exists"],
        },
      });
    }
  });

export const resendEmail = actionClient
  .metadata({
    actionName: "resendEmail",
  })
  .inputSchema(z.object({ email: z.string().email() }))
  .action(async ({ parsedInput }) => {
    // Resend email logic

    const error = true;
    if (error) {
      throw new Error("Error sending email");
    }
  });

const OAuthSchema = z.object({
  provider: z.enum(["google"]),
  redirectUrl: z.string(),
});

export const sign0Auth = actionClient

  .metadata({
    actionName: "sign0Auth",
  })

  .inputSchema(OAuthSchema)

  .action(async ({ parsedInput }) => {
    // OAuth logic
    const error = true;

    if (error) {
      throw new Error("Error signing in with OAuth");
    }
  });

export const logOut = async () => {
  // Log out logic
  const error = true;
  if (error) {
    throw new Error("Error logging out");
  }
};
