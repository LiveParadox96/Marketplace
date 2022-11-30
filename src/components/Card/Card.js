import './Card.css';
import Button from '../Button/Button'

function Card({image, title, description, price, onClick}){
    return (
        <div className='Card' onClick={()=>onClick(title)}>
            <img className='Card-img' src={image}/>
            <div className='Card-container'>
                <p className='Card-title common-header'>{title}</p>
                <p className='Card-discription'>{description}</p>
                <div className='Card-price common-price'>{price}</div>
                <div className="Card-button">
                    <Button>В корзину</Button>
                </div>
            </div>
        </div>
    )
}

export default Card;