import Card from "../Card/Card";
import "./CardList.scss";

type Component = {
    name: string;
    date: Date;
    amount: number;
    amountLimit: number;
};

const CardList = ({ componentList }: { componentList: Component[] }) => {
    return (
        <div className="card-list">
            {componentList.map((component, index) => (
                <Card key={index} component={component} />
            ))}
        </div>
    );
};

export default CardList;
