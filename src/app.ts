export {};


const a: number = 20;
const b: number = 30;

type User = {
    id: number;
    name: string;
}

const myname: string = "nguyễn xuân đại";
const myage: number = 27;
const status: boolean = true;

const myObject: object = {};

const numberArr: number[] = [1,2,3,4];
const stringArr: User[] = [{id:1,name:"dai"}];

// 
type product = {
    id: number,
    name: string
}

const getProducts = <T extends product>(products : T[]) => {
    const result = products.map(item => `<div>${item.name}</div>`)
}
getProducts([{id: 1, name: "a"}, {id: 2, name: "b"}]);