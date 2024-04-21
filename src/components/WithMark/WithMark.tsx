import React from "react";
import New from "../New/New";
import Popular from "../Popular/Popular";
import { IArticle } from "../Article/Article";

export default function WithMark(Component) {
  return (props: IArticle) => {
    
    if (props.views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      )
    } else if (props.views > 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      )
    } else {
      return (
        <Component {...props} />
      )
    }
  }
}


/*
import React from "react";
import New from "../New/New";
import Popular from "../Popular/Popular";
import { IArticle } from "../Article/Article";

export default function WithMark(Component) {
  return class extends React.Component {
    render() {
      const propsItems: IArticle = this.props;
      
      if (propsItems.views < 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        )
      } else if (propsItems.views > 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        )
      } else {
        return (
          <Component {...this.props} />
        )
      }
    }
  }
}

*/