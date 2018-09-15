import * as actionTypes from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 2,
      title: "故事",
      imgUrl:
        "//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 3,
      title: "读书",
      imgUrl:
        "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }
  ],
  articleList: [
    {
      id: 1,
      title: "三生三世枕上书",
      content:
        "两个月过去了，在昆仑虚弟子的帮助下，少绾原谅了墨渊，并和墨渊在一起了，做了昆仑虚的女主人，滚滚也在昆仑虚生活得很好，有了墨渊的指导，滚滚的法力增强了不少，又有少绾和昆仑虚十六个师兄的陪伴，一点也不无聊，少绾也经常带滚滚逃课，墨渊也奈何不了。",
      author: "抑郁的心",
      comments: 6,
      likes: 10,
      pic_url:
        "//upload-images.jianshu.io/upload_images/5143640-9b6bba456fd0c255?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 2,
      title: "三生三世枕上书",
      content:
        "两个月过去了，在昆仑虚弟子的帮助下，少绾原谅了墨渊，并和墨渊在一起了，做了昆仑虚的女主人，滚滚也在昆仑虚生活得很好，有了墨渊的指导，滚滚的法力增强了不少，又有少绾和昆仑虚十六个师兄的陪伴，一点也不无聊，少绾也经常带滚滚逃课，墨渊也奈何不了。",
      author: "抑郁的心",
      comments: 6,
      likes: 10,
      pic_url:
        "//upload-images.jianshu.io/upload_images/5143640-9b6bba456fd0c255?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 3,
      title: "三生三世枕上书",
      content:
        "两个月过去了，在昆仑虚弟子的帮助下，少绾原谅了墨渊，并和墨渊在一起了，做了昆仑虚的女主人，滚滚也在昆仑虚生活得很好，有了墨渊的指导，滚滚的法力增强了不少，又有少绾和昆仑虚十六个师兄的陪伴，一点也不无聊，少绾也经常带滚滚逃课，墨渊也奈何不了。",
      author: "抑郁的心",
      comments: 6,
      likes: 10,
      pic_url:
        "//upload-images.jianshu.io/upload_images/5143640-9b6bba456fd0c255?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 4,
      title: "三生三世枕上书",
      content:
        "两个月过去了，在昆仑虚弟子的帮助下，少绾原谅了墨渊，并和墨渊在一起了，做了昆仑虚的女主人，滚滚也在昆仑虚生活得很好，有了墨渊的指导，滚滚的法力增强了不少，又有少绾和昆仑虚十六个师兄的陪伴，一点也不无聊，少绾也经常带滚滚逃课，墨渊也奈何不了。",
      author: "抑郁的心",
      comments: 6,
      likes: 10,
      pic_url:
        "//upload-images.jianshu.io/upload_images/5143640-9b6bba456fd0c255?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }
  ],
  recommendList: [
    {
      id: 1,
      href_url: "/trending/weekly?utm_medium=index-banner-s&utm_source=desktop",
      img_url:
        "//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
    },
    {
      id: 2,
      href_url:
        "/trending/monthly?utm_medium=index-banner-s&amp;utm_source=desktop",
      img_url:
        "//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
    },
    {
      id: 3,
      href_url: "/mobile/books?category_id=284",
      img_url:
        "//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id: 4,
      href_url: "/publications",
      img_url:
        "//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id: 5,
      href_url:
        "/c/e048f1a72e3d?utm_medium=index-banner-s&amp;utm_source=desktop",
      img_url:
        "//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }
  ],
  users: []
});

const reducer_handlers = {
  ["users"]: (state, action) => {
    return state.set("users", action.data);
  }
};

export default (state = defaultState, action) => {
  if (reducer_handlers.hasOwnProperty(action.type)) {
    console.log("reducer", action);
    return reducer_handlers[action.type](state, action);
  }
  return state;
};
