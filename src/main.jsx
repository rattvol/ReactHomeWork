import ReactDOM from 'react-dom/client'

import { restaurants } from '../materials/mock';

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1>Restaurant: <i>{restaurants[0].name}</i></h1>
    <h3>MENU</h3>
    <ul>
      <li>
        <h4>{restaurants[0].menu[0].name}</h4>
        <div>price: {restaurants[0].menu[0].price}</div>
        <div>Ingridients:</div>
        <ul>
        { restaurants[0].menu[0].ingredients.map((value) =>(
            <li>{value}</li>
          ))}
        </ul>
        </li>
        <li>
        <h4>{restaurants[0].menu[1].name}</h4>
        <div>price: {restaurants[0].menu[1].price}</div>
        <div>Ingridients:</div>
        <ul>
        { restaurants[0].menu[1].ingredients.map((value) =>(
            <li>{value}</li>
          ))}
        </ul>
        </li>
        <li>
        <h4>{restaurants[0].menu[2].name}</h4>
        <div>price: {restaurants[0].menu[2].price}</div>
        <div>Ingridients:</div>
        <ul>
        { restaurants[0].menu[2].ingredients.map((value) =>(
            <li>{value}</li>
          ))}
        </ul>
        </li>
    </ul>
    <h3>REVIEWS</h3>
    <ul>
      <li><b>{restaurants[0].reviews[0].user} ({restaurants[0].reviews[0].rating}):   </b>
      {restaurants[0].reviews[0].text}</li>
       <li><b>{restaurants[0].reviews[1].user} ({restaurants[0].reviews[1].rating}):   </b>
      {restaurants[0].reviews[1].text}</li>
   </ul>
   <hr></hr>
   <h1>Restaurant: <i>{restaurants[1].name}</i></h1>
   <h3>MENU</h3>
    <ul>
      <li>
        <h4>{restaurants[1].menu[0].name}</h4>
        <div>price: {restaurants[1].menu[0].price}</div>
        <div>Ingridients:</div>
        <ul>
        { restaurants[1].menu[0].ingredients.map((value) =>(
            <li>{value}</li>
          ))}
        </ul>
        </li>
        <li>
        <h4>{restaurants[1].menu[1].name}</h4>
        <div>price: {restaurants[1].menu[1].price}</div>
        <div>Ingridients:</div>
        <ul>
        { restaurants[1].menu[1].ingredients.map((value) =>(
            <li>{value}</li>
          ))}
        </ul>
        </li>
    </ul>
    <h3>REVIEWS</h3>
    <ul>
      <li><b>{restaurants[1].reviews[0].user} ({restaurants[1].reviews[0].rating}):   </b>
      {restaurants[1].reviews[0].text}</li>
       <li><b>{restaurants[1].reviews[1].user} ({restaurants[1].reviews[1].rating}):   </b>
      {restaurants[1].reviews[1].text}</li>
       <li><b>{restaurants[1].reviews[2].user} ({restaurants[1].reviews[2].rating}):   </b>
      {restaurants[1].reviews[2].text}</li>
   </ul>
   <hr></hr>
   <h1>Restaurant: <i>{restaurants[2].name}</i></h1>
    <h3>MENU</h3>
    <ul>
      <li>
        <h4>{restaurants[2].menu[0].name}</h4>
        <div>price: {restaurants[2].menu[0].price}</div>
        <div>Ingridients:</div>
        <ul>
        { restaurants[2].menu[0].ingredients.map((value) =>(
            <li>{value}</li>
          ))}
        </ul>
        </li>
        <li>
        <h4>{restaurants[2].menu[1].name}</h4>
        <div>price: {restaurants[2].menu[1].price}</div>
        <div>Ingridients:</div>
        <ul>
        { restaurants[2].menu[1].ingredients.map((value) =>(
            <li>{value}</li>
          ))}
        </ul>
        </li>
        <li>
        <h4>{restaurants[2].menu[2].name}</h4>
        <div>price: {restaurants[2].menu[2].price}</div>
        <div>Ingridients:</div>
        <ul>
        { restaurants[2].menu[2].ingredients.map((value) =>(
            <li>{value}</li>
          ))}
        </ul>
        </li>
    </ul>
    <h3>REVIEWS</h3>
    <ul>
      <li><b>{restaurants[2].reviews[0].user} ({restaurants[2].reviews[0].rating}):   </b>
      {restaurants[2].reviews[0].text}</li>
   </ul> 
   <hr></hr>
   <h1>Restaurant: <i>{restaurants[3].name}</i></h1>
   <h3>MENU</h3>
    <ul>
      <li>
        <h4>{restaurants[3].menu[0].name}</h4>
        <div>price: {restaurants[3].menu[0].price}</div>
        <div>Ingridients:</div>
        <ul>
        { restaurants[3].menu[0].ingredients.map((value) =>(
            <li>{value}</li>
          ))}
        </ul>
        </li>
        <li>
        <h4>{restaurants[3].menu[1].name}</h4>
        <div>price: {restaurants[3].menu[1].price}</div>
        <div>Ingridients:</div>
        <ul>
        { restaurants[3].menu[1].ingredients.map((value) =>(
            <li>{value}</li>
          ))}
        </ul>
        </li>
    </ul>
    <h3>REVIEWS</h3>
    <ul>
      <li><b>{restaurants[3].reviews[0].user} ({restaurants[3].reviews[0].rating}):   </b>
      {restaurants[3].reviews[0].text}</li>
      <li><b>{restaurants[3].reviews[1].user} ({restaurants[3].reviews[1].rating}):   </b>
      {restaurants[3].reviews[1].text}</li>
  </ul>
  </div>

);