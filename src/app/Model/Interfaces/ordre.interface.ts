

export interface Order
{
    
        OrderId: number,
        OrderDate: Date,
        UserId: number,
        Products: productQ[],
        PaymentType: string

}

interface productQ
{
    ProductId:number,
    Quantity:number
}