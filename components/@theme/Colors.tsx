import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import { Props } from './types';

import GradientComponent from 'components/Gradient';

const Colors: React.FC<Props> = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <div></div>

          <h1>Brand Color</h1>
          <ColorBox>
            <Color color={theme.color.PRIMARY}>
              <div />
              <p>PRIMARY</p>
              <p>{theme.color.PRIMARY}</p>
            </Color>
            <Color color={theme.color.SECONDARY}>
              <div />
              <p>SECONDARY</p>
              <p>{theme.color.SECONDARY}</p>
            </Color>
            <Color color={theme.color.TERTIARY}>
              <div />
              <p>TERTIARY</p>
              <p>{theme.color.TERTIARY}</p>
            </Color>
            <Color color={theme.color.POINT}>
              <div />
              <p>POINT</p>
              <p>{theme.color.POINT}</p>
            </Color>
          </ColorBox>
          <br />
          <h1>Sub Color</h1>
          <ColorBox>
            <Color color={theme.color.PRIMARYSUB}>
              <div />
              <p>PRIMARYSUB</p>
              <p>{theme.color.PRIMARYSUB}</p>
            </Color>
            <Color color={theme.color.SECONDARYSUB}>
              <div />
              <p>SECONDARYSUB</p>
              <p>{theme.color.SECONDARYSUB}</p>
            </Color>
            <Color color={theme.color.TERTIARYSUB}>
              <div />
              <p>TERTIARYSUB</p>
              <p>{theme.color.TERTIARYSUB}</p>
            </Color>
            <Color color={theme.color.POINTSUB}>
              <div />
              <p>POINTSUB</p>
              <p>{theme.color.POINTSUB}</p>
            </Color>
          </ColorBox>
          <br />
          <h1>Gray Scale</h1>
          <ColorBox>
            <Color color={theme.color.BLACK}>
              <div />
              <p>BLACK</p>
              <p>{theme.color.BLACK}</p>
            </Color>
            <Color color={theme.color.GRAY5}>
              <div />
              <p>GRAY5</p>
              <p>{theme.color.GRAY5}</p>
            </Color>
            <Color color={theme.color.GRAY4}>
              <div />
              <p>GRAY4</p>
              <p>{theme.color.GRAY4}</p>
            </Color>
            <Color color={theme.color.GRAY3}>
              <div />
              <p>GRAY3</p>
              <p>{theme.color.GRAY3}</p>
            </Color>
            <Color color={theme.color.GRAY2}>
              <div />
              <p>GRAY2</p>
              <p>{theme.color.GRAY2}</p>
            </Color>
            <Color color={theme.color.GRAY1}>
              <div />
              <p>GRAY1</p>
              <p>{theme.color.GRAY1}</p>
            </Color>
            <Color color={theme.color.GRAY0}>
              <div />
              <p>GRAY0</p>
              <p>{theme.color.GRAY0}</p>
            </Color>
            <Color color={theme.color.WHITE}>
              <div />
              <p>WHITE</p>
              <p>{theme.color.WHITE}</p>
            </Color>
          </ColorBox>
          <br />
          <h1>Alert Color</h1>
          <ColorBox>
            <Color color={theme.color.WARNING}>
              <div />
              <p>WARNING</p>
              <p>{theme.color.WARNING}</p>
            </Color>
            <Color color={theme.color.SUCCESS}>
              <div />
              <p>SUCCESS / INFO</p>
              <p>{theme.color.SUCCESS}</p>
            </Color>
          </ColorBox>
          <br />
          <GradientWrap>
            <div>
              <h1>Gradient (with GradientComponent)</h1>
              <GradientColorBox>
                <GradientComponent
                  first={theme.color.PRIMARY}
                  second={theme.color.GRAY0}
                  position="to right"
                />
                <>
                  <div />
                  <p>Custom: </p>
                  <p>
                    right, {theme.color.PRIMARY}, {theme.color.GRAY0}
                  </p>
                </>
              </GradientColorBox>
            </div>
            <div>
              <h1>Gradient (with theme props)</h1>
              <GradientBox />
              <div style={{ marginTop: '10px' }}>GRADIENT0</div>
            </div>
          </GradientWrap>
        </>
      )}
    </ThemeConsumer>
  );
};

export default Colors;

interface styleProps {
  color: string;
}

const ColorBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GradientColorBox = styled(ColorBox)`
  width: 300px;
  height: 100px;
  > div {
    &:first-child {
      margin-bottom: 10px;
    }
  }
`;

const Color = styled.div<styleProps>`
  margin-bottom: 10px;
  > div {
    border-radius: 4px;
    width: 100px;
    height: 100px;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: ${(props) => props.color};
  }
  > p {
    :nth-of-type(1) {
      margin: 0px;
    }
    :nth-of-type(2) {
      margin: 0px;
      color: ${(props) => props.theme.color.GRAY5};
    }
  }
`;

const GradientWrap = styled.div`
  display: flex;

  > div {
    margin-right: 10px;
  }
`;

const GradientBox = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 5px;
  background: ${(props) => props.theme.color.GRADIENT0};
`;
