import { MainHeader, MenuItem, MenuList } from "@/styled-components/layout";
import { Button } from "@/styled-components/inputOutput";
import KindaLogo from "@/assets/images/LogoType.png";

import { useRouter } from 'next/router'
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const router = useRouter();

  return (
    <MainHeader>
      <Image src={KindaLogo} alt="logo" width={100} height={50} />
      <MenuList>
        <MenuItem $active={router.pathname === "/"} $variant="radiant"><Link href="/">Home</Link></MenuItem>
        <MenuItem $active={router.pathname === "/modulos"} $variant="secondaryMistery"><Link href="/modulos">Módulos</Link></MenuItem>
        <MenuItem $active={router.pathname === "/kiosco"} $variant="secondaryRadiant"><Link href="/kiosco">Kiosco</Link></MenuItem>
        <MenuItem $active={router.pathname === "/blog"} $variant="secondaryMistery"><Link href="/blog">Blog</Link></MenuItem>
        <MenuItem $active={router.pathname === "/nosotros"} $variant="secondaryMistery"><Link href="/nosotros">Nosotros</Link></MenuItem>
        <MenuItem $active={router.pathname === "/contacto"} $variant="secondaryMistery">
          <Button $variant="primary">Contactanos</Button>
        </MenuItem>
      </MenuList>
    </MainHeader>
  );
};

export default Menu;
