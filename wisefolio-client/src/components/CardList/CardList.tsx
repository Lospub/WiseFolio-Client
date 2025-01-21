import Card from "../Card/Card";
import "./CardList.scss";

type Component = {
    id:string;
    name: string;
    date: Date;
    amount: number;
    amountLimit: number;
};

type CardListProps = {
    componentList: Component[];
    handleDelete: (index: number) => void;
    handleEdit: (id: string) => void;
};

const CardList = ({ componentList, handleDelete, handleEdit }: CardListProps) => {
    return (
        <div className="card-list">
            {componentList.map((component, index) => (
                <Card
                    key={index}
                    component={component}
                    onDelete={() => handleDelete(index)}
                    onEdit={() => handleEdit(component.id)}
                />
            ))}
        </div>
    );
};

export default CardList;
