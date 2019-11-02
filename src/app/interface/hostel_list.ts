export interface price{
    sharing:string,
    price:string,
    available:string;
    amenities:string
}
export interface Hostel{
    img:any;
    label:string;
    sharing:price[];
    rating:string;
    favFlag?:boolean;
    pg_for:string;
    food_available?:boolean;
    contact_number:string;
    state:string,
    city:string,
    lane:string,
    pincode:string
    email:string;
    desc:string
}
export interface HostelInt{
    hostelArr:Hostel[],
    hostelObj:Hostel
}