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
  users: [],
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
  ]
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
