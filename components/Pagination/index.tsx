import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import * as T from 'components/Typography';

import PrevPageArrow from 'components/Icons/SystemIcon/PrevPageArrow';
import NextPageArrow from 'components/Icons/SystemIcon/NextPageArrow';

interface Props {
  count?: number;
}

const PageNumber: React.FC<Props> = ({ count = 100 }) => {
  const [click, setClick] = useState<number>(1);

  const prevClick = () => {
    setClick(click - 1);
  };
  const nextClick = () => {
    const b = click / 5.0001;
    setClick((Math.floor(b) + 1) * 5 + 1);
  };

  const handlePageCount = (pageNumber: any) => {
    setClick(pageNumber);
  };

  return (
    <>
      <Wrap>
        {click > 1 && <PrevPage onClick={() => prevClick()} />}
        {new Array(Math.ceil(count / 10)).fill(0).map((_, idx) => {
          const pageNumber = idx + 1;
          const b = click / 5.0001;
          const _b = pageNumber / 5.0001;

          if (Math.floor(b) < _b && Math.ceil(b) > _b) {
            return (
              <PageButton
                key={idx}
                onClick={() => handlePageCount(pageNumber)}
                isActive={click === pageNumber}
              >
                <T.Button>{pageNumber}</T.Button>
              </PageButton>
            );
          }
        })}
        {Math.ceil(count / 10) > 5 && <NextPage onClick={() => nextClick()} />}
      </Wrap>
    </>
  );
};

export default PageNumber;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 80px;
  padding-bottom: 90px;
  width: fit-content;
  margin: auto;
`;

const NextPage = styled(NextPageArrow)`
  cursor: pointer;
`;

const PrevPage = styled(PrevPageArrow)`
  cursor: pointer;
`;

interface styleProps {
  isActive?: boolean;
}

const PageButton = styled.button<styleProps>`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 15px;
  margin-left: 15px;
  ${(props) =>
    props.isActive &&
    css`
      color: ${(props) => props.theme.color.PRIMARY};
      text-decoration: underline;
    `}
  > p {
    font-weight: bold;
  }
`;
