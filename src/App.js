import React from 'react';
import Cart from './cart';
import Navbar from './navbar';
import firebase from 'firebase/compat/app';


class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [],
      loading :true
    }
    this.db = firebase.firestore();
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  

  
  componentDidMount(){
    firebase
      .firestore()
      .collection('products')
      .get()
      .then((snapshot)=>{
        console.log(snapshot);
        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });
        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();
          data['id'] =doc.id
          return data;
        })
        this.setState({
          products:products,
          loading:false
        })
      })
    this.db
      .collection('products')
      // .where("price","==",999)
      // .orderBy("price","desc")
      .onSnapshot((snapshot)=>{
        console.log(snapshot);
        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });
        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();
          data['id'] =doc.id
          return data;
        })
        this.setState({
          products:products,
          loading:false
        })
      })
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
    const docRef = this.db.collection("products").doc(products[index].id);


    docRef
      .update({
        qty:products[index].qty+1
      })
      .then(()=>{
        console.log("Updated successfully")
      })
      .catch((err)=>{
        console.log("Error in inc the qty of product",err)
      })
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({
        qty:products[index].qty-1
      })
      .then(()=>{
        console.log("Updated Sucessfully");
      })
      .catch((err)=>{
        console.log("Error in dec the qty of product",err);
      })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
    const docRef = this.db.collection("products").doc(id);


    docRef
      .delete()
      .then(()=>{
        console.log("delete sucessfully")
      })
      .catch((err)=>{
        console.log("Error in the delete the product",err)
      })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      if(product.qty>0){
        cartTotal = cartTotal + product.qty * product.price
      }
      return "";
      
    })

    return cartTotal;
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.value > 5) return false;
    return true;
  }
  componentDidUpdate() {
    console.log("->");
  }
  addProducts = ()=>{
    this.db
      .collection("products")
      .add({
        img:"",
        price:900,
        qty:3,
        title:"Washing machine"
      })
      .then((docRef)=>{
        console.log("Product added successfully",docRef);
      })
      .catch((err)=>{
        console.log("Error", err)
      })

  }
  
 

  render () {
    const { products ,loading} = this.state;
    console.log("render");
   
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading products...</h1>}
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
