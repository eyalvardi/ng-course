export interface IError{
    key   :string,
    msg   : string,
    lang? : string
}
export interface IValidation{
    type    : string,
    args?   : any,
    errors? : IError[]
}
export interface IOption<T>{
    value?  : T;
    key?    : string;
    label?  : string;
    order?  : number;
    name?   : string;
    options?:{key?:string,value:string}[];
    validations? : IValidation[];
    controlType? : string;
    type?        : string;
}
export class QuestionsGroup{
    key     : string;
    controlType : string;
    label   : string;
    questions: QuestionBase<any>[];
    constructor( obj : {key?:string, label?:string, questions?:any[] } = {}){
        this.controlType = 'group';
        this.key       = obj.key        || '';
        this.label     = obj.label      || '';
        this.questions = obj.questions  || [];
    }
}

export class QuestionBase<T>{
    value   : T;
    key     : string;
    label   : string;
    order   : number;
    controlType: string;
    type    : string;
    validations: IValidation[];

    constructor(options:IOption<T>  = {}) {
        this.value       = options.value;
        this.key         = options.key || '';
        this.label       = options.label || '';
        this.validations = options.validations || [];
        this.order       = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
    }
}
