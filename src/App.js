import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Counter from './components/Сounter/Counter';
import Input from './components/Input/Input';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { connect } from 'react-redux';


function App() {
  const [products, setProducts]= useState( [] );
  const [input,setInput]= useState('');
  
  useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
        .then((response)=> response.json())
        .then((result) =>{
          setProducts(result)
        })
  }, [])
  return (
    <div className="App">
      <Header/>
      <div className='Searsh_item'>
                  <h2 className='search_text'>Найди товар:&nbsp;</h2>
                  <div>
                      <Input input={input} setInput={setInput}/>
                  </div>
            </div>
      <div className='App-container'>
        
        {
          products.filter(item => item.title.toLowerCase().includes(input.toLowerCase())).map((item, index) => {
            return    <div >
            <Card
                  key={index}
                  title={item.title} 
                  description={item.description}
                  image={item.image}
                  price={item.price}
                  onClick={(event)=> console.log('click on', event)}/>
            </div>
          })
        }
        {
          products.map((item,index)=>{
            return    <div >
                        <Card
                              key={index}
                              title={item.title} 
                              description={item.description}
                              image={item.image}
                              price={item.price}
                              onClick={(event)=> console.log('click on', event)}/>
                        </div>
          })
        }
        
        
      </div>


      {/* <div className="App-newsletter">
        <h2>Подписаться на новости канала</h2>
        <Button></Button>
      </div> */}
      <div className='YaMap'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;