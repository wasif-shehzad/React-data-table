import * as React from "react";

export class Radio extends React.Component{

    render(){

        return (
           <input type="Radio" checked={this.props.data} />
        );
    }
}