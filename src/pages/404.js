import NotFoundSrc from "@/assets/images/ErrorNotFound.gif";
import { Button } from "@/styled-components/inputOutput";
import { ImageNotFoundContainer, ContainerCenter } from "@/styled-components/layout";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  const onGoHome = () => {
    router.push('/');
  }
  return (
    <ContainerCenter>
      <ImageNotFoundContainer src={NotFoundSrc} alt="404" />
      <Button $variant="primary-white" onClick={onGoHome}>Volver al home</Button>
    </ContainerCenter>
  );
}
