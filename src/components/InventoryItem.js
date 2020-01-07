import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export class InventoryItem extends Component {
    render() {
        return (
            <div>
                <Button varient="contained" color="primary">{this.props.item.title}</Button>
            </div>
        )
    }
}

export default InventoryItem
