import styled, { ThemeConsumer } from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';

import SystemIcon from 'components/Icons/SystemIcon';

export default {
  title: 'Example/components/Icons/SystemIcon',
  component: SystemIcon,
} as Meta;

export const all = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Wrap>
          <AlphaBetically>[ A ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="add" color={theme.color.POINT} />
            <div>Add (point color)</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="addProfile" />
            <div>AddProfile</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="alarm" />
            <div>Alarm</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="alarmNew" />
            <div>AlarmNew</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="arrowRight" />
            <div>ArrowRight</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="arrowLeft" />
            <div>ArrowLeft</div>
          </SystemIconBox>

          <AlphaBetically>[ B ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="back" />
            <div>Back</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="bookmark" />
            <div>Bookmark</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="bookmarkColored" />
            <div>BookmarkColored</div>
          </SystemIconBox>

          <AlphaBetically>[ C ]</AlphaBetically>

          <SystemIconBox>
            <SystemIcon name="calender" />
            <div>Calender</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="chat" />
            <div>Chat</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="check" />
            <div>check</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="checkbox" />
            <div>Checkbox</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="checkbox" fill />
            <div>Checkbox (fill)</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="close" />
            <div>Close</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="closeRound" />
            <div>CloseRound</div>
          </SystemIconBox>

          <AlphaBetically>[ D ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="delete" />
            <div>Delete</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="done" />
            <div>Done</div>
          </SystemIconBox>

          {/* <AlphaBetically>[ E ]</AlphaBetically> */}

          {/* <AlphaBetically>[ F ]</AlphaBetically> */}

          {/* <AlphaBetically>[ G ]</AlphaBetically> */}

          <AlphaBetically>[ H ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="hamburger" />
            <div>Hamburger</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="heart" />
            <div>Heart</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="heartColored" />
            <div>HeartColored</div>
          </SystemIconBox>

          <AlphaBetically>[ I ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="image" />
            <div>Image</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="invalid" />
            <div>Invalid</div>
          </SystemIconBox>

          {/* <AlphaBetically>[ J ]</AlphaBetically> */}
          {/* <AlphaBetically>[ K ]</AlphaBetically> */}

          <AlphaBetically>[ L ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="like" />
            <div>Like</div>
          </SystemIconBox>
          <AlphaBetically>[ M ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="moreSetting" />
            <div>MoreSetting</div>
          </SystemIconBox>

          <AlphaBetically>[ N ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="nextPageArrow" />
            <div>nextPageArrow</div>
          </SystemIconBox>

          <AlphaBetically>[ O ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="optionUp" />
            <div>OptionUp</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="optionDown" />
            <div>OptionDown</div>
          </SystemIconBox>

          <AlphaBetically>[ P ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="plus" />
            <div>Plus</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="prevPageArrow" />
            <div>prevPageArrow</div>
          </SystemIconBox>

          <AlphaBetically>[ Q ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="qr" />
            <div>QR</div>
          </SystemIconBox>

          {/* <AlphaBetically>[ R ]</AlphaBetically> */}

          <AlphaBetically>[ S ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="search" />
            <div>Search</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="setting" />
            <div>Setting</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="share" />
            <div>Share</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="smallPlus" />
            <div>SmallPlus</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="smallMinus" />
            <div>SmallMinus</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="star" star="large" />
            <div>Star (large)</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="starHalf" star="large" />
            <div>StarHalf (large)</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="starEmpty" star="large" />
            <div>StarEmpty (large)</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="star" />
            <div>star (default)</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="starHalf" />
            <div>starHalf (default)</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="starEmpty" />
            <div>starEmpty (default)</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="star" star="small" />
            <div>star (small)</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="starHalf" star="small" />
            <div>starHalf (small)</div>
          </SystemIconBox>
          <SystemIconBox>
            <SystemIcon name="starEmpty" star="small" />
            <div>starEmpty (small)</div>
          </SystemIconBox>

          <AlphaBetically>[ T ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="textDelete" />
            <div>TextDelete</div>
          </SystemIconBox>

          <AlphaBetically>[ U ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="url" />
            <div>Url</div>
          </SystemIconBox>

          {/* <AlphaBetically>[ V ]</AlphaBetically> */}

          <AlphaBetically>[ W ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="write" />
            <div>Write</div>
          </SystemIconBox>

          {/* <AlphaBetically>[ X ]</AlphaBetically> */}
          {/* <AlphaBetically>[ Y ]</AlphaBetically> */}
          {/* <AlphaBetically>[ Z ]</AlphaBetically> */}

          <AlphaBetically>[ Social ]</AlphaBetically>
          <SystemIconBox>
            <SystemIcon name="kakao" />
            <div>Kakao</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="naver" />
            <div>Naver</div>
          </SystemIconBox>

          <SystemIconBox>
            <SystemIcon name="facebook" />
            <div>Facebook</div>
          </SystemIconBox>
        </Wrap>
      )}
    </ThemeConsumer>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 900px;
`;

const AlphaBetically = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const SystemIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  > div {
    &:last-child {
      margin-left: 5px;
    }
  }
`;
