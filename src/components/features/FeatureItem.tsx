type FeatureItemProps = {
    title: string;
    description: string;
    icon: string;
    alt: string;
};

export default function FeatureItem({ title, description, icon, alt }: FeatureItemProps) {
    return (
        <div className="feature-item">
            <img src={icon} alt={alt} className="feature-icon" />
            <h3 className="feature-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
}
