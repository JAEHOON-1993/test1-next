import React from 'react';
import styled, { css, ThemeConsumer } from 'styled-components';

import { Props } from './types';

import { light, dark } from 'layout/theme';
import GradientComponent from 'components/Gradient';

const Colors: React.FC<Props> = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Warpper>
          <FlexBox>
            <div>
              <Title>BRAND COLORS</Title>
              <ColorBox>
                <Color>
                  <ColorText>PRIMARY</ColorText>
                  <div className="text">
                    <p>{light.color.PRIMARY}</p>
                  </div>
                  <div style={{ backgroundColor: light.color.PRIMARY }} />
                  <div style={{ backgroundColor: dark.color.PRIMARY }} />
                  <div className="text">
                    <p>{dark.color.PRIMARY}</p>
                  </div>
                </Color>
                <Color>
                  <ColorText>SECONDARY</ColorText>
                  <div className="text">
                    <p>{light.color.SECONDARY}</p>
                  </div>
                  <div style={{ backgroundColor: light.color.SECONDARY }} />
                  <div style={{ backgroundColor: dark.color.SECONDARY }} />
                  <div className="text">
                    <p>{dark.color.SECONDARY}</p>
                  </div>
                </Color>
                <Color>
                  <ColorText>TERTIARY</ColorText>
                  <div className="text">
                    <p>{light.color.TERTIARY}</p>
                  </div>
                  <div style={{ backgroundColor: light.color.TERTIARY }} />
                  <div style={{ backgroundColor: dark.color.TERTIARY }} />
                  <div className="text">
                    <p>{dark.color.TERTIARY}</p>
                  </div>
                </Color>
              </ColorBox>
            </div>
            <div>
              <Title>BRAND SUB COLORS</Title>
              <ColorBox>
                <Color>
                  <ColorText>
                    PRIMARY
                    <br />
                    SUB
                  </ColorText>
                  <div className="text">
                    <p>{light.color.PRIMARYSUB}</p>
                  </div>
                  <div style={{ backgroundColor: light.color.PRIMARYSUB }} />
                  <div style={{ backgroundColor: dark.color.PRIMARYSUB }} />
                  <div className="text">
                    <p>{dark.color.PRIMARYSUB}</p>
                  </div>
                </Color>
                <Color>
                  <ColorText>
                    SECONDARY
                    <br />
                    SUB
                  </ColorText>
                  <div className="text">
                    <p>{light.color.SECONDARYSUB}</p>
                  </div>
                  <div style={{ backgroundColor: light.color.SECONDARYSUB }} />
                  <div style={{ backgroundColor: dark.color.SECONDARYSUB }} />
                  <div className="text">
                    <p>{dark.color.SECONDARYSUB}</p>
                  </div>
                </Color>
                <Color>
                  <ColorText>
                    TERTIARY
                    <br />
                    SUB
                  </ColorText>
                  <div className="text">
                    <p>{light.color.TERTIARYSUB}</p>
                  </div>
                  <div style={{ backgroundColor: light.color.TERTIARYSUB }} />
                  <div style={{ backgroundColor: dark.color.TERTIARYSUB }} />
                  <div className="text">
                    <p>{dark.color.TERTIARYSUB}</p>
                  </div>
                </Color>
              </ColorBox>
            </div>
          </FlexBox>

          <FlexBox>
            <div>
              <Title>POINT COLORS</Title>
              <ColorBox>
                <Color>
                  <ColorText>POINT</ColorText>
                  <div className="text">
                    <p>{light.color.POINT}</p>
                  </div>
                  <div style={{ backgroundColor: light.color.POINT }} />
                  <div style={{ backgroundColor: dark.color.POINT }} />
                  <div className="text">
                    <p>{dark.color.POINT}</p>
                  </div>
                </Color>
                <Color>
                  <ColorText>
                    POINT
                    <br />
                    SUB
                  </ColorText>
                  <div className="text">
                    <p>{light.color.POINTSUB}</p>
                  </div>
                  <div style={{ backgroundColor: light.color.POINTSUB }} />
                  <div style={{ backgroundColor: dark.color.POINTSUB }} />
                  <div className="text">
                    <p>{dark.color.POINTSUB}</p>
                  </div>
                </Color>
                <Color style={{ boxShadow: 'none' }} />
              </ColorBox>
            </div>
            <div>
              <Title>ALERT COLORS</Title>
              <ColorBox>
                <Color>
                  <ColorText>WARNING</ColorText>
                  <div className="text">
                    <p>{light.color.WARNING}</p>
                  </div>
                  <div style={{ backgroundColor: light.color.WARNING }} />
                  <div style={{ backgroundColor: dark.color.WARNING }} />
                  <div className="text">
                    <p>{dark.color.WARNING}</p>
                  </div>
                </Color>
                <Color>
                  <ColorText>WARNING SUB</ColorText>
                  <div className="text">
                    <p>{light.color.WARNINGSUB}</p>
                  </div>
                  <div style={{ backgroundColor: light.color.WARNINGSUB }} />
                  <div style={{ backgroundColor: dark.color.WARNINGSUB }} />
                  <div className="text">
                    <p>{dark.color.WARNINGSUB}</p>
                  </div>
                </Color>
                <Color>
                  <ColorText>SUCCESS</ColorText>
                  <div className="text">
                    <p>{light.color.SUCCESS}</p>
                  </div>
                  <div style={{ backgroundColor: light.color.SUCCESS }} />
                  <div style={{ backgroundColor: dark.color.SUCCESS }} />
                  <div className="text">
                    <p>{dark.color.SUCCESS}</p>
                  </div>
                </Color>
              </ColorBox>
            </div>
          </FlexBox>
          {/* GRADIENT */}
          <Title>GRADIENT</Title>
          <ColorBox>
            <GradientColor>
              <ColorText style={{ width: 210 }}>GRADIENT 0</ColorText>
              <div className="text">
                <p>{light.color.PRIMARY}</p>
                <p>{light.color.PRIMARYSUB}</p>
              </div>
              <GradientComponent
                style={{ borderRadius: 0 }}
                first={light.color.PRIMARY}
                second={light.color.PRIMARYSUB}
                position="to right"
              />
              <GradientComponent
                style={{ borderRadius: 0 }}
                first={dark.color.PRIMARY}
                second={dark.color.PRIMARYSUB}
                position="to right"
              />
              <div className="text">
                <p>{dark.color.PRIMARY}</p>
                <p>{dark.color.PRIMARYSUB}</p>
              </div>
            </GradientColor>

            <GradientColor>
              <ColorText style={{ width: 210 }}>GRADIENT 1</ColorText>
              <div className="text">
                <p>{light.color.GRADIENT_POINT_1}</p>
                <p>{light.color.PRIMARY}</p>
              </div>
              <GradientComponent
                style={{ borderRadius: 0 }}
                first={light.color.GRADIENT_POINT_1}
                second={light.color.PRIMARY}
                position="to right"
              />
              <GradientComponent
                style={{ borderRadius: 0 }}
                first={dark.color.GRADIENT_POINT_1}
                second={dark.color.PRIMARY}
                position="to right"
              />
              <div className="text">
                <p>{dark.color.GRADIENT_POINT_1}</p>
                <p>{dark.color.PRIMARY}</p>
              </div>
            </GradientColor>

            <GradientColor>
              <ColorText style={{ width: 210 }}>GRADIENT 2</ColorText>
              <div className="text">
                <p>{light.color.PRIMARY}</p>
                <p>{light.color.GRADIENT_POINT_2}</p>
              </div>
              <GradientComponent
                style={{ borderRadius: 0 }}
                first={light.color.PRIMARY}
                second={light.color.GRADIENT_POINT_2}
                position="to right"
              />
              <GradientComponent
                style={{ borderRadius: 0 }}
                first={dark.color.PRIMARY}
                second={dark.color.GRADIENT_POINT_2}
                position="to right"
              />
              <div className="text">
                <p>{dark.color.PRIMARY}</p>
                <p>{dark.color.GRADIENT_POINT_2}</p>
              </div>
            </GradientColor>
          </ColorBox>

          {/* GRAYSCALE */}
          <Title>GRAYSCALE</Title>
          <ColorBox>
            <Color>
              <ColorText>WHITE</ColorText>
              <div className="text">
                <p>{light.color.WHITE}</p>
              </div>
              <div style={{ backgroundColor: light.color.WHITE }} />
              <div style={{ backgroundColor: dark.color.WHITE }} />
              <div className="text">
                <p>{dark.color.WHITE}</p>
              </div>
            </Color>
            <Color>
              <ColorText>GRAY 0</ColorText>
              <div className="text">
                <p>{light.color.GRAY0}</p>
              </div>
              <div style={{ backgroundColor: light.color.GRAY0 }} />
              <div style={{ backgroundColor: dark.color.GRAY0 }} />
              <div className="text">
                <p>{dark.color.GRAY0}</p>
              </div>
            </Color>
            <Color>
              <ColorText>GRAY 1</ColorText>
              <div className="text">
                <p>{light.color.GRAY1}</p>
              </div>
              <div style={{ backgroundColor: light.color.GRAY1 }} />
              <div style={{ backgroundColor: dark.color.GRAY1 }} />
              <div className="text">
                <p>{dark.color.GRAY1}</p>
              </div>
            </Color>
            <Color>
              <ColorText>GRAY 2</ColorText>
              <div className="text">
                <p>{light.color.GRAY2}</p>
              </div>
              <div style={{ backgroundColor: light.color.GRAY2 }} />
              <div style={{ backgroundColor: dark.color.GRAY2 }} />
              <div className="text">
                <p>{dark.color.GRAY2}</p>
              </div>
            </Color>
            <Color>
              <ColorText>GRAY 3</ColorText>
              <div className="text">
                <p>{light.color.GRAY3}</p>
              </div>
              <div style={{ backgroundColor: light.color.GRAY3 }} />
              <div style={{ backgroundColor: dark.color.GRAY3 }} />
              <div className="text">
                <p>{dark.color.GRAY3}</p>
              </div>
            </Color>
            <Color>
              <ColorText>GRAY 4</ColorText>
              <div className="text">
                <p>{light.color.GRAY4}</p>
              </div>
              <div style={{ backgroundColor: light.color.GRAY4 }} />
              <div style={{ backgroundColor: dark.color.GRAY4 }} />
              <div className="text">
                <p>{dark.color.GRAY4}</p>
              </div>
            </Color>
            <Color>
              <ColorText>GRAY 5</ColorText>
              <div className="text">
                <p>{light.color.GRAY5}</p>
              </div>
              <div style={{ backgroundColor: light.color.GRAY5 }} />
              <div style={{ backgroundColor: dark.color.GRAY5 }} />
              <div className="text">
                <p>{dark.color.GRAY5}</p>
              </div>
            </Color>
            <Color>
              <ColorText>BLACK</ColorText>
              <div className="text">
                <p>{light.color.BLACK}</p>
              </div>
              <div style={{ backgroundColor: light.color.BLACK }} />
              <div style={{ backgroundColor: dark.color.BLACK }} />
              <div className="text">
                <p>{dark.color.BLACK}</p>
              </div>
            </Color>
          </ColorBox>
          <FlexBox>
            <div>
              <Title>BACKGROUND COLORS _ LIGHT MODE</Title>
              <BackgroundBox>
                <BackgroundColor type="light">
                  <div style={{ backgroundColor: light.background.PRIMARY }} />
                  <div className="text">
                    <p>{light.background.PRIMARY}</p>
                  </div>
                  <BackgroundText>PRIMARY</BackgroundText>
                </BackgroundColor>
                <BackgroundColor type="light">
                  <div
                    style={{ backgroundColor: light.background.SECONDARY }}
                  />
                  <div className="text">
                    <p>{light.background.SECONDARY}</p>
                  </div>
                  <BackgroundText>SECONDARY</BackgroundText>
                </BackgroundColor>
                <BackgroundColor type="light">
                  <div style={{ backgroundColor: light.background.TERTIARY }} />
                  <div className="text">
                    <p>{light.background.TERTIARY}</p>
                  </div>
                  <BackgroundText>TERTIARY</BackgroundText>
                </BackgroundColor>
              </BackgroundBox>
            </div>
            <div>
              <Title>BACKGROUND COLORS _ DARK MODE</Title>
              <BackgroundBox>
                <BackgroundColor type="dark">
                  <div style={{ backgroundColor: dark.background.PRIMARY }} />
                  <div className="text">
                    <p>{dark.background.PRIMARY}</p>
                  </div>
                  <BackgroundText>PRIMARY</BackgroundText>
                </BackgroundColor>
                <BackgroundColor type="dark">
                  <div style={{ backgroundColor: dark.background.SECONDARY }} />
                  <div className="text">
                    <p>{dark.background.SECONDARY}</p>
                  </div>
                  <BackgroundText>SECONDARY</BackgroundText>
                </BackgroundColor>
                <BackgroundColor type="dark">
                  <div style={{ backgroundColor: dark.background.TERTIARY }} />
                  <div className="text">
                    <p>{dark.background.TERTIARY}</p>
                  </div>
                  <BackgroundText>TERTIARY</BackgroundText>
                </BackgroundColor>
              </BackgroundBox>
            </div>
          </FlexBox>

          <FlexBox>
            <div>
              <Title>BACKGROUND COLORS _ LIGHT MODE</Title>
              <BackgroundBox>
                <BackgroundColor type="light">
                  <div style={{ backgroundColor: light.background.PRIMARY }} />
                  <div className="text">
                    <p>{light.background.PRIMARY}</p>
                  </div>
                  <BackgroundText>PRIMARY</BackgroundText>
                </BackgroundColor>
                <BackgroundColor type="light" style={{ boxShadow: 'none' }} />
                <BackgroundColor type="light" style={{ boxShadow: 'none' }} />
              </BackgroundBox>
            </div>
            <div>
              <Title>BACKGROUND COLORS _ DARK MODE</Title>
              <BackgroundBox>
                <BackgroundColor type="dark">
                  <div style={{ backgroundColor: dark.background.PRIMARY }} />
                  <div className="text">
                    <p>{dark.background.PRIMARY}</p>
                  </div>
                  <BackgroundText>PRIMARY</BackgroundText>
                </BackgroundColor>
                <BackgroundColor type="dark" style={{ boxShadow: 'none' }} />
                <BackgroundColor type="dark" style={{ boxShadow: 'none' }} />
              </BackgroundBox>
            </div>
          </FlexBox>
          <Title>DIM COLOR</Title>
          <BackgroundBox>
            <BackgroundColor type="light">
              <div
                style={{ backgroundColor: light.color.BLACK, opacity: 0.5 }}
              />
              <div className="text">
                <p>{light.color.BLACK}</p>
              </div>
              <BackgroundText>50%</BackgroundText>
            </BackgroundColor>
            <BackgroundColor type="light">
              <div
                style={{ backgroundColor: light.color.BLACK, opacity: 0.2 }}
              />
              <div className="text">
                <p>{light.color.BLACK}</p>
              </div>
              <BackgroundText>20%</BackgroundText>
            </BackgroundColor>
          </BackgroundBox>
          <Title>BUTTON TEXT COLOR</Title>
          <BackgroundBox>
            <BackgroundColor type="light">
              <div
                style={{ backgroundColor: light.color.BUTTON, opacity: 0.5 }}
              />
              <div className="text">
                <p>{light.color.BUTTON}</p>
              </div>
              <BackgroundText>BUTTON</BackgroundText>
            </BackgroundColor>
          </BackgroundBox>
          <div style={{ height: 100 }} />
        </Warpper>
      )}
    </ThemeConsumer>
  );
};

