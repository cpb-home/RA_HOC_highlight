import React from "react";
import WithMark from "../WithMark/WithMark";

export interface IArticle {
  type?: string;
  title?: string;
  url?: string;
  views?: number;
}

const Article = (props: IArticle) => {
  return (
    <div className="item item-article">
      <h3><a href="#">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
}

const UpdatedArticle = WithMark(
  Article
);

export default UpdatedArticle

/*
const Article = ({ title, views }: IArticle) => {
  const child = (
    <div className="item item-article">
      <h3><a href="#">{title}</a></h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
  if (views < 100) {
    return (
      <New children={child} />
    );
  } else if (views > 999) {
    return (
      <Popular children={child} />
    );
  } else {
    return (
      <>
        {child}
      </>
    );
  }
}

export default Article
*/

/*

import WithMark from "../WithMark/WithMark";

export interface IArticle {
  type?: string;
  title?: string;
  url?: string;
  views: number | string;
}

export const Article = ({ title, views }: IArticle) => {
  return (
    <div className="item item-article">
        <h3><a href="#">{title}</a></h3>
        <p className="views">Прочтений: {views}</p>
    </div>
  )
}

export default WithMark(Article)

*/