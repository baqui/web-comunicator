import styled from 'styled-components';

export const BasicBurger = styled.button`
  display: block;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: ${props => props.styleTheme.width};
  height: ${props => props.styleTheme.height};
  font-size: 0;
  text-indent: -9999px;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  border: none;
  cursor: pointer;
  transition: background ${props => props.styleTheme.transition};

  &:focus {
    outline: none;
  }

  > span {
    display: block;
    position: absolute;
    top: ${props => `calc( (${props.styleTheme.height} / 2) - (${props.styleTheme.barThickness} / 2))`};
    left: ${props => props.styleTheme.pad};
    right: ${props => props.styleTheme.pad};
    height: ${props => props.styleTheme.barThickness};
    background: ${props => props.styleTheme.barsColor};

    &::before, &::after {
      position: absolute;
      display: block;
      left: 0;
      width: 100%;
      height: ${props => props.styleTheme.barThickness};
      background-color: ${props => props.styleTheme.barsColor};
      content: "";
    }

    &::before {
      top: ${props => `calc( -${props.styleTheme.barThickness} - ${props.styleTheme.barSpace})`};
    }

    &::after {
      bottom: ${props => `calc( -${props.styleTheme.barThickness} - ${props.styleTheme.barSpace})`};
    }
  }
`;


export const AnimatedBurger = BasicBurger.extend`
  background-color: ${props => props.styleTheme.background};
  span {
    transition: background ${props => props.styleTheme.transition} ${props => props.styleTheme.transition};

    &::before, &::after {
      transition-duration: ${props => props.styleTheme.transition}, ${props => props.styleTheme.transition};
      transition-delay: ${props => props.styleTheme.transition}, ${props => props.styleTheme.transition};
    }

    &::before {
      transition-property: top, transform;
    }

    &::after {
      transition-property: bottom, transform;
    }
  }

  ${props => props.isActive && `
    background-color: ${props => props.styleTheme.activeBackground};
    span {
      background: none;

      &::before {
        top: 0;
        transform: rotate(45deg);
      }

      &::after {
        bottom: 0;
        transform: rotate(-45deg);
      }

      &::before, &::after {
        transition-delay: ${props => props.styleTheme.transition}, ${props => props.styleTheme.transition};
      }
    }
  `}
`;
