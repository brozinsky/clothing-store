import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';


const ProductInCart = ({ name, url, price, id }) => {
    const [cart, setCart] = useContext(CartContext);

    const handleRemoveItem = () => {
        //make a new component ProductInCart and manage setCart inside it
        setCart(
            cart.filter((item) => item.id !== id)
        )
    }

    return (
        <TableRow key={name}>
            <TableCell
                component="th"
                scope="row">
                <div className="details-wrap">
                    <img
                        className="details-img"
                        src={url}
                        alt="product" />
                    <div className="details-container">
                        <div className="name-container">
                            <span className="details-name">
                                {name}
                            </span>
                            <span>size: M</span>
                        </div>
                        <button
                            onClick={handleRemoveItem}
                            className="details-delete">
                            <DeleteIcon /> remove item
                    </button>
                    </div>
                </div>

            </TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">${price}</TableCell>
            <TableCell align="right">${price}</TableCell>
        </TableRow>
    )
}

export default ProductInCart