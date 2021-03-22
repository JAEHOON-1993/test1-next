import FacebookIcon from './Facebook';
import NaverIcon from './Naver';
import KakaoIcon from './Kakao';
import GoogleIcon from './Google';
import WebIcon from './Web';
import KakaoTalkIcon from './KakaoTalk';
import InstagramIcon from './Instagram';
import YoutubeIcon from './Youtube';
import AppleIcon from './Apple';

type nameProps =
  | 'facebook'
  | 'naver'
  | 'kakao'
  | 'google'
  | 'web'
  | 'kakaoTalk'
  | 'instagram'
  | 'youtube'
  | 'apple';

interface Props {
  name: nameProps;
  size?: string | number;
  style?: any;
  color?: string;
}

/**
 *
 * SocialIcon의 기본 색상은 해당 브랜드의 색입니다. 변경이 필요한 경우 color prop을 이용하여 색상을 string 타입으로 전달하면 됩니다.
 *
 * 기본 크기는 24 x 24 입니다.
 */

const SocialIcon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'facebook':
      return <FacebookIcon {...props} />;
    case 'naver':
      return <NaverIcon {...props} />;
    case 'kakao':
      return <KakaoIcon {...props} />;
    case 'google':
      return <GoogleIcon {...props} />;
    case 'web':
      return <WebIcon {...props} />;
    case 'kakaoTalk':
      return <KakaoTalkIcon {...props} />;
    case 'instagram':
      return <InstagramIcon {...props} />;
    case 'youtube':
      return <YoutubeIcon {...props} />;
    case 'apple':
      return <AppleIcon {...props} />;
    default:
      return null;
  }
};

export default SocialIcon;
