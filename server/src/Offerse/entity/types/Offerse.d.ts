export interface Offerse{
    id: OfferseId;
    name: string,
    characteristics:{
        name: string,
        price: number,
        description: string,
    },
    created_at: Date,    
    updated_at: Date,
}

export type CreateOfferse = Omit<Offerse, 'id' | 'created_at' | 'updated_at'>


export type OfferseId = {
    id: Types.ObjectId;
};