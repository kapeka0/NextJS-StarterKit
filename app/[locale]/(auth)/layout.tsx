import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import AuthNavbar from "./_components/AuthNavbar";

type Props = {
  readonly children: React.ReactNode;
};

async function AuthLayout({ children }: Props) {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center h-screen p-5  text-pretty">
      <AuthNavbar />
      {children}
    </MaxWidthWrapper>
  );
}

export default AuthLayout;
