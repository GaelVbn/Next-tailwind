import Image from "next/image";

interface FeatureCardInterface {
    title: string;
    description: string;
    image: string;
    className?: string;
}


export const FeatureCard:React.FC<FeatureCardInterface> = ({title, description, image, className}) => {
    return (
        <div className={`flex flex-col ${className || ''}`}>
            <h4>{title}</h4>
            <Image className="p-5" src={image} alt="logo" width="1920" height="1080" />
            <span>{description}</span>
        </div>
    );
}