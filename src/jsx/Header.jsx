import { styled } from "styled-components";
import color from "../style/color";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid ${color.gray[200]};
`;

const BlueLogo = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #3b82f6;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
  z-index: 4;
`;

const GreenLogo = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${color.pointgreen[1000]};
  border-radius: 9999px;
  margin-left: -0.5rem;
  transition: transform 0.3s ease;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover ${BlueLogo} {
    transform: rotate(90deg);
  }

  &:hover ${GreenLogo} {
    transform: scale(0.9);
  }
`;

function Header({ onLogoClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      navigate("/");
    }
  };

  return (
    <StyledHeader>
      <LogoContainer onClick={handleClick}>
        <BlueLogo />
        <GreenLogo />
      </LogoContainer>
    </StyledHeader>
  );
}

export default Header;
