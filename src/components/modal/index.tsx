import Portal from '@components/portal';
import useModal from '@hooks/useModal';
import { DEVICE_SIZES } from '@styles/device';
import { LEVEL } from '@styles/level';
import styled from 'styled-components';

const Modal = () => {
  const { modals } = useModal();

  return (
    <Portal>
      {modals.map(({ Component, props }, idx) => (
        <Wrapper key={`modal-${idx}`}>
          <Component {...props} />
        </Wrapper>
      ))}
    </Portal>
  );
};

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: ${DEVICE_SIZES.MOBILE};
  z-index: ${LEVEL.MODAL};
`;

export default Modal;
