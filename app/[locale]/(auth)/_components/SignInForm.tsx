"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeClosed, EyeIcon, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ShinyButton } from "@/components/ui/shiny-button";
import { sign0Auth, signIn } from "@/data/actions/user";
import { debugLog } from "@/lib/utils/development";
import GoogleButton from "./GoogleButton";

function SignInForm() {
  const tAuth = useTranslations("Auth");
  const tError = useTranslations("Auth.errors");
  const [showPassword, setshowPassword] = useState(false);
  const { execute, isPending, result } = useAction(signIn, {
    onError: (error) => {
      console.log("Error a", error);
      toast.error(tError("unexpected"));
    },
    onSuccess: (data) => {
      console.log("Data", data);
      toast.success(tAuth("signUpSuccess"));
    },
  });
  useEffect(() => {
    console.log(result);
  }, [result]);

  const formSchema = z.object({
    email: z.string().email({
      message: tAuth("invalidEmail"),
    }),
    password: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    execute(data);
  };
  const { execute: executeOAuth, isPending: isOAuthPending } = useAction(sign0Auth, {
    onError: (error) => {
      console.log("Error", error);
      toast.error(tError("unexpected"));
    },
    onSuccess: (data) => {
      debugLog("Data", data);
    },
  });

  const handleGoogle = async () => {
    executeOAuth({
      provider: "google",
      redirectUrl: `/clients`,
    });
  };
  return (
    <div className="w-full max-w-md space-y-3">
      <Form {...form}>
        <form className="space-y-3 w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-sm text-muted-foreground font-normal">{tAuth("email")}</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending || isOAuthPending}
                    placeholder="arnold@schwarzenegger.com"
                    {...field}
                    className="placeholder:text-muted-foreground/50"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-0 relative">
                <FormLabel className="text-sm text-muted-foreground font-normal">{tAuth("password")}</FormLabel>
                <FormControl className="">
                  <div className="relative">
                    <Input
                      disabled={isPending || isOAuthPending}
                      placeholder={tAuth("passwordPlaceholder")}
                      {...field}
                      className="placeholder:text-muted-foreground/50"
                      type={showPassword ? "text" : "password"}
                    />
                    <span
                      className="absolute right-1 top-1/2   cursor-pointer text-muted-foreground"
                      onClick={() => setshowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeClosed className="absolute right-2 top-1/2 -translate-y-1/2 size-5" />
                      ) : (
                        <EyeIcon className="absolute right-2 top-1/2 -translate-y-1/2 size-5" />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
                {result?.validationErrors ? <FormMessage>{tAuth("loginError")}</FormMessage> : null}
              </FormItem>
            )}
          />
          <ShinyButton className="w-full" disabled={isPending || isOAuthPending} type="submit">
            {!isPending || isOAuthPending ? tAuth("signIn") : <Loader2 className="size-4 animate-spin" />}
          </ShinyButton>
        </form>
      </Form>
      <div className="flex w-full justify-center items-center">
        <Separator className="w-full   " />
        <span className="text-muted-foreground px-3 shrink-0">{tAuth("or")}</span>
        <Separator className="w-full " />
      </div>
      <GoogleButton callback={handleGoogle} disabled={isPending || isOAuthPending} />
    </div>
  );
}

export default SignInForm;
