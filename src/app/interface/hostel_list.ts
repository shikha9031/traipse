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
    pg_for:string;
    food_available?:string;
}
export interface HostelInt{
    hostelArr:Hostel[],
    hostelObj:Hostel
}