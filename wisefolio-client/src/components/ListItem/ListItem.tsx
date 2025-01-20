import React from "react";
import EditIcon from "../../assets/icons/edit.svg?react";
import DeleteIcon from "../../assets/icons/delete.svg?react";
import "./ListItem.scss"

type ListItemProps = {
  id: number;
  description: string;
  category: string;
  date: string;
  amount: number;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const ListItem: (React.FC<ListItemProps>) = ({
  id,
  description,
  category,
  date,
  amount,
  onEdit,
  onDelete,
}) => {
  return (
    <li className="expense__recent-item">
      <article className="expense__recent-placeholder">
        <p className="expense__recent-description">{description}</p>
        <article className="expense__recent-container">
          <p className="expense__recent-details">{category} </p>
          <p className="expense__recent-dot">•</p>
          <p className="expense__recent-details">{date.split('T')[0]}</p>
        </article>
      </article>
      <div className="expense__recent-actions">
        <span className="expense__recent-amount">${amount}</span>
        <EditIcon
          className="expense__recent-icon expense__recent-edit"
          onClick={() => onEdit(id)}
        />
        <DeleteIcon
          className="expense__recent-icon expense__recent-delete"
          onClick={() => onDelete(id)}
        />
      </div>
    </li>
  );
};

export default ListItem;
