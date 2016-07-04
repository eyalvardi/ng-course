/**
 * Created by Eyal on 7/4/2016.
 */
import {TextboxQuestion} from "./question-textbox";
import {CheckboxQuestion} from "./question-checkbox";
import {RadioQuestion} from "./question-radio";
import {DropdownQuestion} from "./question-dropdown";

export * from './question-base';
export * from './question-checkbox';
export * from './question-dropdown';
export * from './question-radio';
export * from './question-textbox';
export const QUESTION_MODELS = {
    textbox : TextboxQuestion,
    checkbox: CheckboxQuestion,
    radio   : RadioQuestion,
    dropdown: DropdownQuestion
};