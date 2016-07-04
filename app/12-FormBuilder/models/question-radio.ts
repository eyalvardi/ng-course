import {QuestionBase, IOption} from './question-base';

export class RadioQuestion extends QuestionBase<string> {
    controlType = 'radio';
    options: {key: string, value: string}[] = [];

    constructor(options: IOption<string> = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
