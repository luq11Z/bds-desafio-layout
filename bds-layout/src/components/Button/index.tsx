import './styles.scss';

type Props = {
    text: string;
  }
  

const Button = ({text}: Props) => {
    return (
        <div className="btn-container">
            <button className="btn btn-secondary">
                <h6>{text}</h6>
            </button>
        </div>
    );
}

export default Button;