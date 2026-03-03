import React, {Fragment} from "react";


function Hola() {
    let saludo = 3+5
    return(
        <Fragment>
            <h1>Primer componente hola {saludo}</h1>
            <p>Lorem, ipsum dolor sit amet
                 consectetur adipisicing elit. 
                 Nihil a veniam consequatur vitae
                  voluptate quam ipsum excepturi 
                  dolorum similique dignissimos, 
                  iusto tempora accusamus quae atque 
                  itaque, esse modi. Deleniti, dolores.</p>
        </Fragment>
    )
}

export default Hola
