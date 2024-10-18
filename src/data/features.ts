import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";

type FeatureItem = {
    title: string;
    description: string;
    icon: string;
    alt: string;
};

export const dataFeatureItem: FeatureItem[] = [
    {
        title: "You are our #1 priority",
        description:
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
        icon: iconChat,
        alt: "Chat Icon",
    },
    {
        title: "More savings means higher rates",
        description: "The more you save with us, the higher your interest rate will be!",
        icon: iconMoney,
        alt: "Money Icon",
    },
    {
        title: "Security you can trust",
        description: "We use top of the line encryption to make sure your data and money is always safe.",
        icon: iconSecurity,
        alt: "Security Icon",
    },
];
