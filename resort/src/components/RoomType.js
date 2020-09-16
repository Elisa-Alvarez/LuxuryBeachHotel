import { Button } from '@material-ui/core';
import React, { memo } from 'react';
import{Link} from 'react-router-dom';
import PropTypes from 'prop-types';

/*To allow the /rooms/:slug to be unique per individual room title*/
function RoomType({ room }) {
    const { name, images, slug, price } = room;
    return (
        <div>
            <div className="image-container">
                <img src={images[0]} alt="room image" />
                <div className="price">
                    <h5>${price}</h5>
                    <p>Per Night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="feature-link"><Button varient="outlined" size="large" className="feature-btn">Features</Button></Link>
            </div>
            <p className="room-info">{name}</p>
        </div>
    );
}

export default RoomType

RoomType.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string),
        price:PropTypes.number.isRequired,
        slug:PropTypes.string.isRequired,
    })
}