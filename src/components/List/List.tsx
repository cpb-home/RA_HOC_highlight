
import UpdatedArticle, { IArticle } from "../Article/Article";
import Video from "../Video/Video";

interface IList {
  list: IArticle[];
}

const List = ({ list }: IList) => {

  return list.map(item => {
    switch (item.type) {
      case 'video':
        return (
            <Video key={item.title} {...item} />
        );

      case 'article':
        return (
            <UpdatedArticle key={item.title} {...item} />
        );
    }
  });
}

export default List