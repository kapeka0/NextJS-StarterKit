import { useTranslations } from "next-intl";

import BuisnessMessage from "@/components/global/BuisnessMessage";
import LottieAnimation from "@/components/global/LottieAnimation";
import AnimatedUpEntrance from "@/components/ui/framer/AnimatedUpEntrance";
import MailAnimation from "../../_components/mail.json";

const SuccessSignup = () => {
  const t = useTranslations("Auth");
  return (
    <div className="w-full flex justify-center items-center flex-col space-y-8">
      <AnimatedUpEntrance>
        <BuisnessMessage title={t("signUpSuccess")} message={t("emailSent")}>
          <LottieAnimation animationData={MailAnimation} className="w-48 h-48" speed={0.7} />
        </BuisnessMessage>
      </AnimatedUpEntrance>
    </div>
  );
};

export default SuccessSignup;
