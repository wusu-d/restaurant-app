import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

const positionVariant = {
  top: "margin-top",
  right: "margin-right",
  bottom: "margin-bottom",
  left: "margin-left",
};

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

// const Spacer = styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;

const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

export default Spacer;
