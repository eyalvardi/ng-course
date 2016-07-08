import {QuestionBase} from "./question-base";

export class QuestionsGroup extends QuestionBase<any> {
    public questions   : QuestionBase<any>[];
    constructor( obj : any = {}){
        super(obj);
        this.questions = obj.questions  || [];
    }
}