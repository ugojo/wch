import { ReducerAction, ReducerActionType } from "../context/cartProvider"
import { ProductType } from "../context/productProvider"
import { CartsType } from "../context/cartProvider"


export type CartProps = {
    viewCart : boolean,
    setViewCart? :  React.Dispatch<React.SetStateAction<boolean>>
}

export type FeaturedProps = {
    product: ProductType
}

export type ProductListType = {
    product? : ProductType
    products?: ProductType[]
    // dispatch? : React.ActionDispatch<[action: ReducerAction]>,
    // REDUCER_ACTIONS?: ReducerActionType,
    // inCart?: boolean
}

export type AddToCartType = {
    product: ProductType
    dispatch: React.ActionDispatch<[action: ReducerAction]>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
}

export  type CartListType = {
    item : CartsType
}