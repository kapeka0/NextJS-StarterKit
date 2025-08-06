import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

import { debugLog } from "./utils/development";

export const actionClient = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      //For logging in the SIEM
      actionName: z.string(),
    });
  },
  handleServerError(e, utils) {
    //For logging in the SIEM
    const { clientInput, metadata } = utils;
    //TODO: Log the error in the SIEM
    debugLog("Error occurred", {
      error: e,
      clientInput,
      metadata,
    });

    return e.message;
  },
}).use(async ({ next, clientInput, metadata }) => {
  if (process.env.NODE_ENV === "development") {
    console.log("[i] LOGGING MIDDLEWARE");

    const startTime = performance.now();

    // Here we await the action execution.
    const result = await next();

    const endTime = performance.now();

    console.log("Result ->", result);
    console.log("Client input ->", clientInput);
    console.log("Metadata ->", metadata);
    console.log("Action execution took", endTime - startTime, "ms");

    return result;
  } else {
    // In production, just execute the action without logging
    return await next();
  }
});

//Extended base one
export const authActionClient = actionClient.use(async ({ next }) => {
  //Check here if the user is logged in
  const user = false;
  const userError = false;
  if (userError) {
    console.log("User error", { cause: userError });
    throw new Error("User error", { cause: userError });
  }
  if (!user) {
    console.log("User not logged in");
    throw new Error("User not logged in");
  }
  return await next({
    ctx: {
      //  userId: user.id,
    },
  });
});
