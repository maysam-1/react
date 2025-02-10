import logo from './logo.svg';
import './App.css';
function ProductList (props){
  return <ul>
    {props.products.map((product)=>{
      return <li key={product.id}>{product.name} {product.price}</li>
    })}
  </ul>
}
function App() {
  const products=[{id:1,name:'apple',price:10},{id:2,name:'banana',price:3},{id:3,name:'kiwi',price:20}]

  return (
    <div className="App">
       <ProductList products={products}/>
    </div>
  );
}

export default App;
