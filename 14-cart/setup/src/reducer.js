const reducer = (state, action) => {
    console.log('entering reducer')
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [], amount: 0, total: 0 }
    }
    if (action.type === 'REMOVE') {
        let items = state.cart;
        items = items.filter((a) => a.id !== action.payload)
        // let newTotal = 0;
        // items.map((a)=> newTotal = newTotal + a.price * a.amount)
        // return { ...state, cart: items, total: newTotal, amount: items.length }
        return { ...state, cart: items }
    }
    if (action.type === 'INCREASE') {
        let items = state.cart.map((a) => {
            if (a.id === action.payload) {
                return {...a,amount: a.amount + 1}
            }
             return a 
        });
        // let newTotal = 0;
        // items.map((a) => { newTotal = newTotal + a.price * a.amount })
        // let newAmount = 0;
        // items.map((a) => { newAmount = newAmount + a.amount })
        // return { ...state, cart: items, total: newTotal.toFixed(2), amount: newAmount }
        return { ...state, cart: items }
        
    }
    if (action.type === 'DECREASE') {
        let items = state.cart.map((a) => {
            if (a.id === action.payload) {
                return {...a,amount: a.amount - 1}
            }
             
            return a
            
        });
        // let newTotal = 0;
        // items.map((a) => newTotal = newTotal + a.price * a.amount)
        // let newAmount = 0;
        // items.map((a) => { newAmount = newAmount + a.amount })
        // return {...state, cart: items.filter((a) => a.amount !== 0), total: newTotal.toFixed(2),amount:newAmount }
        return { ...state, cart: items.filter((a) => a.amount !== 0) }
    }
    if (action.type === 'TOTAL') {
        const { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            cartTotal.amount += amount;
            let newp = amount * price
            cartTotal.total += newp
            return cartTotal
        } , {
            total: 0,
            amount:0
        })        
        return {...state, total:total, amount:amount}
    }
    if (action.type === 'LOADING') {
        return {...state,loading:true}
    }
    if (action.type === 'DISPLAY') {
        return {...state,loading:false, cart:action.payload}
    }

    return state
}

export default reducer