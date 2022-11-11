import {createContext, useReducer} from 'react';

const initialState = {
    addedItems: []
}

export const Context = createContext(initialState)

const addItem = (state, item) => {
    const currentArray = [...state.addedItems];

    const itemIndex = currentArray.findIndex(arrayItem => arrayItem.item.id === item.id);
    if (itemIndex !== -1) {
        currentArray[itemIndex] = {
            ...currentArray[itemIndex],
            quantity: currentArray[itemIndex].quantity + 1
        }
    } else {
        currentArray.push({
            item,
            quantity: 1
        })
    }
    return currentArray;
}

const addCartItem = (state, item) => {
    const newArray = [...state.addedItems];
    const productIndex = newArray.indexOf(item);

    newArray[productIndex] = {
        ...newArray[productIndex],
        quantity: newArray[productIndex].quantity + 1
    }

    return newArray;
}

const deleteCartItem = (state, item) => {
    const newArray = [...state.addedItems];
    const productIndex = newArray.indexOf(item);

    if (newArray[productIndex].quantity >= 2) {
        newArray[productIndex] = {
            ...newArray[productIndex],
            quantity: newArray[productIndex].quantity - 1
        }
    } else {
        newArray.splice(productIndex, 1)
    }
    return newArray;
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'ADD_ITEM':
                return {
                    ...state,
                    addedItems: addItem(state, action.payload)
                };
            case 'ADD_CART_ITEM':
                return {
                    ...state,
                    addedItems: addCartItem(state, action.payload)
                };
            case 'DELETE_ALL':
                return {
                    ...state,
                    addedItems: []
                };
            case 'DELETE_ITEM':
                return {
                    ...state,
                    addedItems: deleteCartItem(state, action.payload)
                }
            default: return ({
                ...state
            })
        }
    }, initialState)

    return (<Context.Provider value={{
        state,
        dispatch
    }}>{children}</Context.Provider>)

}

export default AppProvider;