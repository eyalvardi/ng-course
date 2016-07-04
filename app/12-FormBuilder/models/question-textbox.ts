import {QuestionBase, IOption} from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options:IOption<string> = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
