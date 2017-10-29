import * as React from "react";

export class ImageComp extends React.Component{

    render(){

        return (
            <div>
            {
            this.props.data
            ?
        <img height={20} width={20}  src={this.props.data}   />   :
            null
        }
            </div>
        );
    }
}