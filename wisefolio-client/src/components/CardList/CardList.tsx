import "./CardList.scss";
import Card from "../Card/Card";

type Component = {
    category: string;
    date: Date;
    amountUsed: number;
    amountLimit: number;
};

const CardList = ({ componentList }: { componentList: Component[] }) => {
    return (
        <div className="budget-list">
            {componentList.map((component, index) => (
                <Card key={index} component={component} />
            ))}
        </div>
    );
};

export default CardList;
