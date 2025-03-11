import LangToggle from "@/components/global/LangToggle";
import { ThemeToggle } from "@/components/global/ThemeToggle";

function AuthNavbar() {
  return (
    <div className="absolute top-0 right-0 flex items-center justify-end w-screen p-5 ">
      <div className="flex items-center gap-2 z-50">
        <ThemeToggle />
        <LangToggle />
      </div>
    </div>
  );
}

export default AuthNavbar;
