import { createSelector } from "reselect";

const selectFoo = state => state.getIn(['Header', 'foo']);
export const fooSelector = createSelector(selectFoo, item => item);
