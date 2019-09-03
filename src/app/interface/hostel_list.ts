export interface price{
    sharing:string,
    price:string
}

export interface Hostel{
    img:string;
    label:string;
    price:price;
    rating:number;
    favFlag?:boolean;
}