import React from 'react';
import styled from "styled-components";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Category = styled.ul`
display: flex;
flex-direction: row;
margin-left: 3rem;

&>li{
    list-style-type: none;
}
`
const Filters = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 3rem;
    margin-bottom: 1.5rem;
`


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        width: 200,
        marginLeft: '2rem',
    },
}));


const Filter = () => {

    const [state, setState] = React.useState({
        sale: false,
        new: true,
    });

    const classes = useStyles();

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <Category>
                <li><Button disabled>All</Button><span>/</span></li>
                <li><Button>Jackets </Button><span>/</span></li>
                <li><Button>Pants </Button><span>/</span></li>
                <li><Button>T-shirts </Button><span>/</span></li>
                <li><Button>Shoes </Button><span>/</span></li>
                <li><Button>Other </Button></li>

            </Category>
            <Filters>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value='s'>S</MenuItem>
                        <MenuItem value='m'>M</MenuItem>
                        <MenuItem value='l'>L</MenuItem>
                        <MenuItem value='xl'>XL</MenuItem>
                    </Select>
                </FormControl>
                <div className={classes.root}>
                    <Typography id="range-slider" gutterBottom>
                        Price
                    </Typography>
                    <Slider
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </div>
                <FormControlLabel
                    control={<Checkbox
                        checked={state.sale}
                        onChange={handleChange}
                        name="sale"
                    />}
                    label="Sale"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={state.new}
                        onChange={handleChange}
                        name="new"
                        color="primary"
                    />}
                    label="New"
                />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value='price-lh'>Price(low-high)</MenuItem>
                        <MenuItem value='price-hl'>Price(high-low)</MenuItem>
                        <MenuItem value='new'>Newest</MenuItem>
                        <MenuItem value='category'>Category</MenuItem>
                    </Select>
                </FormControl>
            </Filters>

        </>

    );
}

export default Filter;