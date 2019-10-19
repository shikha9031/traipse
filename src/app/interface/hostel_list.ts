export interface price{
    sharing:string,
    price:string,
    available:string;
}
export interface ImgClass{
    url:''
}
export interface Hostel{
    img:ImgClass[];
    label:string;
    price:price[];
    rating:string;
    favFlag?:boolean;
    pg_for:string;
    food_available?:boolean;
    contact_number?:string;
}
export interface HostelInt{
    hostelArr:Hostel[],
    hostelObj:Hostel
}