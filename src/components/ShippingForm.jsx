import React, { useState } from "react";
import './ShippingForm.css'
function ShippingForm(props) {
    const [title, setTitle] = useState("");
    const [number, setWeight] = useState();
    const [color, setColor] = useState();
    const [place, setPlace] = useState("");
    const handleSubmit = (e) => { 
        e.preventDefault();
        const data = {
            title: title,
            weight: number,
            color: color,
            place: place,
        };
        props.addToListCallback(data)
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>ShippingForm</h1> 
            <label>Item Name:</label><input type="text" value={title}  placeholder="Title" onChange={(e) => setTitle(e.target.value)}  /><br /><br />
            <label>Item Number:</label><input type="number" value={number}  placeholder="Number" onChange={(e) => setWeight(e.target.value)}/><br /><br />
            <label>Color of Item</label>
            <input type="color" value={color} placeholder="Color" onChange={(e) => setColor(e.target.value)} /><br /><br />
            <label>Shipping Place:</label><input type="text" value={place}  placeholder="Place" onChange={(e) =>setPlace(e.target.value)} /><br /><br />
            <button>Submit</button>
        </form>
    </div>


  );
}





export default ShippingForm