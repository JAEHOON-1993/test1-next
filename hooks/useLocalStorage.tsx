import { useState } from 'react';

/**
 * localStorage를 다루는 훅입니다. `useState`의 사용법과 유사합니다.
 * useLocalStorage 함수에 key 값을 파라미터로 넣어서 호출하면 배열을 반환합니다.
 * @param {string} key localStorage의 key에 해당합니다
 * @returns {Array} 첫번째 원소는 key에 해당하는 값을 반환합니다. 만약 값이 없다면 null을 반환합니다. 두번째 원소는 setter 함수입니다.
 */
function useLocalStorage<T>(key: string) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return null;
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  });

  const setValue = (value: T) => {
    if (typeof window === 'undefined') return;
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
