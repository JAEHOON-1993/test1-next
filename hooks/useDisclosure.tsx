import { useState } from 'react';

/**
 * `open`, `close`, `toggle` 을 다루는 훅입니다. Modal, Toast, Drawer 등을 조작하는데 사용됩니다.
 */
function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  const onToggle = () => {
    const action = isOpen ? onClose : onOpen;
    action();
  };

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}

export default useDisclosure;
