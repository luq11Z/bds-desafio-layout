import Button from 'components/Button';
import './styles.scss';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="search-card">
        <input
          type="text"
          className="form-control"
          placeholder="Digite sua busca"
        />
        <Button text="buscar" />
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
