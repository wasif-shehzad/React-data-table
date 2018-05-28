import  React,{Component} from "react";

export class ImageComp extends Component{

    render(){

        return (
            <div className="table-colum-width pull-left" style={{"padding-top":"10px"}}>
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