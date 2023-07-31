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
            featureTitle1: string,
            featureParagraph1: string,
        },
        {
            featureTitle2: string,
            featureParagraph2: string,
        },
        {
            featureTitle3: string,
            featureParagraph3: string,
        },
        ];
    keywords: [string, string, string, string, string];
    image: string;
}