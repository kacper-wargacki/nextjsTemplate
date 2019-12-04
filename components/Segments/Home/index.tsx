import React, { Component } from "react";
import Large from "./Large";
import Small from "./Small";

type Props = {
  size: "large" | "medium" | "small" | boolean;
};

export default class Home extends Component<Props, {}> {
  render() {
    const { size } = this.props;
    return (
      <>
        {size == "large" ? <Large /> : <Small />}
        <style jsx>
          {`
              #home {
                font-size: 5vh;
                text-align: center;
                background-color: rgb(112, 182, 241);
              }
            `}
        </style>
      </>
    );
  }
}
