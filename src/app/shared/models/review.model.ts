export class Review {
    constructor (public _id: string , public author: string, public email: string, public content: string, public accepted: boolean, public date: Date) {}
}