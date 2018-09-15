import { createSelector } from "reselect";

const selectTopicList = state => state.getIn(['Home', 'topicList']);
export const topicListSelector = createSelector(selectTopicList, item => item);

const selectArticleList = state => state.getIn(['Home', 'articleList']);
export const articleListSelector = createSelector(selectArticleList, item => item);

