import React from 'react';
import styled from 'styled-components';

type indexType = {
  index: number;
};

const calculTopDivider = (index: number, cardsPerRow: number): string => {
  if (index === 0) {
    return '60rem';
  } else if ((index + 1) % cardsPerRow === 0) {
    const calculPositionFromTop = 65 * ((index + 1) / cardsPerRow) - 5; // 65 is equal to card total height, 5 equal to one-half of card margin-bottom
    return calculPositionFromTop + 'rem';
  }
};

const calculTopDividerMobile = (index: number, cardsPerRow: number): string => {
  if (index === 0) {
    return '50rem';
  } else if ((index + 1) % cardsPerRow === 0) {
    const calculPositionFromTop = 55 * ((index + 1) / cardsPerRow) - 5; // 65 is equal to card total height, 5 equal to one-half of card margin-bottom
    return calculPositionFromTop + 'rem';
  }
};

const showDivider = (index: number, cardsPerRow: number): string =>
  index === 0 || (index + 1) % cardsPerRow === 0 ? 'block' : 'none';

const RectDivider = styled.rect``;
const SvgDivider = styled.svg`
  position: absolute;
  display: ${({ index }) => showDivider(index, 5)};
  top: ${({ index }) => calculTopDivider(index, 5)};
  @media (min-width: 1020px) and (max-width: 1269px) {
    display: ${({ index }) => showDivider(index, 4)};
    top: ${({ index }) => calculTopDivider(index, 4)};
  }
  @media (min-width: 770px) and (max-width: 1019px) {
    display: ${({ index }) => showDivider(index, 3)};
    top: ${({ index }) => calculTopDivider(index, 3)};
  }
  @media (min-width: 0px) and (max-width: 769px) {
    display: ${({ index }) => showDivider(index, 1)};
    top: ${({ index }) => calculTopDividerMobile(index, 1)};
    width: 20rem;
  }
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  :last-of-type {
    display: none;
  }
`;
const MentorDivider: React.FC<indexType> = ({ index }) => (
  <SvgDivider
    width="743"
    height="5"
    viewBox="0 0 743 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    index={index}
  >
    <RectDivider width="224.145" height="10" rx="2.5" fill="#E31B84" />
    <RectDivider x="257.352" width="224.145" height="10" rx="2.5" fill="#E31B84" />
    <RectDivider x="518.855" width="224.145" height="10" rx="2.5" fill="#E31B84" />
  </SvgDivider>
);

export default MentorDivider;
