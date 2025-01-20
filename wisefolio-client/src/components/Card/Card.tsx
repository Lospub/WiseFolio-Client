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
        <div className="budget-card">
            <div className="budget-card__header">
                <div className="budget-card__title">
                    <h3 className="budget-card__category">{component.category}</h3>
                    <p className="budget-card__date">
                        {component.date.toLocaleDateString()}
                    </p>
                </div>
                <div className="budget-card__actions">
                    <EditIcon className="budget-card__edit" />
                    <DeleteIcon className="budget-card__delete" />
                </div>
            </div>
            <div className="budget-card__progress-bar">
                <div
                    className="budget-card__progress"
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
