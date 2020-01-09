import React, {useState, useEffect} from 'react';
import InventoryItem from './InventoryItem';
import axios from 'axios';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
const NASA_URL = 'https://images-api.nasa.gov/search?q=earth&media_type=image';
const API_KEY="kcnkNlNpoC6hhOtCgK3dJf8qu8fQi3BXphikDx2k";


export default function Inventory(props) {

    const [inventory, setInventory] = useState({inv: [], isFetching: false});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setInventory({inv: inventory.inv, isFetching: true});
                const response = await axios.get(NASA_URL);    
                    console.log(response.data);
                    
                    setInventory({inv: [...response.data.collection.items], isFetching: false});
    
            } catch (e) {
                console.log(e);
                setInventory({inv: inventory.inv, isFetching: false});
            }
            
        };
        fetchData();
    }, []);


    return (
        <div> 
            <GridList cellHeight={200} cols={3}>
                { inventory.inv.map(item => (
                <GridListTile key={item.id}>
                    <img src={item.links.map(link => link.href)} alt="test" />
                    <GridListTileBar 
                        title={item.earth_date}
                        subtitle={item.status}
                    />
                </GridListTile>
                ))}
            </GridList>
        </div>
    );    
}

