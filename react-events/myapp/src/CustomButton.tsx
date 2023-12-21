import './CustomButton.css';

type Props = {
  text: string;
  color: string;
  onCustomClick: (text: string) => void;
};

export function CustomButton({ text, color, onCustomClick }: Props) {
  return (
    <button onClick={() => onCustomClick(text)} className={color}>
      {' '}
      {text}{' '}
    </button>
  );
}
