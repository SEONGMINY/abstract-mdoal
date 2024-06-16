import useModal from '@hooks/useModal';
import TestModalComponent from './ui/TestModalComponent';

const Home = () => {
  const { openModal, closeModal } = useModal();

  const onOpen = () => {
    openModal(TestModalComponent, {
      text: 'CONTENT !!!',
    });
  };

  const onClose = () => {
    closeModal(TestModalComponent);
  };

  return (
    <div>
      <button onClick={onOpen}>모달 열기</button>
      <button onClick={onClose}>모달 닫기</button>
    </div>
  );
};

export default Home;
