import React, { useState, useEffect } from "react";

const Favorites =() => {
const [favorites, setFavorites] = useState([]);
const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

    useEffect(() => {
            setFavorites([...getArray]),
   [] },)

const addFav = (props) => {
    let array = favorites;
    let addArray = true;
    array.map((item, key) => {
            if (item === props.i){
                array.slice(key, 1);
                addArray = false;
            }
    });
    if (addArray) {
            array.push(props.i);
    }
    setFavorites([...array])
    localStorage.setItem("favorites", JSON.stringify(favorites));

    var storage = localStorage.getItem('favItem' + (props.i) || '0')
    if (storage == null){
            localStorage.setItem(('favItem' + (props.i)), JSON.stringify(props.i));
    }
    else{
            localStorage.removeItem('favItem' + (props.i));

    } }
 
const fav = () => {
    var favList = [{}]
    const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
    for  (var i = 0; i < getArray.length; i++){
        let x = getArray[i]
        favList[i] = JSON.parse(localStorage.getItem('favItem' + [x]) || '')
    }
    const titles = Object.keys(favList[0]);
    };    


return (
    <div>
        {/* <div>
            {favorites.includes(i) ? (
                <Heart 
                    onClick={() => addFav ({ items, i })}
                    style = {{ color: 'red'}}
                />
            ) : (
                    <HeartEmpty
                    onClick={() => addFav ({ items, i })}
                    style = {{ color: 'red'}}
                />
            )}
        </div> */}
        <div>
            <h3>Your Favourite Opportunities</h3>
            <table>
                <thead>
                    <tr>
                        {titles.map((title, key) => (
                            <th key={key}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {favList.map((items, i) => (
                        <tr key={i}>
                            {(Object.values(favList[i])).map((value, key) => (
                              <td key={key}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
};


export default Favorites;