import './card.styles.css';

const Card = (props) => {
    const { id, name, email } = props.monster;
    return (
        <div className="card-container" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}11?set=set2&size=200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;