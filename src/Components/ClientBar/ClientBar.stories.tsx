import ClientBar from "./ClientBar";
import LogoBZgA from "../../../lib/Icons/Clients/LogoBZgA.svg";
import LogoDCSO from "../../../lib/Icons/Clients/LogoDCSO.svg";
import LogoEWE from "../../../lib/Icons/Clients/LogoEWE.svg";
import LogoHagloefs from "../../../lib/Icons/Clients/LogoHagloefs.svg";
import LogoMSC from "../../../lib/Icons/Clients/LogoMSC.png";
import LogoNB from "../../../lib/Icons/Clients/LogoNB.svg";
import LogoNike from "../../../lib/Icons/Clients/LogoNike.svg";

export default {
  component: ClientBar,
  title: "Components/ClientBar",
};

export const Default = () => (
  <ClientBar
    urls={[LogoNB, LogoNike, LogoHagloefs, LogoEWE, LogoBZgA, LogoDCSO]}
  />
);
