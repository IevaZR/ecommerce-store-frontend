export type Furniture = {
    id: number | string;
    title: string;
    category: "sofas" | "chairs" | "tables" | "beds";
    price: number;
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
}