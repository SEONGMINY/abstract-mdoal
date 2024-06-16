import { modalState } from '@states/modal';
import { ComponentProps, FunctionComponent, useCallback } from 'react';
import { useRecoilState } from 'recoil';

const useModal = () => {
  const [modals, setModals] = useRecoilState(modalState);

  const openModal = useCallback(
    <T extends FunctionComponent<any>>(Component: T, props: ComponentProps<T>) => {
      setModals((modals) => [...modals, { Component, props }]);
    },
    [setModals],
  );

  const closeModal = useCallback(
    <T extends FunctionComponent<any>>(Component: T) => {
      setModals((modals) => modals.filter((modal) => modal.Component !== Component));
    },
    [setModals],
  );

  return {
    modals,
    openModal,
    closeModal,
  };
};

export default useModal;
