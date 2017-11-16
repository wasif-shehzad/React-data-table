import * as React from "react";

export class PaginationComp extends React.Component{

    render(){

        return (
            <div className="col-sm-8 col-lg-8 col-md-8 pull-right">
            Showing    of {this.props.data.length}            </div>
        );
    }
}