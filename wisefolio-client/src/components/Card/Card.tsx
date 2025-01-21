import "./Card.scss";
import EditIcon from "../../assets/icons/edit.svg?react";
import DeleteIcon from "../../assets/icons/delete.svg?react";

type CardComponent = {
  id: string;
  name: string;
  date: Date;
  amount: number;
  amountLimit: number;
};

type CardProps = {
  component: CardComponent;
  onDelete: () => void;
  onEdit: () => void;
};

const Card = ({ component, onDelete, onEdit }: CardProps) => {
  const usagePercentage = (component.amount / component.amountLimit) * 100;

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title">
          <h3 className="card__category">{component.name}</h3>
          <p className="card__date">
            {component.date.toLocaleDateString()}
          </p>
        </div>
        <div className="card__actions">
          <EditIcon className="card__edit" onClick={onEdit}/>
          <DeleteIcon className="card__delete" onClick={onDelete} /> 
        </div>
      </div>
      <div className="card__progress-bar">
        <div
          className="card__progress"
          style={{ width: `${usagePercentage}%` }}
        ></div>
      </div>
      <p className="card__usage">
        ${component.amount} / ${component.amountLimit} &nbsp;
        <span>{usagePercentage.toFixed(0)}% </span>
      </p>
    </div>
  );
};

export default Card;
