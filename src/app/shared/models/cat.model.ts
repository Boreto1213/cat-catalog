// export class Cat {
//     constructor(public _id: string, public name: string, public born: string, 
//         public breed: string, public sex: string, 
//         public color: string, public price: number, public images: string[]) {}
// }

export interface Cat {
    name: string,
    born: string,
    breed: string,
    sex: string,
    color: string,
    price: number,
    images: string[],
    _id?: string
}