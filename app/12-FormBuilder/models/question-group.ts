import {QuestionBase} from "./question-base";

export class QuestionsGroup extends QuestionBase<any> {
    public questions   : QuestionBase<any>[];
    constructor( obj : {key?:string, label?:string, questions?:any[] } = {}){
        super(obj);
        this.questions = obj.questions  || [];
    }
}