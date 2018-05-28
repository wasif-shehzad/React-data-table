import  React from "react";

export function PaginationComp(props) {
        return (
            <div className="col-sm-8 col-lg-8 col-md-8 pull-right">
            Showing {Math.round(props.recordFrom)==0?1:Math.round(props.recordFrom)} to {Math.round(+props.recordFrom+8)}   of {props.data.length}            </div>
        );
}