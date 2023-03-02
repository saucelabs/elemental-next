import * as React from "react"

import classes from "./list.module.css";

function List({ children }){
    return  <div className={classes.list}>{children}</div>

}

export default List;