import {QuestionBase, IOption} from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];

    constructor(options: IOption<string> = {}) {
        super(options);
        this['options'] = options['options'] || [];
    }
}
