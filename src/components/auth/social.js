import Image from "next/image";
import Google from "../../../public/assets/icons/Auth/google.svg";
import Facebook from "../../../public/assets/icons/Auth/Facebook.svg";
import Apple from "../../../public/assets/icons/Auth/Apple.svg";
export default function SocialLoginButtons() {
  return (
    <div className="flex justify-center space-x-4 my-4 gap-3 ">
      <button aria-label="Sign in with Google" className="social-btn">
        <Image src={Google} alt="Google icon" height={40} width={40} />
      </button>
      <button aria-label="Sign in with Facebook" className="social-btn">
        <Image src={Facebook} alt="Facebook icon"  height={40} width={40} />
      </button>
      <button aria-label="Sign in with Apple" className="social-btn">
        <Image src={Apple} alt="Apple icon"  height={40} width={40} />
      </button>
    </div>
  );
}
