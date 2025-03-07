import { createContext, ReactElement, useState } from "react"

export type ProductType = {
    sku : string,
    name: string,
    price: number,
    description: string,
    featured : boolean
}

const initState: ProductType[] = [
    {
        "sku": "product001",
        "name": "arm chair",
        "price": 509.9,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "featured": true
    },
    {
        "sku": "product002",
        "name": "Premium Wedgit",
        "price": 1200,
        "description": " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nam dolorum ducimus",
        "featured": true
    },
    {
        "sku": "product003",
        "name": "Arm chair",
        "price": 2200,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "featured": true
    },
    {
        "sku": "product004",
        "name": "single armchair",
        "price": 1200,
        "description": "Expertly rendered by cave man & son's, the lounge chair-first Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda accusantium molestiae sapiente ab corrupti architecto reprehenderit maxime perferendis omnis quia illo cumque vel voluptatum quasi perspiciatis aut possimus, consectetur velit commodi, blanditiis beatae suscipit. Id minima illo at voluptatibus quia labore nihil et ducimus, consectetur alias corporis sit sapiente.",
        "featured": false
    },
    {
        "sku": "product005",
        "name": "wooden armchair",
        "price": 3000,
        "description": "Expertly rendered by cave man & son's, the lounge chair-first Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda accusantium molestiae sapiente ab corrupti architecto reprehenderit maxime perferendis omnis quia illo cumque vel voluptatum quasi perspiciatis aut possimus, consectetur velit commodi, blanditiis beatae suscipit. Id minima illo at voluptatibus quia labore nihil et ducimus, consectetur alias corporis sit sapiente.",
        "featured": false
    },
    {
        "sku": "product007",
        "name": "mapple wood chair",
        "price": 6000,
        "description": "Expertly rendered by cave man & son's, the lounge chair-first Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda accusantium molestiae sapiente ab corrupti architecto reprehenderit maxime perferendis omnis quia illo cumque vel voluptatum quasi perspiciatis aut possimus, consectetur velit commodi, blanditiis beatae suscipit. Id minima illo at voluptatibus quia labore nihil et ducimus, consectetur alias corporis sit sapiente.",
        "featured": false
    },
    {
        "sku": "product008",
        "name": "modern chair",
        "price": 4200,
        "description": "Expertly rendered by cave man & son's, the lounge chair-first Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda accusantium molestiae sapiente ab corrupti architecto reprehenderit maxime perferendis omnis quia illo cumque vel voluptatum quasi perspiciatis aut possimus, consectetur velit commodi, blanditiis beatae suscipit. Id minima illo at voluptatibus quia labore nihil et ducimus, consectetur alias corporis sit sapiente.",
        "featured": false
    },
    {
        "sku": "product009",
        "name": "arm chair",
        "price": 3200,
        "description": "Expertly rendered by cave man & son's, the lounge chair-first Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda accusantium molestiae sapiente ab corrupti architecto reprehenderit maxime perferendis omnis quia illo cumque vel voluptatum quasi perspiciatis aut possimus, consectetur velit commodi, blanditiis beatae suscipit. Id minima illo at voluptatibus quia labore nihil et ducimus, consectetur alias corporis sit sapiente.",
        "featured": false
    },
    {
        "sku": "product011",
        "name": "wooden chair",
        "price": 2200,
        "description": "Expertly rendered by cave man & son's, the lounge chair-first Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda accusantium molestiae sapiente ab corrupti architecto reprehenderit maxime perferendis omnis quia illo cumque vel voluptatum quasi perspiciatis aut possimus, consectetur velit commodi, blanditiis beatae suscipit. Id minima illo at voluptatibus quia labore nihil et ducimus, consectetur alias corporis sit sapiente.",
        "featured": false
    },
    {
        "sku": "product010",
        "name": "wooden bed",
        "price": 6200,
        "description": "Expertly rendered by cave man & son's, the lounge chair-first Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda accusantium molestiae sapiente ab corrupti architecto reprehenderit maxime perferendis omnis quia illo cumque vel voluptatum quasi perspiciatis aut possimus, consectetur velit commodi, blanditiis beatae suscipit. Id minima illo at voluptatibus quia labore nihil et ducimus, consectetur alias corporis sit sapiente.",
        "featured": false
    },
    {
        "sku": "product006",
        "name": "stylish chair",
        "price": 5200,
        "description": "Expertly rendered by cave man & son's, the lounge chair-first Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda accusantium molestiae sapiente ab corrupti architecto reprehenderit maxime perferendis omnis quia illo cumque vel voluptatum quasi perspiciatis aut possimus, consectetur velit commodi, blanditiis beatae suscipit. Id minima illo at voluptatibus quia labore nihil et ducimus, consectetur alias corporis sit sapiente.",
        "featured": false
    },
    
    {
        "sku": "product011",
        "name": "stylish chair",
        "price": 5200,
        "description": "Expertly rendered by cave man & son's, the lounge chair-first Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda accusantium molestiae sapiente ab corrupti architecto reprehenderit maxime perferendis omnis quia illo cumque vel voluptatum quasi perspiciatis aut possimus, consectetur velit commodi, blanditiis beatae suscipit. Id minima illo at voluptatibus quia labore nihil et ducimus, consectetur alias corporis sit sapiente.",
        "featured": false
    },
    
    {
        "sku": "product012",
        "name": "stylish chair",
        "price": 5200,
        "description": "Expertly rendered by cave man & son's, the lounge chair-first Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda accusantium molestiae sapiente ab corrupti architecto reprehenderit maxime perferendis omnis quia illo cumque vel voluptatum quasi perspiciatis aut possimus, consectetur velit commodi, blanditiis beatae suscipit. Id minima illo at voluptatibus quia labore nihil et ducimus, consectetur alias corporis sit sapiente.",
        "featured": false
    }
    
]

export type UseProductContextType  = {products : ProductType[]}

const initContextState: UseProductContextType = {products : []}

export const  productContext = createContext<UseProductContextType>(initContextState)

type ChildrenType = {
    children : ReactElement | ReactElement[]
}

export const ProductProvider = ({children}: ChildrenType)=> {

    const [products, setProducts] = useState<ProductType[]>(initState)

//    useEffect(()=>{
//     const fetchProduct = async(): Promise<ProductType[]>=>{
//         const data = await fetch('localhost://localhost:3500/')
//               .then((res)=>{return res.json()})
//               .catch((err)=>{
//                 if (err instanceof Error) {
//                     console.log(err); 
//                  }
//               })
//         return data
//     }

//     fetchProduct().then((products)=> setProducts(products) )
//    },[])
    return (
        <productContext.Provider value={{products}}>
            {children}
        </productContext.Provider>
    )
}