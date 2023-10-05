import Navbar from 'components/Navbar';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Button from 'components/Button';
import './styles.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-main-card">
          <div className="home-main-card-image">
            <MainImage />
          </div>
          <div className="home-main-card-content">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-content-card">
            <Button />
            <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};

export default Home;
