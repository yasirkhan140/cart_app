import React from "react";

class CartItem extends React.Component{
    
    // increaseQuantity =()=>{
    //     // this.state.qty+=1;
    //     // setStae form1
    //     this.setState({
    //         qty:this.state.qty+1
    //     })
    // }
    // decreaseQuantity=()=>{
    //     const {qty}= this.state;
        
    //     if(qty===0){
    //         return;
    //     }
    //     // setState form 2 - if prevState required use this
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty-1
    //         }
    //     })
    // }
    // // deleteItem=()=>{
    // //     this.state
    // // }
    
    render(){
        const {price ,title,qty,img} = this.props.product;
        console.log("this.prop" ,this.props);
        const {product, onDecreaseQuantity,onIncreaseQuantity,onDeleteProduct} = this.props;
        return (
            <div className = "cart-item">
                {this.props.jsx}
                <div className = "left-block">
                    <img style={style.image} src ={img} />
                </div>
                <div className = "right-block">
                    <div style ={{fontSize:25}}> {title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className = "cart-item-action">
                        {/*Buttons*/}
                        <img alt ="increase" className="action-icons" src ='https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg'
                            onClick= {()=> onIncreaseQuantity(product)}
                            />
                        <img alt ="decrease" 
                            className="action-icons" 
                            src ='https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg'
                            onClick= {()=> onDecreaseQuantity(product)}
                            />
                        <img alt ="delete" 
                            className="action-icons" 
                            src ='https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg'
                            onClick={()=> onDeleteProduct(product.id)}
                            />
                    </div>
                </div>
            </div>       
        )
    }
    
}

const style ={
    image :{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;