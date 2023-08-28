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

export interface cartItemProps {
    cartItemData: cartItemData[];
    onDelete: () => void;
};

export type onDelete = {
    onDelete: () => void;
};

export type cartItemData = {
    id: number | string;
    title: string;
    category: "sofas" | "chairs" | "tables" | "beds";
    price: number;
    quantity: number;
    discount?: number;
    description: string;
    color: string;
    dimensionsCm: {
        width: number;
        height: number;
        depth: number;
    };
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
    backgroundColor?: 'transparent' | 'rgb(209 203 203 / 75%)';
    icon?:string;
    onClick?: () => void;
}
