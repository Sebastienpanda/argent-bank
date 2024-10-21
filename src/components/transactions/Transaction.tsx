import { dataTransactionItem } from "../../data/transaction";
import TransactionItem from "./TransactionItem";

export default function Transaction() {
    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {dataTransactionItem.map((item, index) => (
                <TransactionItem key={index} title={item.title} description={item.description} prix={item.prix} />
            ))}
        </>
    );
}
