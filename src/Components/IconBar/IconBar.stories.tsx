import IconBar from "./IconBar";
import LogoBZgA from "../../../lib/Icons/Clients/LogoBZgA.svg";
import LogoDCSO from "../../../lib/Icons/Clients/LogoDCSO.svg";
import LogoEWE from "../../../lib/Icons/Clients/LogoEWE.svg";
import LogoHagloefs from "../../../lib/Icons/Clients/LogoHagloefs.svg";
import LogoNB from "../../../lib/Icons/Clients/LogoNB.svg";
import LogoNike from "../../../lib/Icons/Clients/LogoNike.svg";

export default {
  component: IconBar,
  title: "Components/IconBar",
};

export const Default = () => (
  <IconBar
    headline="Clients"
    urls={[LogoNB, LogoNike, LogoHagloefs, LogoEWE, LogoBZgA, LogoDCSO]}
  />
);
