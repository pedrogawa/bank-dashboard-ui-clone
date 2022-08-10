import "./title.css";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="title-container">
      <strong>{title}</strong>
    </div>
  );
}
