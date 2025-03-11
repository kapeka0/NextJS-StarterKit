"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { LottieRefCurrentProps } from "lottie-react";

const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

type Props = {
  animationData: any;
  className?: string;
  speed?: number;
};

function LottieAnimation({ animationData, className, speed = 1 }: Props) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  return <DynamicLottie animationData={animationData} loop={true} className={className} lottieRef={lottieRef} />;
}

export default LottieAnimation;
