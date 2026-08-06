import { Link } from "react-router-dom";
import logoDark from "@/assets/braingig-logo-dark.png";
import logoLight from "@/assets/braingig-logo-light.png";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="inline-flex items-center" aria-label="BrainGig — home">
    <img
      src={light ? logoLight : logoDark}
      alt="BrainGig"
      className="h-7 w-auto sm:h-8"
      width={160}
      height={50}
    />
  </Link>
);

export default Logo;
