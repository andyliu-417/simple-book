import { createSelector } from "reselect";

const selectFoo = state => state.getIn(['Header', 'foo']);
export const fooSelector = createSelector(selectFoo, item => item);

const selectFocused = state => state.getIn(['Header', 'focused']);
export const focusedSelector = createSelector(selectFocused, item => item);
