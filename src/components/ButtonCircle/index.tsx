import { Button, ButtonCircleStyled, FillButton } from './styled';
import { ButtonCircleProps } from './props';

export function ButtonCircle({ children, path }: ButtonCircleProps) {
  return (
    <ButtonCircleStyled>
      <FillButton>
        <Button to={path}>{children}</Button>
      </FillButton>
    </ButtonCircleStyled>
  );
}
