import { Layout } from "../layout/layout";
import { restaurants } from "../../materials/mock"
import { Restaurant } from "../restaurant/restaurant";

export const App= ()=> {
    return (
        <Layout>
            {restaurants.map(({id,name, menu,reviews}) =>  <Restaurant key={id} name = {name} menu={menu} reviews = {reviews} />)}
     </Layout>
   );
}
