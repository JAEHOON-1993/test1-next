import React, { useLayoutEffect } from 'react';

type EventType = MouseEvent | TouchEvent;

/**
 * 특정 엘레먼트의 외부를 클릭을 감지하여 콜백 함수를 실행시키는 훅입니다.
 * 모달, 드랍다운, 툴팁 컴포넌트 등을 작성할시 사용됩니다.
 * @param {RefObject} ref 엘레먼트 외부 클릭을 감지할 대상이 되는 레퍼런스입니다.
 * @callback handler 외부 클릭시 실행될 콜백함수입니다. 일반적으로 해당 컴포넌트를 언마운트하는 동작을 전달하게됩니다.
 */
function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  handler: (event: EventType) => void,
) {
  useLayoutEffect(() => {
    const listener = (event: EventType) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);
}

export default useOnClickOutside;
