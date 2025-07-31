import { createEnv } from "@t3-oss/env-nextjs";

export const client_env = createEnv({
  client: {
    // NEXT_PUBLIC variables that should be accessible in the client-side code:
    //  NEXT_PUBLIC_SUPABASE_URL: z.string(),
  },
  runtimeEnv: {
    //NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  },
});
