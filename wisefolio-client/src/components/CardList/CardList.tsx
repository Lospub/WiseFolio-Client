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
};

const CardList = ({ componentList, handleDelete }: CardListProps) => {
    return (
        <div className="card-list">
            {componentList.map((component, index) => (
                <Card
                    key={index}
                    component={component}
                    onDelete={() => handleDelete(index)}
                />
            ))}
        </div>
    );
};

export default CardList;
