import styled from 'styled-components';

// export const Span = styled.span`
// color: blue;
// `

// export const Paragraph = styled.p`
//   color: green;
//   background-color: yellow;
//   font-size: 16px;
//   border: 1px solid orange;

//   &:hover {
//     background-color: palegreen;
//   }

//   &:hover ${Span} {
//     color: tomato;
//   }

// `;

export const Paragraph = styled.p`
  color: green;
  background-color: yellow;
  font-size: 16px;
  border: 1px solid orange;

  &:hover {
    background-color: palegreen;
  }
`;

export const Span = styled.span`
  color: ${({isRed}) => isRed ? 'red' : 'blue'};

  ${Paragraph}:hover & {
    color: tomato;
  }
`;

export const Title = styled.h3`
color: ${(props) => props.theme.colors.primary};
`