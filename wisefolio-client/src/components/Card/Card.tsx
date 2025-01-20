import "./Card.scss";
import EditIcon from "../../assets/icons/edit.svg?react";
import DeleteIcon from "../../assets/icons/delete.svg?react";

type CardComponent = {
  category: string;
  date: Date;
  amountUsed: number;
  amountLimit: number;
};

const Card = ({ component }: { component: CardComponent }) => {
  const usagePercentage = (component.amountUsed / component.amountLimit) * 100;

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title">
          <h3 className="card__category">{component.category}</h3>
          <p className="card__date">
            {component.date.toLocaleDateString()}
          </p>
        </div>
        <div className="card__actions">
          <EditIcon className="card__edit" />
          <DeleteIcon className="card__delete" />
        </div>
      </div>
      <div className="card__progress-bar">
        <div
          className="card__progress"
          style={{ width: `${usagePercentage}%` }}
        ></div>
      </div>
      <p>
        ${component.amountUsed} / ${component.amountLimit} &nbsp;
        <span>{usagePercentage.toFixed(0)}% used</span>
      </p>
    </div>
  );
};

export default Card;
