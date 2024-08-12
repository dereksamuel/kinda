import { PartnersContainer } from "@/styled-components/Home/layout";

import PartnersSrc from "@/assets/images/Home/partners.png";
import Image from "next/image";

const Partners = () => {
  return (
    <PartnersContainer>
      <Image src={PartnersSrc} alt="partners" width={1250} height={420} />
    </PartnersContainer>
  );
};

export default Partners;
