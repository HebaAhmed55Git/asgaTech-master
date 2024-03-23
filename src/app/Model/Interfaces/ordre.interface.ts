

export interface Order
{
    
        OrderId: string,
        OrderDate: Date,
        UserId: string,
        Products: productQ[],
        PaymentType: string

}

interface productQ
{
    ProductId:number,
    Quantity:number
}