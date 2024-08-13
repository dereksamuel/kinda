import { CardContainer } from "@/styled-components/Module/layout";
import Image from "next/image";

const Card = ({ src, children, rect }) => {
  return <CardContainer $rect={rect}>
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <Image src={src} alt="Avatar" width={270} height={300} />
      </div>
      <div className="flip-card-back">
        <div className="circle">{children}</div>
      </div>
    </div>
  </CardContainer>;
};

export default Card;
