import { Layout } from "../layout/layout";
import { restaurants } from "../../materials/mock"
import { Restaurant } from "../restaurant/restaurant";
import { useState } from "react";

const tabHandler = () => {
    const [tabNum,setCount] = useState(0);

    const setNew = (event) => {
        setCount(Number(event.target.id)-1);
    }

    return {tabNum,setNew}
    };


    
    export const App= ()=> {
        const {tabNum,setNew} = tabHandler();
        var num = 0;
        return (
            <Layout>
             <div>
                {restaurants.map(({name})=> { 
                    num++;
                    return ( <button className= "tabButton" id = {num} onClick={setNew}>{name}</button>); 
                    })}
                <div id="content">
                    <Restaurant name = {restaurants[tabNum].name} menu={restaurants[tabNum].menu} reviews = {restaurants[tabNum].reviews} />
                </div>
            </div>
     </Layout>
   );
}
