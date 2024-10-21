type TransactionItemProps = {
    title: string;
    description: string;
    prix: string;
};

export default function TransactionItem({ title, description, prix }: TransactionItemProps) {
    return (
        <section className="account">
            <div className="content-wrapper">
                <h3 className="title">{title}</h3>
                <p className="amount">${prix}</p>
                <p className="description">{description}</p>
            </div>
            <div className="content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
}
