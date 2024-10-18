import { dataFeatureItem } from "../../data/features";
import FeatureItem from "./FeatureItem";

export default function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {dataFeatureItem.map((item, index) => (
                <FeatureItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    alt={item.alt}
                />
            ))}
        </section>
    );
}
