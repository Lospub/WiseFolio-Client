import React from "react";
import ListItem from "../ListItem/ListItem";
import "./Listview.scss"

type Expense = {
    id: number;
    description: string;
    category: string;
    date: string;
    amount: number;
};

type ListViewProps = {
    expenses: Expense[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
};

const ListView: React.FC<ListViewProps> = ({ expenses, onEdit, onDelete }) => {
    return (
        <>
            <h2 className="expense__recent-title">Recent Expenses</h2>
            <div className="expense__recent-list-header">
                <p className="expense__recent-list-label">Description</p>
                <p className="expense__recent-list-label">Amount</p>
                <p className="expense__recent-list-label">Category</p>
                <p className="expense__recent-list-label">Date</p>
                <p className="expense__recent-list-label">Actions</p>
            </div>
            <div className="expense__recent-list">
                {expenses.map((expense) => (
                    <ListItem
                        key={expense.id}
                        id={expense.id}
                        description={expense.description}
                        category={expense.category}
                        date={expense.date}
                        amount={expense.amount}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </>
    );
};

export default ListView;
