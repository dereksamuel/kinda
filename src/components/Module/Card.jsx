import { Button } from "@/styled-components/inputOutput";
import { CardContainer } from "@/styled-components/Module/layout";
import Image from "next/image";
import { useState } from "react";

const Card = ({ src, children, rect, idContainer }) => {
  const [viewMore, setViewMore] = useState(false);

  const handleViewMore = () => {
    const $el = document.getElementById(idContainer);
    $el?.classList.toggle("gradient");
    setViewMore(!viewMore);
  };

  return <CardContainer $rect={rect}>
    <div className="flip-card-inner">
      <Image src={src} alt="Avatar" width={270} height={300} />
      <div className="desc">
        {viewMore ? children : null}
        <Button $variant={viewMore ? "secondaryMistery" : "primary-white"} $colorText="white" onClick={handleViewMore}>
          {viewMore ? "Ver menos" : "Ver más"}
        </Button>
      </div>
    </div>
  </CardContainer>;
};

export default Card;
