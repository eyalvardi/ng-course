import { Injectable }       from '@angular/core';
import {Http} from "@angular/http";
import {QUESTION_MODELS, QuestionsGroup, QuestionBase,DropdownQuestion,TextboxQuestion,CheckboxQuestion,RadioQuestion} from "./models/index";
import 'rxjs/add/operator/map';

let path:any = module.id;
let index:number = path.lastIndexOf('/');
path = path.substring( 0, index );

console.log(`path: ${path}`);

@Injectable()
export class QuestionService {
    url:string = `${path}/form-metadata.json`;
    data:any;
    questions : QuestionBase<any>[] = [];

    constructor(private http:Http){}

    load(){
        console.log(`++++++++++++ url: ${this.url}`);
        return this.http.get( this.url )
            .map( res => res.json() )
            .map( data => {
                this.data = data;
                return this.buildQuestions(data);
            });
    }

    buildQuestions(data){
        let questions = [];
        data.forEach( ( item : QuestionsGroup ) => {
            if(item.controlType == 'group'){
                let group = new QUESTION_MODELS[item.controlType](item);
                group.questions = this.buildQuestions( item.questions );
                questions.push(group);
            } else {
                questions.push(new QUESTION_MODELS[item.controlType](item));
            }
        });
        return questions;
    }

    getQuestions() {

        let questions: any[]  = [
            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    {key: 'solid',  value: 'Solid'},
                    {key: 'great',  value: 'Great'},
                    {key: 'good',   value: 'Good'},
                    {key: 'unproven', value: 'Unproven'}
                ],
                order: 3
            }),
            new RadioQuestion({
                key: 'myradio',
                label: 'Radio',
                name: 'test',
                options: [
                    {value: 'Solid'},
                    {value: 'Great'},
                    {value: 'Good'},
                    {value: 'Unproven'}
                ],
                order: 3
            }),
            new QuestionsGroup({
                key: 'fullName',
                label: 'Full Name',
                controlType: 'group',
                questions : [
                    new TextboxQuestion({
                        key: 'firstName',
                        label: 'First name',
                        value: 'Bombasto',
                        validations: [
                            {type:'required',errors:[
                                {key:'required',msg:'First name is required'}
                            ]
                            },
                            {type:'maxLength',args:[5],errors:[
                                {key:'maxLength',msg:'Max length is 5'}
                            ]
                            },
                            {type:'minLength',args:[2],errors:[
                                {key:'minLength',msg:'Min length is 2'}
                            ]
                            }
                        ],
                        order: 1
                    }),
                    new TextboxQuestion({
                        key: 'lastName',
                        label: 'Last name',
                        value: 'Vardi',
                        validations: [
                            {type:'required',errors:[
                                {key:'required',msg:'First name is required'}
                            ]
                            },
                            {type:'maxLength',args:[5],errors:[
                                {key:'maxLength',msg:'Max length is 5'}
                            ]
                            },
                            {type:'minLength',args:[2],errors:[
                                {key:'minLength',msg:'Min length is 2'}
                            ]
                            }
                        ],
                        order: 1
                    }),
                    new QuestionsGroup({
                        key: 'address',
                        label: 'Address',
                        controlType: 'group',
                        questions : [
                            new TextboxQuestion({
                                key: 'street',
                                label: 'Street',
                                value: '',
                                validations: [
                                    {type:'required',errors:[
                                        {key:'required',msg:'First name is required'}
                                    ]
                                    },
                                    {type:'maxLength',args:[5],errors:[
                                        {key:'maxLength',msg:'Max length is 5'}
                                    ]
                                    },
                                    {type:'minLength',args:[2],errors:[
                                        {key:'minLength',msg:'Min length is 2'}
                                    ]
                                    }
                                ],
                                order: 1
                            }),
                            new TextboxQuestion({
                                key: 'number',
                                label: 'Number',
                                value: '',
                                validations: [
                                    {type:'required',errors:[
                                        {key:'required',msg:'First name is required'}
                                    ]
                                    },
                                    {type:'maxLength',args:[5],errors:[
                                        {key:'maxLength',msg:'Max length is 5'}
                                    ]
                                    },
                                    {type:'minLength',args:[2],errors:[
                                        {key:'minLength',msg:'Min length is 2'}
                                    ]
                                    }
                                ],
                                order: 1
                            })
                        ]
                    })
                ]
            }),
            new CheckboxQuestion({
                key: 'lastName',
                label: 'Last name',
                value: false,
                validations: [
                    {
                        type:'required',
                        errors:[
                            {key:'required',msg:'First name is required'}
                        ]
                    }
                ],
                order: 1
            }),
            new TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type : 'email',
                order: 2
            })
        ];
        return questions; //questions.sort((a, b) => a.order - b.order);
    }
}
