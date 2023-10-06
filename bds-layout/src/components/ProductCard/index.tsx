import { ReactComponent as CarImage } from 'assets/images/car-image.svg';
import './styles.scss';
import Button from 'components/Button';

const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="card-top-container">
                <CarImage />
            </div>
            <div className="card-bottom-container">
                <h6 className="product-title">Audi Supra TT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                <Button text="comprar"/>
            </div>
        </div>
    );
}

export default ProductCard;