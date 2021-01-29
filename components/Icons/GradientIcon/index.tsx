import GraphIcon from './Graph';

export type nameProps = 'graph';

interface Props {
  name: nameProps | string;
  size?: string | number;
  style?: any;
}

/**
 * GradientIcon은 PRIMARY, PRIMARYSUB 그라디언트로 이루어졌으며, 색상 변경이 불가합니다.
 *
 * 기본 크기는 50 x 50 입니다.
 */
const LineIcon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'graph':
      return <GraphIcon {...props} />;
  }
  return null;
};

export default LineIcon;
