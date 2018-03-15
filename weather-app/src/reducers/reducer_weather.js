import _ from 'lodash';
import { FETCH_WEEKLY_WEATHER } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_WEEKLY_WEATHER:
            return action.payload;
        default: 
            return state;
    }
}