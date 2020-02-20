import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase, TextField, Select, MenuItem } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(1),
    height: "100%",
    position: "absolute",
    right: "-30px",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },

}));

export default function Search(props) {
  const classes = useStyles();
  const history = ["test", "andromeda", "pluto"];
  const [filter, setFilter] = useState(undefined);
  const [filteredHistory, setFilteredHistory] = useState([]);



  onkeyup = (k) =>{
    if(k.keyCode === 13){
      var searchText = document.getElementById('SearchBox').value;
      props.handleSearch(searchText);
    }
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon onClick={props.handleSearch}/>
      </div>
      <Autocomplete
        id="SearchBox"
        options={history}
        getOptionLabel={option => option}
        style={{ width: 300 }}
        freeSolo={true}
        renderInput={params => (
          <TextField
              {...params}
              label="Search"
              variant="filled"
              fullWidth
            />
        )}
      />
    </div>
  );
}
