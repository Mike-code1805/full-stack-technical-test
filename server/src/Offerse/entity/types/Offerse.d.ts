export interface Offerse{
    id: OfferseId;
    name: string,
    characteristics: Array<string>,
    created_at: Date,    
    updated_at: Date,
}

export type CreateOfferse = {
    name: string;
    characteristics: [
        {
            name: string,
            price: string,
            description: string
        },
    ];
}

export type OfferseId = {
    id: Types.ObjectId;
};