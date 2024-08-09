import { MainHeader, MenuItem, MenuList } from "@/styled-components/layout";
import { Button } from "@/styled-components/inputOutput";
import KindaLogo from "@/assets/images/kinda_logo.webp";

import Image from "next/image";

const Menu = () => {
  return (
    <MainHeader>
      <Image src={KindaLogo} alt="logo" width={120} height={70} />
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>Módulos</MenuItem>
        <MenuItem>Kiosco</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Nosotros</MenuItem>
        <MenuItem>
          <Button $variant="primary">Contactanos</Button>
        </MenuItem>
      </MenuList>
    </MainHeader>
  );
};

export default Menu;
