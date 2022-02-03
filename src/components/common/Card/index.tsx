import "./Card.css";

export const Card = ({ title, children }: any) => {
  return (
    <div className="card">
      {title && <div className="title">{title}</div>}
      <div>{children}</div>
    </div>
  );
};
