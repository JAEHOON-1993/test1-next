import { Meta } from '@storybook/react/types-6-0';

import { Title } from 'components/Typography';

import { TRHeadBox, TRBodyBox, TableCell } from './table.styled';

import Table from './_fragments/Table';
import TableHead from './_fragments/TableHead';
import TableBody from './_fragments/TableBody';
import Badge from 'components/Badge';
import { intComma } from 'utils/format';

export default {
  title: 'Example/components/Table',
} as Meta;

export const table = () => {
  const titleData = ['날짜', '제목', '비용', '멘토', '상태'];
  const bodyData = [
    {
      date: '2021.02.18',
      title: '단편소설 [여름의 창문]',
      price: '13300',
      mentor: '백수린',
      status: '결제대기 중',
    },
    {
      date: '2021.02.15',
      title: '시나리오 작업 피드백 요청',
      price: '13300',
      mentor: '백수린',
      status: '피드백 중',
    },
    {
      date: '2021.02.14',
      title: '시나리오 작업 피드백 요청드립니다.',
      price: '20000',
      mentor: '최은영',
      status: '피드백 완료',
    },
  ];

  return (
    <Table>
      <TableHead nthWidth={[2, '60%']}>
        {titleData.map((title) => (
          <TRHeadBox key={title}>
            <Title>{title}</Title>
          </TRHeadBox>
        ))}
      </TableHead>
      <TableBody nthWidth={[2, '60%']}>
        {bodyData.map((data) => (
          <TRBodyBox key={data.title}>
            <TableCell>{data.date}</TableCell>
            <TableCell>{data.title}</TableCell>
            <TableCell>{intComma(data.price)}원</TableCell>
            <TableCell>{data.mentor}</TableCell>
            <TableCell>
              <Badge label={data.status} />
            </TableCell>
          </TRBodyBox>
        ))}
      </TableBody>
    </Table>
  );
};
