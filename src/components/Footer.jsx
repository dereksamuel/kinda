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
      <BlueFooterContainer>
        <div className="box-footer">
          <p><strong>Teléfono</strong></p>
          <ul className="list">
            <li><strong>Colombia:</strong> +57 (1) 236 0488</li>
            <li><strong>Perú:</strong> +51 981 515 131 / +51 1 368 5167</li>
            <li><strong>USA:</strong> +57 313 853 5694</li>
          </ul>
        </div>
        <div className="box-footer">
          <p><strong>Dirección</strong></p>
          <ul className="list">
            <li><strong>Colombia:</strong> Calle 97Bis 19-20 Oficina 602, Bogotá.</li>
            <li><strong>Perú:</strong> Jr. Cruz del Sur 140 - 154, Oficina 907, Surco, Lima.</li>
            <li><strong>USA:</strong> 5599 W Crossville Rd Suite 125, Roswell, GA.</li>
          </ul>
        </div>
      </BlueFooterContainer>
    </>
  );
};

export default Footer;