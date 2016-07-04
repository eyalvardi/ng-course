import {QuestionBase, IOption} from './question-base';

export class CheckboxQuestion extends QuestionBase<boolean> {
    controlType = 'checkbox';

    constructor(options:IOption<boolean> = {}) {
        super(options);
    }
}
