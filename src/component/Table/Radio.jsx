import * as React from "react";

export class Radio extends React.Component{

    render(){

        return (
            <div className="table-colum-width pull-left" style={{"padding-top":"10px"}}>
           <input type="checkbox" checked={this.props.data} />
            </div>
                );
    }
}