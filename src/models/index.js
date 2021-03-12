import { init } from '@rematch/core';
import { createLogger } from 'redux-logger';
import { BoldText } from "./bold";
import { Italic } from "./italic";
import { TextModifier } from "./textmodifier";
import {ColorPallete} from "./colorPallete";
import {List} from "./list";
import {SelectedText} from "./selectedText";
import {LinkTag} from "./link";

const models = {
    BoldText,
    Italic,
    TextModifier,
    ColorPallete,
    List,
    SelectedText,
    LinkTag,
}



const logger = _ => createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });

export const store = init({
    models,
    redux: {
        middlewares: [
            ...(process.env.NODE_ENV === "development" ? [logger()] : []),//benchmarkingMiddleWare
        ],
        rootReducers: { RESET: _ => undefined },
        devtoolOptions: {
            trace: true,
            traceLimit: 25,
        },
    },
});