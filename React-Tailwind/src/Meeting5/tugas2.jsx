function DeliveryStatus ({status}) {
    if(status === 'processing') {
        return "Your Order Is Being Processed"
    }else if(status === 'shipped') {
        return "Your Order Has Been Shipped"
    }else if(status === 'delivered') {
        return "Your Order Has Been Delivered"
    }
}

export default function Status () {
    return (
        <div>
           
            <DeliveryStatus status={'shipped'}/>
            <br />
            <DeliveryStatus status={'processing'}/>
            <br />
            <DeliveryStatus status={'delivered'}/>
            
        </div>
    )
}