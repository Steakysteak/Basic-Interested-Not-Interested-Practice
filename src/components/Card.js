import { useState } from "react";

function Card({id, image, name, info, price, removetour }) {
    const [readmore, setReadmore] = useState(false);

    const readmoreHandler = () => {
        setReadmore(readmore => !readmore);
    };

    return (
    <div>
        <img src={image} alt="utk" />
        <div>
            <h4>${price}</h4>
        </div>
        <div>
        <h3>{name}</h3>
        </div>
        <div>
            <p>{readmore ? info : info.substr(0,200)}<span onClick={readmoreHandler}>{readmore ? 'Showless' : 'Readmore'}</span></p>
        </div>
        <div>
            <button onClick={() => removetour(id)}>Not Interested</button>
        </div>

    </div>
    );
};

export default Card;