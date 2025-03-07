import { createContext, ReactElement, useMemo, useReducer } from "react"

export type CartsType = {
    sku: string,
    name: string,
    description: string,
    price: number,
    quantity: number
}

type CartsStateType = { carts: CartsType[]}

const initCartState: CartsStateType =  {carts: []}

const REDUCER_ACTION_TYPE = {
    ADD : "ADD",
    REMOVE : "REMOVE",
    QUANTITY : "QUANTITY",
    SUBMIT : "SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type : string,
    payload? : CartsType
}

const reducer = (state: CartsStateType, action: ReducerAction): CartsStateType =>{

    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error('Payload missing in add')
            }
            const {sku, name, description, price } = action.payload
            const fitterCart : CartsType[] = state.carts.filter((cart)=> cart.sku !== sku)
            const itemExist: CartsType | undefined = state.carts.find((cart)=> cart.sku === sku)

            const quantity : number = itemExist ? itemExist.quantity + 1 : 1

            return {...state, carts:[...fitterCart, {sku, name, description, price, quantity}]}
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error('Payload missing in add')
            }
            const {sku } = action.payload
            const fitterCart : CartsType[] = state.carts.filter((cart)=> cart.sku !== sku)

            return {...state, carts: [...fitterCart]}
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error('Payload missing in add')
            }
            const {sku, quantity} = action.payload
            const itemExist: CartsType | undefined = state.carts.find((cart)=> cart.sku === sku)
            if (!itemExist) {throw new Error("Can't Update Item")};

            const upadateCart: CartsType = {...itemExist, quantity}

            const fitterCart : CartsType[] = state.carts.filter((cart)=> cart.sku !== sku)

            return {...state, carts: [...fitterCart, upadateCart]}
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            if (!action.payload) {
                throw new Error('Payload missing in add')
            }

            return {...state, carts : []}
        }
        default:
            throw new Error('Unidentified Action');
    }
}

const useCartContext = (initCartState: CartsStateType)=>{

    const [state, dispatch] = useReducer(reducer, initCartState)

    const REDUCER_ACTIONS = useMemo(()=> {return REDUCER_ACTION_TYPE},[])

    const totalItem = state.carts.reduce((prevoiusValue, cartItem)=> {
        
        return prevoiusValue + cartItem.quantity
    }, 0)

   const totalPrice = new Intl.NumberFormat('en', {style: 'currency', currency: 'USD'}).format(
     state.carts.reduce((prevoiusValue, cartItem)=>{
        return prevoiusValue + (cartItem.quantity * cartItem.price)
     },0)
   )

   const cart = state.carts.sort((a,b)=>{
      const itemA =  Number(a.sku.slice(-4))
      const itemB =  Number(b.sku.slice(-4))

      return itemA - itemB
   })

   return {dispatch, REDUCER_ACTIONS, totalItem, totalPrice, cart}
}

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
    dispatch: ()=> {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItem: 0,
    totalPrice: '',
    cart: []
}

export const cartsContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenType = {
    children : ReactElement | ReactElement[]
}
export const CartProvider = ({children} : ChildrenType )=>{

    return (
        <cartsContext.Provider value={useCartContext(initCartState)}>
            {children}
        </cartsContext.Provider>
    )
}