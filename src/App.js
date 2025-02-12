import logo from './logo.svg';
import './App.css';
function ProductList (props){
  return <ul>
    {props.products.map((product)=>{
      return <li key={product.id}>{product.name} {product.price}</li>
    })}
  </ul>
}
function NavBar(props){
   return <nav>
    <ul>
    {props.links.map((link)=>{
      return <li key={link.id}><a href={link.href}>{link.label}</a></li>
    })}
    </ul>
   </nav>
}
function App() {
  const products=[{id:1,name:'apple',price:10},{id:2,name:'banana',price:3},{id:3,name:'kiwi',price:20}]
  const links=[{id:1,label:'apple',href:'https://th.bing.com/th/id/R.ab7861c8f52e2a71c5401f80b4869183?rik=72zA1PYP9ptQgg&riu=http%3a%2f%2fapple.gop%2fmedia%2fuploads%2fzinnia%2fshiny-red-apples.jpg&ehk=1OqkLNXKlIZEiFEiMfL%2bjWmShEoe5N412%2bXM1iioX5s%3d&risl=&pid=ImgRaw&r=0'},{id:2,label:'banana',href:''},{id:3,label:'kiwi',href:''}]

  return (
    <div className="App">
       <ProductList products={products}/>
       <NavBar links={links}/>
    </div>
  );
}

export default App;
