import { createSelector } from "reselect";

const selectTopicList = state => state.getIn(['Home', 'topicList']);
export const topicListSelector = createSelector(selectTopicList, item => item);

