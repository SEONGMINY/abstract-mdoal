interface Props {
  text: string;
}

const TestModalComponent = ({ text }: Props) => {
  return (
    <div>
      <p>Modal 입니다</p>
      <p>{text}</p>
    </div>
  );
};

export default TestModalComponent;
