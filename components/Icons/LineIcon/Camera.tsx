import { Props } from './types';
import { FillStrokeProps } from './styled';

const CameraIcon = ({ size = 50, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="camera_icon_36"
      width={size}
      height={size}
      viewBox="0 0 36 36"
    >
      <g id="그룹_830" transform="translate(-341.421 -1205.593)">
        <g id="그룹_824" transform="translate(346.911 1214.206)">
          <FillStrokeProps
            id="패스_1260"
            d="M371.083 1233.629h-22.768a1.4 1.4 0 0 1-1.4-1.4v-14.279a1.405 1.405 0 0 1 1.4-1.4h4.258v-.937a1.405 1.405 0 0 1 1.4-1.4h11.444a1.405 1.405 0 0 1 1.4 1.4v.937h4.258a1.406 1.406 0 0 1 1.4 1.4v14.276a1.405 1.405 0 0 1-1.392 1.403zm-22.768-16.319a.64.64 0 0 0-.64.64v14.276a.639.639 0 0 0 .64.638h22.768a.639.639 0 0 0 .64-.638v-14.276a.64.64 0 0 0-.64-.64h-4.64a.382.382 0 0 1-.382-.382v-1.32a.639.639 0 0 0-.639-.639h-11.445a.639.639 0 0 0-.64.639v1.32a.382.382 0 0 1-.382.382z"
            colored={color}
            strokeWidth="0.7px"
            transform="translate(-346.911 -1214.206)"
          />
        </g>
        <g id="그룹_825" transform="translate(353.967 1219.357)">
          <FillStrokeProps
            id="패스_1261"
            d="M359.418 1230.614a5.731 5.731 0 1 1 5.73-5.731 5.738 5.738 0 0 1-5.73 5.731zm0-10.7a4.966 4.966 0 1 0 4.967 4.966 4.972 4.972 0 0 0-4.967-4.963z"
            colored={color}
            strokeWidth="0.7px"
            transform="translate(-353.686 -1219.152)"
          />
        </g>
        <g id="그룹_826" transform="translate(363.077 1220.902)">
          <FillStrokeProps
            id="패스_1262"
            d="M371.46 1221.4h-8.647a.382.382 0 0 1 0-.765h8.647a.382.382 0 1 1 0 .765z"
            colored={color}
            strokeWidth="0.7px"
            transform="translate(-362.432 -1220.635)"
          />
        </g>
        <g id="그룹_827" transform="translate(346.911 1220.902)">
          <FillStrokeProps
            id="패스_1263"
            d="M355.939 1221.4h-8.646a.382.382 0 0 1 0-.765h8.646a.382.382 0 1 1 0 .765z"
            colored={color}
            strokeWidth="0.7px"
            transform="translate(-346.911 -1220.635)"
          />
        </g>
        <g id="그룹_828" transform="translate(363.075 1228.51)">
          <FillStrokeProps
            id="패스_1264"
            d="M371.46 1228.7h-8.647a.382.382 0 0 1 0-.765h8.647a.382.382 0 1 1 0 .765z"
            colored={color}
            strokeWidth="0.7px"
            transform="translate(-362.431 -1227.94)"
          />
        </g>
        <g id="그룹_829" transform="translate(346.911 1228.51)">
          <FillStrokeProps
            id="패스_1265"
            d="M355.94 1228.7h-8.647a.382.382 0 0 1 0-.765h8.647a.382.382 0 0 1 0 .765z"
            colored={color}
            strokeWidth="0.7px"
            transform="translate(-346.911 -1227.94)"
          />
        </g>
      </g>
      <path id="사각형_1996" fill="none" d="M0 0H36V36H0z" />
    </svg>
  );
};

export default CameraIcon;
