import { BlueFooterContainer, FooterContainer, Links } from "@/styled-components/layout";
import KindaLogo from "@/assets/images/LogoType.png";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/styled-components/inputOutput";
import { Input, InputGroup } from "./InputGroup";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Image src={KindaLogo} alt="logo" width={220} height={110} />
        <form action="">
          <InputGroup label="¿Quieres conocer más?">
            <Input placeholder="Email" type="email" required />
            <Button $variant="primary" type="submit">Enviar</Button>
          </InputGroup>
        </form>
        <Links>
          <FaLinkedinIn size={35} color="#01B6FF" />
          <FaFacebookF size={35} color="#01B6FF" />
          <FaInstagram size={35} color="#01B6FF" />
        </Links>
        <p>© 2024 Kinda Salud</p>
      </FooterContainer>
      <BlueFooterContainer></BlueFooterContainer>
    </>
  );
};

export default Footer;