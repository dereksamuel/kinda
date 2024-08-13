import { ImgStepsContainer } from "@/styled-components/Module/layout";

const ImgSteps = ({ src, children, isSecondary }) => {
  return (
    <ImgStepsContainer $src={src}>
      <div className="content">
        <h3 className="Title">TURNOS SALUD</h3>
        <p className="small"><small class={isSecondary && 'isSecondarySmall'}>Kinda es mucho más que un sistema de turnos convencional</small></p>
        {children}
      </div>
    </ImgStepsContainer>
  );
};

export default ImgSteps;
