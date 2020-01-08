import React, {useState} from 'react';
import InventoryItem from './InventoryItem';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

export default function Inventory(props) {

    return (
        <div> 
            <GridList cellHeight={200} cols={3}>
                {props.inventory.map((item) => (
                <GridListTile key={item.id} cols={item.cols || 1}>
                    <img src={item.img} alt={item.title} />
                    <GridListTileBar 
                        title={item.title}
                        subtitle={'$' + item.price}
                    />
                </GridListTile>
                ))}
            </GridList>
        </div>
    );    
}

