import React, {Component} from 'react';
import InventoryItem from './InventoryItem';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

class Inventory extends Component {
    render(){
        return (
            <div> 
                <GridList cellHeight={200} cols={3}>
                    {this.props.inventory.map((item) => (
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
}

export default Inventory;
