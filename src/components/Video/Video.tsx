import { IArticle } from "../Article/Article"
import WithMark from "../WithMark/WithMark";

const Video = (props: IArticle) => {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}

const UpdatedArticle = WithMark(
  Video
);

export default UpdatedArticle



/*
const Video = ({ url, views }: IArticle) => {
  return (
    <div className="item item-video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  )
}

export default Video
*/