export default Colors;

const Warpper = styled.div`
  max-height: 500px;
  padding-bottom: 100px;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > div {
    :nth-of-type(1) {
      margin-right: 40px;
    }
  }
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;

  color: #bebebe;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;
const ColorBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 240px;

  align-items: center;

  margin-bottom: 40px;
  ::after {
    content: '';
    width: calc(100% + 40px);
    height: 120px;
    background-color: #363636;
    position: absolute;
    bottom: 0px;
    z-index: 0;
    margin-left: -20px;
  }
`;

const ColorText = styled.h2`
  position: absolute;
  text-align: center;
  width: 95px;
  top: 15px;
  font-size: 12px;
  font-weight: bold;
`;
const Color = styled.div`
  z-index: 1;
  width: 95px;
  height: 138px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.15);
  margin-right: 20px;
  .text {
    height: 26px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    > p {
      font-size: 12px;
    }
  }
  > div {
    width: 100%;
    height: 43px;
  }
`;

const GradientColor = styled.div`
  z-index: 1;
  width: 210px;
  height: 138px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.15);
  margin-right: 20px;
  .text {
    height: 26px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    > p {
      font-size: 12px;
    }
  }
  > div {
    width: 100%;
    height: 43px;
  }
`;

interface TypeProps {
  type: 'light' | 'dark';
}
const BackgroundBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 120px;

  align-items: center;

  margin-bottom: 80px;
`;

const BackgroundColor = styled.div<TypeProps>`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.15);
  margin-right: 20px;
  width: 95px;
  height: 104px;
  .text {
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    > p {
      font-size: 12px;
    }
  }
  > div {
    width: 95px;
    height: 78px;
  }

  ${(props) =>
    props.type === 'dark'
      ? css`
          .text {
            background-color: #444;
            > p {
              color: #fff;
            }
          }
        `
      : css`
          .text {
            background-color: #fff;
            > p {
              color: #000;
            }
          }
        `}
`;

const BackgroundText = styled.h2`
  position: absolute;
  text-align: center;
  width: 95px;
  bottom: -25px;
  font-size: 12px;
  font-weight: bold;
`;
