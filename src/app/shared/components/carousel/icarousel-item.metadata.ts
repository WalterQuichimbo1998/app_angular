export interface ICarouselItem{
    id:number;
    ttile?:{
        first:string;
        second:string;
    };
    subtitle?:string;
    link?:string;
    image?:string;
    order?:number;
    marginLeft?:number

}