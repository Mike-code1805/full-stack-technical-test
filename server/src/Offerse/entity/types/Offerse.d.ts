export interface Offerse{
    id: OfferseId;
    name: string,
    characteristics: Array<string>,
    created_at: Date,    
    updated_at: Date,
}

export type CreateOfferse = Omit<Offerse, 'created_at' | 'updated_at' | 'id'>;

export type OfferseId = {
    id: Types.ObjectId;
};