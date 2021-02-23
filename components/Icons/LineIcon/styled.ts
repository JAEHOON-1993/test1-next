import styled, { css } from 'styled-components';

interface style {
  colored?: string;
}

// 기본 element는 모두 path입니다! 주의해서 사용해주세요
export const FillProps = styled.path<style>`
  fill: ${(props) => props.theme.color.ICON};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;

export const StrokeProps = styled.path<style>`
  stroke: ${(props) => props.theme.color.ICON};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
    `}
`;

export const FillStrokeProps = styled.path<style>`
  fill: ${(props) => props.theme.color.ICON};
  stroke: ${(props) => props.theme.color.ICON};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
      stroke: ${props.colored};
    `}
`;
