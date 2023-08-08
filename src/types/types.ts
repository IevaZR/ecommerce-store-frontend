export type Furniture = {
    id: number | string;
    title: string;
    category: "sofas" | "chairs" | "tables" | "beds";
    price: number;
    discount?: number;
    description: string;
    color: string;
    quantity: number;
    dimensionsCm: {
        width: number;
        height: number;
        depth: number;
    };
    features: [
        {
            featureTitle: string,
            featureParagraph: string,
        },
        {
            featureTitle: string,
            featureParagraph: string,
        },
        {
            featureTitle: string,
            featureParagraph: string,
        },
        ];
    keywords: [string, string, string, string, string];
    image: string;
};

export interface ProductCardProps {
    productList: Furniture;
};

export interface ProductPreviewModalProps {
    productList: Furniture;
    onClose: () => void;
 };
export interface ButtonProps {
    text?: string;
    // buttonColor?: '#817F77' | '#FFCD2B';
}

export interface ButtonProps {
    text?: string;
    onClick?: () => void;
}