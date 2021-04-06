import { useLayoutEffect } from 'react';

/**
 * 사용자의 스크롤 동작을 막는 훅입니다. 해당 훅을 호출한 컴포넌트가 언마운트 되기 전까지 스크롤 동작이 불가합니다. 모달 컴포넌트 등과 함께 사용됩니다.
 */
function useLockBodyScroll() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}

export default useLockBodyScroll;
