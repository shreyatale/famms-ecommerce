export const put = (Item)=>{
    return{
        type:"Add-To-Cart",
        payload:Item
    }
}

export const remove =(id)=>{

    return{
        type:"Remove-To-Cart",
        payload:id
    }
}

export const dec =(Item)=>{
    return{
        type:"Decrement-To-cart",
        payload:Item
    }
}