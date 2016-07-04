import { Injectable }       from '@angular/core';
import {QuestionBase, QuestionsGroup} from "./models/question-base";
import {DropdownQuestion} from "./models/question-dropdown";
import {TextboxQuestion} from "./models/question-textbox";
import {CheckboxQuestion} from "./models/question-checkbox";
import {RadioQuestion} from "./models/question-radio";

export class QuestionService {

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
