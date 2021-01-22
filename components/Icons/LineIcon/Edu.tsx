import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const EduIcon = ({ size = 50, ...props }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="daily_necessity_icon_36"
          width={size}
          height={size}
          viewBox="0 0 36 36"
        >
          <g id="그룹_522" transform="translate(4 6.079)">
            <g id="그룹_518" transform="translate(0 3.871)">
              <g id="그룹_515" transform="translate(0 1.399)">
                <path
                  id="패스_1043"
                  d="M327.67 749.111h-5.646a.523.523 0 0 1-.375-.157l-1.289-1.308h-9.432a.527.527 0 0 1-.527-.527V730.2a.528.528 0 0 1 1.055 0v16.389h9.124a.531.531 0 0 1 .377.158l1.288 1.308h5.206l1.289-1.308a.528.528 0 0 1 .375-.158h9.124V730.2a.528.528 0 0 1 1.055 0v16.917a.527.527 0 0 1-.528.527h-9.432l-1.288 1.308a.529.529 0 0 1-.376.159z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  stroke-width="0.5px"
                  transform="translate(-310.4 -729.675)"
                />
              </g>
              <g id="그룹_516" transform="translate(2.446)">
                <path
                  id="패스_1044"
                  d="M324.1 747.375a.528.528 0 0 1-.527-.527c0-.794-1.466-.973-1.736-.973h-9.207a.527.527 0 0 1-.528-.527V729.23a.528.528 0 0 1 1.055 0v15.59h8.682c.724 0 2.791.374 2.791 2.028a.527.527 0 0 1-.53.527z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  stroke-width="0.5px"
                  transform="translate(-312.102 -728.702)"
                />
              </g>
              <g id="그룹_517" transform="translate(13.92)">
                <path
                  id="패스_1045"
                  d="M320.612 747.375a.528.528 0 0 1-.527-.527c0-1.654 2.068-2.028 2.791-2.028h8.682v-15.59a.528.528 0 0 1 1.055 0v16.117a.527.527 0 0 1-.527.527h-9.209c-.269 0-1.736.18-1.736.973a.527.527 0 0 1-.529.528z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  stroke-width="0.5px"
                  transform="translate(-320.084 -728.702)"
                />
              </g>
            </g>
            <g id="그룹_521" transform="translate(4.851)">
              <g id="그룹_519" transform="translate(0 .001)">
                <path
                  id="패스_1046"
                  d="M323.371 748.061a.528.528 0 0 1-.446-.246 5.781 5.781 0 0 0-2.208-2.034c-1.351-.515-6.51-2.018-6.562-2.034a.526.526 0 0 1-.381-.506v-16.705a.527.527 0 0 1 .634-.516c.97.2 9.489 2.032 9.489 5.4v16.11a.527.527 0 0 1-.381.506.516.516 0 0 1-.145.025zm-8.541-5.215c1.236.364 5.077 1.5 6.264 1.951a5.038 5.038 0 0 1 1.749 1.239v-14.613c0-1.784-4.676-3.47-8.013-4.233z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  stroke-width="0.5px"
                  transform="translate(-313.775 -726.01)"
                />
              </g>
              <g id="그룹_520" transform="translate(9.068)">
                <path
                  id="패스_1047"
                  d="M320.612 748.061a.516.516 0 0 1-.147-.021.527.527 0 0 1-.381-.506v-16.11c0-3.371 8.519-5.206 9.491-5.4a.519.519 0 0 1 .438.108.53.53 0 0 1 .194.408v16.705a.526.526 0 0 1-.381.506c-.052.016-5.211 1.519-6.562 2.034a5.781 5.781 0 0 0-2.208 2.034.526.526 0 0 1-.444.242zm8.541-20.871c-3.338.763-8.013 2.451-8.013 4.233v14.611a5.061 5.061 0 0 1 1.751-1.237c1.186-.453 5.026-1.587 6.263-1.951z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  stroke-width="0.5px"
                  transform="translate(-320.084 -726.009)"
                />
              </g>
            </g>
          </g>
          <path id="사각형_1991" fill="none" d="M0 0H36V36H0z" />
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default EduIcon;
