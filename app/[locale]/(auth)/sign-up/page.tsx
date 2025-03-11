import Image from "next/image";
import { useTranslations } from "next-intl";

import AnimatedUpEntrance from "@/components/ui/framer/AnimatedUpEntrance";
import { Link } from "@/i18n/routing";
import SignUpForm from "../_components/SignUpForm";

function SignUpPage() {
  const tAuth = useTranslations("Auth");

  return (
    <div className="flex w-full h-full flex-col justify-center items-center space-y-5">
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        <AnimatedUpEntrance delay={0.2} duration={0.4}>
          <Image alt="Appname" className="shrink-0" height={80} src="/images/logos/logo.svg" width={80} />
        </AnimatedUpEntrance>

        <AnimatedUpEntrance delay={0} duration={0.3}>
          <h1 className="text-3xl font-extrabold">{tAuth("join")}</h1>
        </AnimatedUpEntrance>

        <AnimatedUpEntrance delay={0} duration={0.4}>
          <p className="text-sm text-muted-foreground">{tAuth("joinMessage")}</p>
        </AnimatedUpEntrance>
      </div>
      <SignUpForm />
      <p className="text-sm text-muted-foreground text-center">
        {tAuth("alreadyAccount")}{" "}
        <Link className="cursor-pointer text-primary" href="/sign-in">
          {tAuth("signIn")}
        </Link>
      </p>
    </div>
  );
}

export default SignUpPage;
