import { createSelector } from "reselect";

const selectTopicList = state => state.getIn(['Home', 'topicList']);
export const topicListSelector = createSelector(selectTopicList, item => item);

const selectArticleList = state => state.getIn(['Home', 'articleList']);
export const articleListSelector = createSelector(selectArticleList, item => item);

const selectRecommendList = state => state.getIn(['Home', 'recommendList']);
export const recommendListSelector = createSelector(selectRecommendList, item => item);

const selectShowTop = state => state.getIn(['Home', 'showTop']);
export const showTopSelector = createSelector(selectShowTop, item => item);

