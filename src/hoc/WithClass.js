import React from "react";

const withClass = props => (
  <div className={props.classes}>{props.children}</div>
);

export default withClass;

/* Another approach to HOC
const withClass = (className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
}
*/
