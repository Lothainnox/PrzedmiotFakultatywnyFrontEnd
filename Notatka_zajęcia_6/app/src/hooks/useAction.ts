import React from 'react';
import { getAction } from '../store/actions';

export const useAction = <T extends any>(Action: new() => T) => {
    const { current } = React.useRef(getAction(Action));
    return current;
}