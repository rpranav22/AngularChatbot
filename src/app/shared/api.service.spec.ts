import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { MockSpinnerService } from '../spinner/spinner.spec';
import { environment } from '../../environments/environment';
export class MockApiService extends ApiService {
   /*  constructor() {
        //super(null, new MockSpinnerService(), null, null, null, null);
    }
    header(valid_401?: boolean): any {
        return valid_401;
    }
    get(url: string) {
        if (url === 'bookmarks') {
            return Observable.of({
                list: [{
                    topic_id: 106,
                    min_mastery_questions: 1,
                    mastery_confidence_count: 2,
                    release_count: 1,
                    release_frequency: '*\/5 * * * *',
                    max_backlog_questions: 1,
                    max_mastery_days: null,
                    valid_from: null,
                    valid_until: null,
                    status: 'LIVE',
                    created_at: '2017-05-29T06:30:37+00:00',
                    counter: {
                        questions: 1
                    },
                    translations: [{
                        trans_id: 121,
                        language: 'EN',
                        title: 'Topic FirstName5823',
                        description: null,
                        default: true
                    }],
                    topic_user_correlation: {
                        mastered: true,
                        priority: 'LOW',
                        rank: 4,
                        strength: 4,
                        mastered_count: 1,
                        bookmarked_count: 1,
                        backlog_count: 0,
                        updated_at: '2017-07-26T00:08:24+00:00'
                    }
                }, {
                    topic_id: 110,
                    min_mastery_questions: 1,
                    mastery_confidence_count: 2,
                    release_count: 1,
                    release_frequency: '*\/5 * * * *',
                    max_backlog_questions: 1,
                    max_mastery_days: null,
                    valid_from: null,
                    valid_until: null,
                    status: 'LIVE',
                    created_at: '2017-05-29T06:30:42+00:00',
                    counter: {
                        questions: 1
                    },
                    translations: [{
                        trans_id: 125,
                        language: 'EN',
                        title: 'Topic FirstName2190',
                        description: null,
                        default: true
                    }],
                    topic_user_correlation: {
                        mastered: true,
                        priority: 'LOW',
                        rank: 2,
                        strength: 2,
                        mastered_count: 1,
                        bookmarked_count: 1,
                        backlog_count: 0,
                        updated_at: '2017-07-26T00:08:24+00:00'
                    }
                }],
                pagination: {
                    total: 10,
                    per_page: 15,
                    count: 10,
                    current_page: 1,
                    links: {
                        previous: null,
                        next: null
                    }
                }
            });
        }
        if (url === 'history/106/questions') {
            return Observable.of({
                list: [{
                    topic_id: 112,
                    min_mastery_questions: 1,
                    mastery_confidence_count: 2,
                    release_count: 1,
                    release_frequency: '*\/5 * * * *',
                    max_backlog_questions: 1,
                    max_mastery_days: null,
                    valid_from: null,
                    valid_until: null,
                    status: 'LIVE',
                    created_at: '2017-05-29T06:30:45+00:00',
                    counter: {
                        questions: 1
                    },
                    translations: [{
                        trans_id: 127,
                        language: 'EN',
                        title: 'Topic FirstName7605',
                        description: null,
                        default: true
                    }],
                    topic_user_correlation: {
                        mastered: true,
                        priority: 'LOW',
                        rank: 3,
                        strength: 3,
                        mastered_count: 1,
                        bookmarked_count: 1,
                        backlog_count: 0,
                        updated_at: '2017-07-27T00:04:39+00:00'
                    }
                }, {
                    topic_id: 115,
                    min_mastery_questions: 1,
                    mastery_confidence_count: 2,
                    release_count: 1,
                    release_frequency: '*\/5 * * * *',
                    max_backlog_questions: 1,
                    max_mastery_days: null,
                    valid_from: null,
                    valid_until: null,
                    status: 'LIVE',
                    created_at: '2017-05-29T06:30:50+00:00',
                    counter: {
                        questions: 1
                    },
                    translations: [{
                        trans_id: 130,
                        language: 'EN',
                        title: 'Topic FirstName7929',
                        description: null,
                        default: true
                    }],
                    topic_user_correlation: {
                        mastered: true,
                        priority: 'LOW',
                        rank: 2,
                        strength: 4,
                        mastered_count: 1,
                        bookmarked_count: 0,
                        backlog_count: 0,
                        updated_at: '2017-07-27T00:04:39+00:00'
                    }
                }, {
                    topic_id: 107,
                    min_mastery_questions: 1,
                    mastery_confidence_count: 2,
                    release_count: 1,
                    release_frequency: '*\/5 * * * *',
                    max_backlog_questions: 1,
                    max_mastery_days: null,
                    valid_from: null,
                    valid_until: null,
                    status: 'LIVE',
                    created_at: '2017-05-29T06:30:39+00:00',
                    counter: {
                        questions: 1
                    },
                    translations: [{
                        trans_id: 122,
                        language: 'EN',
                        title: 'Topic FirstName2199',
                        description: null,
                        default: true
                    }],
                    topic_user_correlation: {
                        mastered: true,
                        priority: 'LOW',
                        rank: 2,
                        strength: 4,
                        mastered_count: 1,
                        bookmarked_count: 0,
                        backlog_count: 0,
                        updated_at: '2017-07-27T00:04:39+00:00'
                    }
                }, {
                    topic_id: 110,
                    min_mastery_questions: 1,
                    mastery_confidence_count: 2,
                    release_count: 1,
                    release_frequency: '*\/5 * * * *',
                    max_backlog_questions: 1,
                    max_mastery_days: null,
                    valid_from: null,
                    valid_until: null,
                    status: 'LIVE',
                    created_at: '2017-05-29T06:30:42+00:00',
                    counter: {
                        questions: 1
                    },
                    translations: [{
                        trans_id: 125,
                        language: 'EN',
                        title: 'Topic FirstName2190',
                        description: null,
                        default: true
                    }],
                    topic_user_correlation: {
                        mastered: true,
                        priority: 'LOW',
                        rank: 2,
                        strength: 2,
                        mastered_count: 1,
                        bookmarked_count: 1,
                        backlog_count: 0,
                        updated_at: '2017-07-27T00:04:39+00:00'
                    }
                }],
                pagination: {
                    total: 29,
                    per_page: 15,
                    count: 15,
                    current_page: 1,
                    links: {
                        previous: null,
                        next: 'http:\/\/core.raplstage.com\/api\/history?page=2'
                    }
                }
            });
        }
        if (url === 'bookmarks/106/questions') {
            return Observable.of({
                list: [{
                    question_id: 412,
                    position: 1,
                    choice_view: 'TEXT',
                    created_at: '2017-05-29T06:30:37+00:00',
                    translations: [{
                        trans_id: 442,
                        language: 'EN',
                        question: 'Q1',
                        hint: null,
                        default: true
                    }],
                    assets: [],
                    choices: [{
                        choice_id: 1361,
                        position: 1,
                        created_at: '2017-05-29T06:30:37+00:00',
                        correct: true,
                        translations: [{
                            trans_id: 1362,
                            language: 'EN',
                            choice: 'gone case 2',
                            rationale: null,
                            default: true
                        }],
                        assets: []
                    }, {
                        choice_id: 1360,
                        position: 1,
                        created_at: '2017-05-29T06:30:37+00:00',
                        correct: false,
                        translations: [{
                            trans_id: 1361,
                            language: 'EN',
                            choice: 'gone case',
                            rationale: null,
                            default: true
                        }],
                        assets: []
                    }]
                }],
                pagination: {
                    total: 1,
                    per_page: 15,
                    count: 1,
                    current_page: 1,
                    links: {
                        'previous': null,
                        'next': null
                    }
                }
            });
        }
        if (url === 'topics') {
            return Observable.of([{
                topic_id: 123,
                title: 'NEW WINTER COLLECTION',
                description: 'How well do you know the new winter styles? Take this questions to refresh your knowledge',
                mastered_count: 0,
                questions_count: 10,
                max_daily_questions: 5,
                questions: [{
                    question_id: 11,
                    question: 'Which one of the following is the best choice of fabrics for hot climate?',
                    answers: [{
                        choice_id: 2,
                        choice: 'Acid Wash',
                        correct: false
                    }, {
                        choice_id: 3,
                        choice: 'Bleaching',
                        correct: true
                    }, {
                        choice_id: 4,
                        choice: 'Calendering'
                    }, {
                        choice_id: 5,
                        choice: 'Mercerisation'
                    }]
                }, {
                    question_id: 12,
                    question: 'Which one of the following is the treatment used to achieve this effect for this shirt',
                    choices: [{
                        choice_id: 2,
                        choice: 'Acid Wash'
                    }, {
                        choice_id: 3,
                        choice: 'Bleaching'
                    }, {
                        choice_id: 4,
                        choice: 'Calendering'
                    }, {
                        choice_id: 5,
                        choice: 'Mercerisation'
                    }]
                }, {
                    question_id: 13,
                    question: 'Which accessories should be suggested with the jacket in the picture?',
                    answers: [{
                        choice_id: 2,
                        choice: 'Acid Wash'
                    }, {
                        choice_id: 3,
                        choice: 'Bleaching'
                    }, {
                        choice_id: 4,
                        choice: 'Mercerisation'
                    }, {
                        choice_id: 5,
                        choice: 'Calendering'
                    }]
                }]
            }]);
        }
        if (url === 'perceive' || url === 'history') {
            return Observable.of({
                list: [{
                    topic_id: 123,
                    title: 'NEW WINTER COLLECTION',
                    description: 'How well do you know the new winter styles? Take this questions to refresh your knowledge',
                    mastered_count: 0,
                    questions_count: 10,
                    max_daily_questions: 5,
                    questions: [{
                        question_id: 11,
                        question: 'Which one of the following is the best choice of fabrics for hot climate?',
                        answers: [{
                            choice_id: 2,
                            choice: 'Acid Wash',
                            correct: false
                        }, {
                            choice_id: 3,
                            choice: 'Bleaching',
                            correct: true
                        }, {
                            choice_id: 4,
                            choice: 'Calendering'
                        }, {
                            choice_id: 5,
                            choice: 'Mercerisation'
                        }]
                    }, {
                        question_id: 12,
                        question: 'Which one of the following is the treatment used to achieve this effect for this shirt',
                        choices: [{
                            choice_id: 2,
                            choice: 'Acid Wash'
                        }, {
                            choice_id: 3,
                            choice: 'Bleaching'
                        }, {
                            choice_id: 4,
                            choice: 'Calendering'
                        }, {
                            choice_id: 5,
                            choice: 'Mercerisation'
                        }]
                    }, {
                        question_id: 13,
                        question: 'Which accessories should be suggested with the jacket in the picture?',
                        answers: [{
                            choice_id: 2,
                            choice: 'Acid Wash'
                        }, {
                            choice_id: 3,
                            choice: 'Bleaching'
                        }, {
                            choice_id: 4,
                            choice: 'Mercerisation'
                        }, {
                            choice_id: 5,
                            choice: 'Calendering'
                        }]
                    }]
                }]
            });
        }
        if (url === 'topics/1') {
            return Observable.of({
                topic_id: 1,
                title: 'NEW WINTER COLLECTION',
                description: 'How well do you know the new winter styles? Take this questions to refresh your knowledge',
                mastered_count: 0,
                questions_count: 10,
                max_daily_questions: 5,
                questions: [{
                    question_id: 11,
                    question: 'Which one of the following is the best choice of fabrics for hot climate?',
                    answers: [{
                        choice_id: 2,
                        choice: 'Acid Wash',
                        correct: false
                    }, {
                        choice_id: 3,
                        choice: 'Bleaching',
                        correct: true
                    }, {
                        choice_id: 4,
                        choice: 'Calendering'
                    }, {
                        choice_id: 5,
                        choice: 'Mercerisation'
                    }]
                }, {
                    question_id: 12,
                    question: 'Which one of the following is the treatment used to achieve this effect for this shirt',
                    choices: [{
                        choice_id: 2,
                        choice: 'Acid Wash'
                    }, {
                        choice_id: 3,
                        choice: 'Bleaching'
                    }, {
                        choice_id: 4,
                        choice: 'Calendering'
                    }, {
                        choice_id: 5,
                        choice: 'Mercerisation'
                    }]
                }, {
                    question_id: 13,
                    question: 'Which accessories should be suggested with the jacket in the picture?',
                    answers: [{
                        choice_id: 2,
                        choice: 'Acid Wash'
                    }, {
                        choice_id: 3,
                        choice: 'Bleaching'
                    }, {
                        choice_id: 4,
                        choice: 'Mercerisation'
                    }, {
                        choice_id: 5,
                        choice: 'Calendering'
                    }]
                }]
            });
        }
        if (url === 'topics/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'users') {
            return Observable.of({
                info: {
                    total: 5
                },
                user: [{
                    user_id: 1,
                    first_name: 'Niharika',
                    last_name: 'Sah',
                    email: 'niharika@linkstreet.in',
                    mobile_country_iso: {
                        name: 'India',
                        code: 'IN'
                    },
                    mobile_number: '91-(435)751-9357',
                    is_email_verified: false,
                    is_mobile_verified: false,
                    role: 'org_admin',
                    status: 'active',
                    language: 'en',
                    force_change_password: true,
                    custom: {
                        profile_pic: 'imageurl',
                        gender: 'Female',
                        city: 'Sadar Bazar'
                    },
                    password: 'password',
                    assigned_at: '2016-06-21T11:49:24Z',
                    created_at: '2016-11-01T13:52:11Z',
                    updated_at: '2016-12-06T02:53:10Z'
                }, {
                    user_id: 2,
                    first_name: 'Akhilesh',
                    last_name: 'Bamhore',
                    email: 'akhilesh@linkstreet.in',
                    mobile_country_iso: null,
                    mobile_number: null,
                    is_email_verified: true,
                    is_mobile_verified: false,
                    role: 'org_admin',
                    status: 'active',
                    language: 'en',
                    force_change_password: true,
                    custom: {
                        profile_pic: null,
                        gender: 'Male',
                        city: 'R S'
                    },
                    password: 'password',
                    assigned_at: null,
                    created_at: '2016-04-21T17:37:37Z',
                    updated_at: null
                }, {
                    user_id: 3,
                    first_name: 'Meyyappan',
                    last_name: 'Velayutham',
                    email: 'meyyappan@linkstreet.in',
                    mobile_country_iso: {
                        name: 'India',
                        code: 'IN'
                    },
                    mobile_number: '91-(766)152-6395',
                    is_email_verified: false,
                    is_mobile_verified: true,
                    role: 'org_admin',
                    status: 'active',
                    language: 'ta',
                    force_change_password: false,
                    custom: {
                        profile_pic: 'imageurl',
                        gender: 'Male',
                        city: 'Sadar Bazar'
                    },
                    password: 'password',
                    assigned_at: '2016-12-17T18:38:55Z',
                    created_at: '2017-01-06T11:55:49Z',
                    updated_at: '2017-02-12T00:47:57Z'
                }, {
                    user_id: 4,
                    first_name: 'Pandiya',
                    last_name: 'Raja',
                    email: 'pandiya@linkstreet.in',
                    mobile_country_iso: null,
                    mobile_number: null,
                    is_email_verified: false,
                    is_mobile_verified: true,
                    role: 'node_admin',
                    status: 'active',
                    language: 'en',
                    force_change_password: false,
                    custom: {
                        profile_pic: 'http://www.davidboggitt.com/images/homepage/membership.png',
                        gender: 'Male',
                        city: 'Agraharam'
                    },
                    password: 'password',
                    assigned_at: null,
                    created_at: '2016-11-04T07:54:20Z',
                    updated_at: null
                }, {
                    user_id: 5,
                    first_name: 'Robin',
                    last_name: null,
                    email: 'Robin@linkstreet.in',
                    mobile_country_iso: null,
                    mobile_number: null,
                    is_email_verified: true,
                    is_mobile_verified: false,
                    role: 'learner',
                    status: 'pending',
                    language: 'en',
                    force_change_password: true,
                    custom: {
                        profile_pic: null,
                        gender: 'Female',
                        city: 'Sadar Bazar'
                    },
                    password: 'password',
                    assigned_at: null,
                    created_at: '2016-10-10T17:50:11Z',
                    updated_at: null
                }]
            });
        }
        if (url === 'users/1') {
            return Observable.of({
                user_id: 1,
                first_name: 'Niharika',
                last_name: 'Sah',
                email: 'niharika@linkstreet.in',
                mobile_country_iso: {
                    name: 'India',
                    code: 'IN'
                },
                mobile_number: '91-(435)751-9357',
                is_email_verified: false,
                is_mobile_verified: false,
                role: 'org_admin',
                status: 'active',
                language: 'en',
                force_change_password: true,
                custom: {
                    profile_pic: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTeK87kPcVmSZ5LqA1ypS-ScAMLZ1-Q4GJGqqk1VwUjrWC4aYar',
                    gender: 'Female',
                    city: 'Sadar Bazar'
                },
                password: 'password',
                assigned_at: '2016-06-21T11:49:24Z',
                created_at: '2016-11-01T13:52:11Z',
                updated_at: '2016-12-06T02:53:10Z'
            });
        }
        if (url === 'users/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'monitor/stats') {
            return Observable.of({
                activation: {
                    percentage: 89,
                    trend: 0
                },
                regularity: {
                    percentage: 93,
                    trend: 0
                },
                performance: {
                    percentage: 0,
                    trend: 0
                },
                topic: {
                    count: 8
                }
            });
        }
        if (url === 'nodes/291/users') {
            return Observable.of('success');
        }
        if (url === 'leaderboards/individual') {
            return Observable.of({
                mlb_id: 1,
                language: 'TA',
                enabled: true,
                rollout: true,
                created_at: '2017-09-25T06:41:01+00:00',
                translations: [
                    {
                        trans_id: 1,
                        title: 'Individual Leaderboard',
                        description: null,
                        language: 'EN',
                        default: false
                    },
                    {
                        trans_id: 2,
                        title: 'தனிப்பட்ட லீடர் போர்டு',
                        description: null,
                        language: 'TA',
                        default: true
                    }
                ],
                periods: [
                    {
                        period_id: 1,
                        frequency: 'FORTNIGHT',
                        toppers_limit: 2,
                        winners_limit: 3,
                        allow_multi_win: false,
                        enabled: true,
                        shareable: false,
                        translations: [
                            {
                                trans_id: 14,
                                information: 'पखवाड़े की जानकारी',
                                language: 'HI',
                                default: false
                            },
                            {
                                trans_id: 1,
                                information: 'fortnight info',
                                language: 'EN',
                                default: false
                            },
                            {
                                trans_id: 6,
                                information: 'பதினைந்து தகவல்',
                                language: 'TA',
                                default: true
                            }
                        ]
                    },
                    {
                        period_id: 2,
                        frequency: 'MONTHLY',
                        toppers_limit: 4,
                        winners_limit: 3,
                        allow_multi_win: false,
                        enabled: true,
                        shareable: true,
                        translations: [
                            {
                                trans_id: 2,
                                information: 'Monthly info',
                                language: 'EN',
                                default: false
                            },
                            {
                                trans_id: 7,
                                information: 'மாதாந்த தகவல்',
                                language: 'TA',
                                default: true
                            }
                        ]
                    },
                    {
                        period_id: 3,
                        frequency: 'QUARTERLY',
                        toppers_limit: 6,
                        winners_limit: 5,
                        allow_multi_win: false,
                        enabled: true,
                        shareable: true,
                        translations: [
                            {
                                trans_id: 3,
                                information: 'Quarterly info',
                                language: 'EN',
                                default: false
                            },
                            {
                                trans_id: 8,
                                information: 'காலாண்டு தகவல்',
                                language: 'TA',
                                default: true
                            }
                        ]
                    },
                    {
                        period_id: 4,
                        frequency: 'BIANNUAL',
                        toppers_limit: 8,
                        winners_limit: 5,
                        allow_multi_win: false,
                        enabled: true,
                        shareable: true,
                        translations: [
                            {
                                trans_id: 4,
                                information: 'Half Yearly info',
                                language: 'EN',
                                default: false
                            },
                            {
                                trans_id: 9,
                                information: 'அரை ஆண்டு தகவல்',
                                language: 'TA',
                                default: true
                            }
                        ]
                    },
                    {
                        period_id: 5,
                        frequency: 'ANNUAL',
                        toppers_limit: 10,
                        winners_limit: 5,
                        allow_multi_win: false,
                        enabled: true,
                        shareable: true,
                        translations: [
                            {
                                trans_id: 5,
                                information: 'Yearly info',
                                language: 'EN',
                                default: false
                            },
                            {
                                trans_id: 10,
                                information: 'ஆண்டு தகவல்',
                                language: 'TA',
                                default: true
                            }
                        ]
                    }
                ]
            });
        }
        if (url === 'leaderboards/groups/3') {
            return Observable.of(
                {
                    mlb_id: 3,
                    language: 'EN',
                    enabled: true,
                    rollout: true,
                    created_at: '2017-09 - 25T10: 35: 16+00: 00',
                    nodes_count: 20,
                    translations: [
                        {
                            trans_id: 4,
                            title: 'Accounting',
                            description: null,
                            language: 'EN',
                            default: true
                        },
                        {
                            trans_id: 58,
                            title: '\u0932\u0947\u0916\u093e\u0902\u0915\u0928',
                            description: null,
                            language: 'HI',
                            default: false
                        },
                        {
                            trans_id: 59,
                            title: '\u0b95\u0ba3\u0b95\u0bcd\u0b95\u0bbf\u0baf\u0bb2\u0bcd',
                            description: null,
                            language: 'TA',
                            default: false
                        }
                    ],
                    periods: [
                        {
                            period_id: 11,
                            frequency: 'FORTNIGHT',
                            toppers_limit: 5,
                            winners_limit: 5,
                            allow_multi_win: false,
                            enabled: true,
                            shareable: true,
                            translations: [
                                {
                                    trans_id: 16,
                                    information: 'df sdf sdf s',
                                    language: 'EN',
                                    default: true
                                },
                                {
                                    trans_id: 17,
                                    information: 'hindi lekha',
                                    language: 'HI',
                                    default: false
                                }
                            ]
                        },
                        {
                            period_id: 12,
                            frequency: 'MONTHLY',
                            toppers_limit: 5,
                            winners_limit: 5,
                            allow_multi_win: false,
                            enabled: true,
                            shareable: true,
                            translations: [
                            ]
                        },
                        {
                            period_id: 13,
                            frequency: 'QUARTERLY',
                            toppers_limit: 5,
                            winners_limit: 5,
                            allow_multi_win: false,
                            enabled: true,
                            shareable: true,
                            translations: [
                            ]
                        },
                        {
                            period_id: 14,
                            frequency: 'BIANNUAL',
                            toppers_limit: 5,
                            winners_limit: 5,
                            allow_multi_win: false,
                            enabled: true,
                            shareable: true,
                            translations: [
                            ]
                        },
                        {
                            period_id: 15,
                            frequency: 'ANNUAL',
                            toppers_limit: 5,
                            winners_limit: 5,
                            allow_multi_win: false,
                            enabled: true,
                            shareable: true,
                            translations: [
                            ]
                        }
                    ]
                });
        }
        if (url === 'leaderboards/groups/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'sequences/1001/topics') {
            return Observable.throw('Server Error');
        }
        if (url === 'sequences/1/topics') {
            return Observable.of(
                {
                    sequence_id: 1,
                    valid_from: null,
                    valid_until: null,
                    status: 'DRAFT',
                    created_at: '2017-11-21T06:55:55+00:00',
                    translations: [
                        {
                            trans_id: 36,
                            language: 'EN',
                            title: 'test',
                            description: 'test',
                            default: true
                        }
                    ]
                });
        }
        if (url === 'sequences/1/prospectTopics?filter[translations.title]=tes') {
            return Observable.of(
                {
                    list: [
                        {
                            topic_id: 1,
                            min_mastery_questions: 1,
                            mastery_confidence_count: 2,
                            release_count: 1,
                            release_frequency: {
                                days: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    0
                                ],
                                hour: 14,
                                minute: 30,
                                expression: '30 14 * * 1,2,3,4,5,6,0'
                            },
                            max_backlog_questions: 1,
                            max_mastery_days: null,
                            valid_from: '2017-05-25T18:30:00+00:00',
                            valid_until: '2017-11-30T18:29:00+00:00',
                            initial_shuffle: false,
                            status: 'LIVE',
                            created_at: '2017-05-22T04:37:52+00:00',
                            translations: [
                                {
                                    trans_id: 37,
                                    language: 'EN',
                                    title: 'test',
                                    escription: 'sdwe',
                                    default: true
                                }
                            ]
                        },
                        {
                            topic_id: 253,
                            min_mastery_questions: 1,
                            mastery_confidence_count: 1,
                            release_count: 1,
                            release_frequency: {
                                days: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    0
                                ],
                                hour: 4,
                                minute: 45,
                                expression: '45 4 * * 1,2,3,4,5,6,0'
                            },
                            max_backlog_questions: 10,
                            max_mastery_days: null,
                            valid_from: null,
                            valid_until: null,
                            initial_shuffle: false,
                            status: 'LIVE',
                            created_at: '2017-09-25T11:57:20+00:00',
                            translations: [
                                {
                                    trans_id: 286,
                                    language: 'EN',
                                    title: 'Test 10 points',
                                    description: 'Test 10 points',
                                    default: true
                                }
                            ]
                        }
                    ],
                    pagination: {
                        total: 7,
                        per_page: 15,
                        count: 7,
                        current_page: 1,
                        links: {
                            previous: null,
                            next: null
                        }
                    }
                });
        }
        if (url === 'packages/1') {
            return Observable.of({
                package_id: 1,
                name: 'test',
                description: 'test',
                counter: {
                    file_count: 1
                },
                created_at: '2018-01-23T06:03:26+00:00',
                owner: {
                    user_id: 3,
                    first_name: 'Meyyappan',
                    last_name: 'vell',
                    email: 'admin@avengers.in'
                }
            });
        }
        if (url === 'packages/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'bucket/categories?sort_by=-created_at&filter[name]=test') {
            return Observable.of({
                list: [
                    {
                        category_id: 31,
                        name: 'test',
                        description: null,
                        counter: {
                            file_count: 0
                        },
                        created_at: '2018-01-30T06:45:36+00:00',
                        owner: {
                            user_id: 3,
                            first_name: 'Meyyappan',
                            last_name: 'vel',
                            email: 'admin@avengers.in'
                        }
                    },
                    {
                        category_id: 9,
                        name: 'testtt',
                        description: null,
                        counter: {
                            file_count: 0
                        },
                        created_at: '2018-01-29T11:13:36+00:00',
                        owner: {
                            user_id: 4,
                            first_name: 'Akhilesh',
                            last_name: 'Bamhore',
                            email: 'akhilesh@avengers.in'
                        }
                    }
                ],
                pagination: {
                    total: 2,
                    per_page: 15,
                    count: 2,
                    current_page: 1,
                    links: {
                        previous: null,
                        next: null
                    }
                }
            });
        }
        if (url === 'topics/1') {
            return Observable.of({});
        }
        if (url === 'topics/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1') {
            return Observable.of({});
        }
        if (url === 'nodes/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'questions/1') {
            return Observable.of(
                {
                    question_id: 1,
                    position: 1,
                    choice_view: 'TEXT',
                    created_at: '2018-01-09T12:40:42+00:00',
                    translations: [
                        {
                            'trans_id': 1392,
                            'language': 'EN',
                            'question': 'q1',
                            'hint': null,
                            'default': true
                        }
                    ],
                    'assets': [
                        {
                            'asset_id': 2914,
                            'name': 'badge.png',
                            'unique_id': 'b6458b2b-aa23-4e48-b4f0-d68a985ea6c6',
                            'type': 'IMAGE',
                            'extension': 'png',
                            'mime_type': 'image\/png',
                            'created_at': '2018-02-08T11:45:13+00:00',
                            'renditions': [
                                {
                                    'rendition_id': 7272,
                                    'width': 60,
                                    'height': 86,
                                    'size': 7550,
                                    'source': 'abc.png',
                                    'is_master': true
                                }
                            ]
                        }
                    ],
                    'choices': [
                        {
                            'choice_id': 4452,
                            'position': 1,
                            'created_at': '2018-01-09T12:40:42+00:00',
                            'correct': true,
                            'translations': [
                                {
                                    'trans_id': 4671,
                                    'language': 'EN',
                                    'choice': '1',
                                    'rationale': null,
                                    'default': true
                                }
                            ],
                            'assets': [
                            ]
                        },
                        {
                            'choice_id': 4453,
                            'position': 2,
                            'created_at': '2018-01-09T12:40:42+00:00',
                            'correct': false,
                            'translations': [
                                {
                                    'trans_id': 4672,
                                    'language': 'EN',
                                    'choice': '2',
                                    'rationale': null,
                                    'default': true
                                }
                            ],
                            'assets': [
                            ]
                        }
                    ]
                });
        }
        if (url === 'questions/2') {
            return Observable.of({
                question_id: 2,
                position: 1,
                choice_view: 'IMAGE',
                created_at: '2018-01-09T12:40:42+00:00',
                translations: [
                    {
                        trans_id: 1392,
                        language: 'EN',
                        question: 'q1',
                        hint: null,
                        default: true
                    }
                ],
                assets: [
                    {
                        asset_id: 2914,
                        name: 'badge.png',
                        unique_id: 'b6458b2b-aa23-4e48-b4f0-d68a985ea6c6',
                        type: 'IMAGE',
                        extension: 'png',
                        mime_type: 'image\/png',
                        created_at: '2018-02-08T11:45:13+00:00',
                        renditions: [
                            {
                                rendition_id: 7272,
                                width: 60,
                                height: 86,
                                size: 7550,
                                source: 'aMdgsG.png',
                                is_master: true
                            }
                        ]
                    }
                ],
                choices: [
                    {
                        choice_id: 4452,
                        position: 1,
                        created_at: '2018-01-09T12:40:42+00:00',
                        correct: true,
                        translations: [
                            {
                                trans_id: 4671,
                                language: 'EN',
                                choice: null,
                                rationale: null,
                                default: true
                            }
                        ],
                        assets: [
                            {
                                asset_id: 2925,
                                name: 'Screenshot from 2018-02-09 12-37-46.png',
                                unique_id: '4053ecf2-ac89-4372-a4c2-f2ab8505c0d2',
                                type: 'IMAGE',
                                extension: 'png',
                                mime_type: 'image\/png',
                                created_at: '2018-02-09T08:55:00+00:00',
                                renditions: [
                                    {
                                        rendition_id: 7323,
                                        width: 240,
                                        height: 136,
                                        size: 14482,
                                        source: 'z9IAiufhghghghzKxnmvYo.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7324,
                                        width: 480,
                                        height: 271,
                                        size: 40055,
                                        source: 'gfhAiu1T0rpzKxnmvYo.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7325,
                                        width: 600,
                                        height: 339,
                                        size: 56850,
                                        source: 'z9IAiu1T0rpzKxnmvYo.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7326,
                                        width: 720,
                                        height: 407,
                                        size: 74476,
                                        source: 'z9IAiu1T0rpzKxnmfgfgvYo.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7322,
                                        width: 1360,
                                        height: 768,
                                        size: 150470,
                                        source: '72-a4c2-f2ab8505c0d2\/dtNU45I81HPXXG58yHvTlQX4zNrhrPcu4qkQGV6B.png',
                                        is_master: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        choice_id: 4453,
                        position: 2,
                        created_at: '2018-01-09T12:40:42+00:00',
                        correct: false,
                        translations: [
                            {
                                trans_id: 4672,
                                language: 'EN',
                                choice: null,
                                rationale: null,
                                default: true
                            }
                        ],
                        assets: [
                            {
                                asset_id: 2926,
                                name: 'Screenshot from 2018-02-09 12-44-08.png',
                                unique_id: '40a089c2-ecae-431a-aa63-f302df405431',
                                type: 'IMAGE',
                                extension: 'png',
                                mime_type: 'image\/png',
                                created_at: '2018-02-09T08:55:08+00:00',
                                renditions: [
                                    {
                                        rendition_id: 7328,
                                        width: 240,
                                        height: 136,
                                        size: 15575,
                                        source: 'voebJZSupKaKRS5c6UT2ZQl3.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7329,
                                        width: 480,
                                        height: 271,
                                        size: 44292,
                                        source: 'z5pDSKDX0SFBWIrh.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7330,
                                        width: 600,
                                        height: 339,
                                        size: 63020,
                                        source: 'M0Llr88USmO3S2Q.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7331,
                                        width: 720,
                                        height: 407,
                                        size: 82006,
                                        source: '9yog27Q1G6zZk4Au8tCpRwR.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7332,
                                        width: 1080,
                                        height: 610,
                                        size: 150381,
                                        source: 'qGBap8kj3Yb6Vwo5.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7327,
                                        width: 1360,
                                        height: 768,
                                        size: 163546,
                                        source: 'o0QvxCJ.png',
                                        is_master: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        }
        if (url === 'questions/3') {
            return Observable.of({
                'question_id': 1291,
                'position': 1,
                'choice_view': 'HYBRID',
                'created_at': '2018-01-09T12:40:42+00:00',
                'translations': [
                    {
                        'trans_id': 1392,
                        'language': 'EN',
                        'question': 'q1',
                        'hint': null,
                        'default': true
                    }
                ],
                'assets': [
                    {
                        'asset_id': 2914,
                        'name': 'badge.png',
                        'unique_id': 'b6458b2b-aa23-4e48-b4f0-d68a985ea6c6',
                        'type': 'IMAGE',
                        'extension': 'png',
                        'mime_type': 'image\/png',
                        'created_at': '2018-02-08T11:45:13+00:00',
                        'renditions': [
                            {
                                'rendition_id': 7272,
                                'width': 60,
                                'height': 86,
                                'size': 7550,
                                'source': 'FKaMdgsG.png',
                                'is_master': true
                            }
                        ]
                    }
                ],
                'choices': [
                    {
                        'choice_id': 4452,
                        'position': 1,
                        'created_at': '2018-01-09T12:40:42+00:00',
                        'correct': true,
                        'translations': [
                            {
                                'trans_id': 4671,
                                'language': 'EN',
                                'choice': 'c1',
                                'rationale': null,
                                'default': true
                            }
                        ],
                        'assets': [
                            {
                                'asset_id': 2925,
                                'name': 'Screenshot from 2018-02-09 12-37-46.png',
                                'unique_id': '4053ecf2-ac89-4372-a4c2-f2ab8505c0d2',
                                'type': 'IMAGE',
                                'extension': 'png',
                                'mime_type': 'image\/png',
                                'created_at': '2018-02-09T08:55:00+00:00',
                                'renditions': [
                                    {
                                        'rendition_id': 7323,
                                        'width': 240,
                                        'height': 136,
                                        'size': 14482,
                                        'source': 'NvPQBS8l.png',
                                        'is_master': false
                                    },
                                    {
                                        'rendition_id': 7324,
                                        'width': 480,
                                        'height': 271,
                                        'size': 40055,
                                        'source': 'mSPKjhAMsuJJaeiw5G4XbflG4rJCX1O8Bmcj.png',
                                        'is_master': false
                                    },
                                    {
                                        'rendition_id': 7325,
                                        'width': 600,
                                        'height': 339,
                                        'size': 56850,
                                        'source': 'uG8bqzAGmyz9IAiu1T0rpzKxnmvYo.png',
                                        'is_master': false
                                    },
                                    {
                                        'rendition_id': 7326,
                                        'width': 720,
                                        'height': 407,
                                        'size': 74476,
                                        'source': 'muoq7MVVPVoLT2AYHC0s6ddVPNb0.png',
                                        'is_master': false
                                    },
                                    {
                                        'rendition_id': 7333,
                                        'width': 1080,
                                        'height': 610,
                                        'size': 136714,
                                        'source': 'qiOV1LQM1WSGm6xXFIafdkCxIIs6jqV.png',
                                        'is_master': false
                                    },
                                    {
                                        'rendition_id': 7322,
                                        'width': 1360,
                                        'height': 768,
                                        'size': 150470,
                                        'source': 'dtNU45I81HPXXG58yHvTlQX4zNrhrPcu4qkQGV6B.png',
                                        'is_master': true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'choice_id': 4453,
                        'position': 2,
                        'created_at': '2018-01-09T12:40:42+00:00',
                        'correct': false,
                        'translations': [
                            {
                                'trans_id': 4672,
                                'language': 'EN',
                                'choice': 'c2',
                                'rationale': null,
                                'default': true
                            }
                        ],
                        'assets': [
                            {
                                'asset_id': 2926,
                                'name': 'Screenshot from 2018-02-09 12-44-08.png',
                                'unique_id': '40a089c2-ecae-431a-aa63-f302df405431',
                                'type': 'IMAGE',
                                'extension': 'png',
                                'mime_type': 'image\/png',
                                'created_at': '2018-02-09T08:55:08+00:00',
                                'renditions': [
                                    {
                                        'rendition_id': 7328,
                                        'width': 240,
                                        'height': 136,
                                        'size': 15575,
                                        'source': 'SCdwg2wBN3zMHvoebJZSupKaKRS5c6UT2ZQl3.png',
                                        'is_master': false
                                    },
                                    {
                                        'rendition_id': 7329,
                                        'width': 480,
                                        'height': 271,
                                        'size': 44292,
                                        'source': '31\/sLxhd8s9LkZdW3Tt2WYmXgG7z5pDSKDX0SFBWIrh.png',
                                        'is_master': false
                                    },
                                    {
                                        'rendition_id': 7330,
                                        'width': 600,
                                        'height': 339,
                                        'size': 63020,
                                        'source': '6WRuB3vevq7x5llCm8M0Llr88USmO3S2Q.png',
                                        'is_master': false
                                    },
                                    {
                                        'rendition_id': 7331,
                                        'width': 720,
                                        'height': 407,
                                        'size': 82006,
                                        'source': 'Rzcx00Q3mCu9yog27Q1G6zZk4Au8tCpRwR.png',
                                        'is_master': false
                                    },
                                    {
                                        'rendition_id': 7332,
                                        'width': 1080,
                                        'height': 610,
                                        'size': 150381,
                                        'source': 'rdeIfbgLkRJFymPHKoqGBap8kj3Yb6Vwo5.png',
                                        'is_master': false
                                    },
                                    {
                                        'rendition_id': 7327,
                                        'width': 1360,
                                        'height': 768,
                                        'size': 163546,
                                        'source': 'tPTBmj6vxtJKihkTU369sCJfMo0QvxCJ.png',
                                        'is_master': true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        }
        if (url === 'questions/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'sequences/1') {
            return Observable.of({
                sequence_id: 1,
                valid_from: null,
                valid_until: null,
                status: 'DRAFT',
                created_at: '2018-02-12T05:58:10+00:00',
                translations: [
                    {
                        trans_id: 75,
                        language: 'EN',
                        title: 'test',
                        description: 'test',
                        default: true
                    }
                ]
            });
        }
        if (url === 'orgs/customProfileFields') {
            return Observable.of({
                list: [
                    {
                        property_id: 1,
                        property: 'gender',
                        label: 'Gender',
                        is_mandatory: true,
                        component_type: 'DROPDOWN',
                        allowed_values: ['female', 'male']
                    },
                    {
                        property_id: 2,
                        property: 'id',
                        label: 'ID',
                        is_mandatory: true,
                        component_type: 'DESCRIPTIVE',
                        allowed_values: []
                    },
                    {
                        property_id: 3,
                        property: 'employe-id',
                        label: 'Employe ID',
                        is_mandatory: true,
                        component_type: 'DESCRIPTIVE',
                        allowed_values: []
                    }
                ]
            });
        }
        if (url === 'imports/templates') {
            return Observable.of({
                list: [
                    {
                        template_id: 1,
                        name: 'create_users',
                        label: 'Create users',
                        group: 'USER',
                        description: null,
                        template_url: 'http:\/\/core.raplstage.com\/api\/imports\/templates\/download?action=create_users'
                    },
                    {
                        template_id: 2,
                        name: 'delete_users',
                        label: 'Delete users',
                        group: 'USER',
                        description: null,
                        template_url: 'http:\/\/core.raplstage.com\/api\/imports\/templates\/download?action=delete_users'
                    },
                    {
                        template_id: 3,
                        name: 'assign_users',
                        label: 'Assign users',
                        group: 'USER',
                        description: null,
                        template_url: 'http:\/\/core.raplstage.com\/api\/imports\/templates\/download?action=assign_users'
                    },

                ],
                pagination: {
                    total: 3,
                    per_page: 15,
                    count: 3,
                    current_page: 1,
                    links: {
                        previous: null,
                        next: null
                    }
                }
            });
        }
        return Observable.of();
    }
    put(url: string, data: any) {
        if (url === 'profile/language/123') {
            return Observable.of([{
                user_id: 123,
                email: data.email,
                first_name: 'testuser',
                language: 'ta'
            }]);
        }
        if (url === 'questions/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'questions/1') {
            return Observable.of({
                'question_id': 1,
                'position': 12,
                'choice_view': 'TEXT',
                'created_at': '2017-07-17T07:28:43+00:00',
                'translations': [{
                    'trans_id': 1080,
                    'language': 'en',
                    'question': 'question 1',
                    'hint': null,
                    'default': true
                }],
                'assets': [],
                'choices': [{
                    'choice_id': 3386,
                    'position': 1,
                    'created_at': '2017-07-17T07:28:43+00:00',
                    'correct': true,
                    'translations': [{
                        'trans_id': 3558,
                        'language': 'en',
                        'choice': 'choice 11',
                        'rationale': null,
                        'default': true
                    }],
                    'assets': []
                }, {
                    'choice_id': 3387,
                    'position': 2,
                    'created_at': '2017-07-17T07:28:43+00:00',
                    'correct': false,
                    'translations': [{
                        'trans_id': 3559,
                        'language': 'en',
                        'choice': 'choice 22',
                        'rationale': null,
                        'default': true
                    }],
                    'assets': []
                }]
            });
        }
        if (url === 'questions/2') {
            return Observable.of({
                question_id: 2,
                position: 1,
                choice_view: 'IMAGE',
                created_at: '2018-01-09T12:40:42+00:00',
                translations: [
                    {
                        trans_id: 1392,
                        language: 'EN',
                        question: 'q1',
                        hint: null,
                        default: true
                    }
                ],
                assets: [
                    {
                        asset_id: 2914,
                        name: 'badge.png',
                        unique_id: 'b6458b2b-aa23-4e48-b4f0-d68a985ea6c6',
                        type: 'IMAGE',
                        extension: 'png',
                        mime_type: 'image\/png',
                        created_at: '2018-02-08T11:45:13+00:00',
                        renditions: [
                            {
                                rendition_id: 7272,
                                width: 60,
                                height: 86,
                                size: 7550,
                                source: 'aMdgsG.png',
                                is_master: true
                            }
                        ]
                    }
                ],
                choices: [
                    {
                        choice_id: 4452,
                        position: 1,
                        created_at: '2018-01-09T12:40:42+00:00',
                        correct: true,
                        translations: [
                            {
                                trans_id: 4671,
                                language: 'EN',
                                choice: null,
                                rationale: null,
                                default: true
                            }
                        ],
                        assets: [
                            {
                                asset_id: 2925,
                                name: 'Screenshot from 2018-02-09 12-37-46.png',
                                unique_id: '4053ecf2-ac89-4372-a4c2-f2ab8505c0d2',
                                type: 'IMAGE',
                                extension: 'png',
                                mime_type: 'image\/png',
                                created_at: '2018-02-09T08:55:00+00:00',
                                renditions: [
                                    {
                                        rendition_id: 7323,
                                        width: 240,
                                        height: 136,
                                        size: 14482,
                                        source: 'z9IAiufhghghghzKxnmvYo.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7324,
                                        width: 480,
                                        height: 271,
                                        size: 40055,
                                        source: 'gfhAiu1T0rpzKxnmvYo.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7325,
                                        width: 600,
                                        height: 339,
                                        size: 56850,
                                        source: 'z9IAiu1T0rpzKxnmvYo.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7326,
                                        width: 720,
                                        height: 407,
                                        size: 74476,
                                        source: 'z9IAiu1T0rpzKxnmfgfgvYo.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7322,
                                        width: 1360,
                                        height: 768,
                                        size: 150470,
                                        source: '72-a4c2-f2ab8505c0d2\/dtNU45I81HPXXG58yHvTlQX4zNrhrPcu4qkQGV6B.png',
                                        is_master: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        choice_id: 4453,
                        position: 2,
                        created_at: '2018-01-09T12:40:42+00:00',
                        correct: false,
                        translations: [
                            {
                                trans_id: 4672,
                                language: 'EN',
                                choice: null,
                                rationale: null,
                                default: true
                            }
                        ],
                        assets: [
                            {
                                asset_id: 2926,
                                name: 'Screenshot from 2018-02-09 12-44-08.png',
                                unique_id: '40a089c2-ecae-431a-aa63-f302df405431',
                                type: 'IMAGE',
                                extension: 'png',
                                mime_type: 'image\/png',
                                created_at: '2018-02-09T08:55:08+00:00',
                                renditions: [
                                    {
                                        rendition_id: 7328,
                                        width: 240,
                                        height: 136,
                                        size: 15575,
                                        source: 'voebJZSupKaKRS5c6UT2ZQl3.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7329,
                                        width: 480,
                                        height: 271,
                                        size: 44292,
                                        source: 'z5pDSKDX0SFBWIrh.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7330,
                                        width: 600,
                                        height: 339,
                                        size: 63020,
                                        source: 'M0Llr88USmO3S2Q.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7331,
                                        width: 720,
                                        height: 407,
                                        size: 82006,
                                        source: '9yog27Q1G6zZk4Au8tCpRwR.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7332,
                                        width: 1080,
                                        height: 610,
                                        size: 150381,
                                        source: 'qGBap8kj3Yb6Vwo5.png',
                                        is_master: false
                                    },
                                    {
                                        rendition_id: 7327,
                                        width: 1360,
                                        height: 768,
                                        size: 163546,
                                        source: 'o0QvxCJ.png',
                                        is_master: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        }
        if (url === 'questions/3') {
            return Observable.of({
                'question_id': 3,
                'position': 12,
                'choice_view': 'TEXT_IMAGE',
                'created_at': '2017-07-17T07:28:43+00:00',
                'translations': [{
                    'trans_id': 1080,
                    'language': 'en',
                    'question': 'question 1',
                    'hint': null,
                    'default': true
                }],
                'assets': [],
                'choices': [{
                    'choice_id': 3386,
                    'position': 1,
                    'created_at': '2017-07-17T07:28:43+00:00',
                    'correct': true,
                    'translations': [{
                        'trans_id': 3558,
                        'language': 'en',
                        'choice': 'choice 11',
                        'rationale': null,
                        'default': true
                    }],
                    'assets': []
                }, {
                    'choice_id': 3387,
                    'position': 2,
                    'created_at': '2017-07-17T07:28:43+00:00',
                    'correct': false,
                    'translations': [{
                        'trans_id': 3559,
                        'language': 'en',
                        'choice': 'choice 22',
                        'rationale': null,
                        'default': true
                    }],
                    'assets': []
                }]
            });
        }

        if (url === 'leaderboards/individual') {
            if (data.mlb_id !== 1) {
                return Observable.throw('Server error');
            } else {
                return Observable.of(
                    {
                        mlb_id: 97,
                        language: 'EN',
                        enabled: false,
                        rollout: false,
                        created_at: '2017-12-29T05:57:24+00:00',
                        nodes_count: null,
                        translations: [
                            {
                                trans_id: 104,
                                title: 'test',
                                description: null,
                                language: 'EN',
                                default: true
                            }
                        ],
                        periods: [
                            {
                                period_id: 485,
                                frequency: 'ANNUAL',
                                toppers_limit: 5,
                                winners_limit: 3,
                                allow_multi_win: false,
                                enabled: false,
                                shareable: false,
                                translations: [
                                ]
                            },
                            {
                                period_id: 484,
                                frequency: 'BIANNUAL',
                                toppers_limit: 5,
                                winners_limit: 3,
                                allow_multi_win: false,
                                enabled: false,
                                shareable: false,
                                translations: [
                                ]
                            },
                            {
                                period_id: 483,
                                frequency: 'QUARTERLY',
                                toppers_limit: 5,
                                winners_limit: 3,
                                allow_multi_win: false,
                                enabled: false,
                                shareable: false,
                                translations: [
                                ]
                            },
                            {
                                period_id: 482,
                                frequency: 'MONTHLY',
                                toppers_limit: 5,
                                winners_limit: 3,
                                allow_multi_win: false,
                                enabled: false,
                                shareable: false,
                                translations: [
                                ]
                            },
                            {
                                period_id: 481,
                                frequency: 'FORTNIGHT',
                                toppers_limit: 5,
                                winners_limit: 3,
                                allow_multi_win: false,
                                enabled: true,
                                shareable: false,
                                translations: [
                                    {
                                        trans_id: 27,
                                        information: 'test fornight',
                                        language: 'EN',
                                        default: true
                                    }
                                ]
                            }
                        ]
                    }
                );
            }
        }
        if (url === 'leaderboards/groups/1001/nodes') {
            return Observable.throw('server error');
        }
        if (url === 'leaderboards/groups/3/nodes') {
            return Observable.of({
                list: [
                    {
                        node_id: 1,
                        name: 'Human Resources'
                    },
                    {
                        node_id: 26,
                        name: 'Child Node 1'
                    },
                    {
                        node_id: 27,
                        name: 'Child Node 2 updated'
                    },
                    {
                        node_id: 28,
                        name: 'Child Node 3'
                    }
                ],
                pagination: {
                    total: 4,
                    per_page: 15,
                    count: 4,
                    current_page: 1,
                    links: {
                        previous: null,
                        next: null
                    }
                }
            });
        }
        if (url === 'leaderboards/groups/1001') {
            return Observable.throw('server error');
        }
        if (url === 'leaderboards/groups/1') {
            return Observable.of({
                mlb_id: 1,
                language: 'EN',
                enabled: false,
                rollout: false,
                created_at: '2018-01-16T11:39:02+00:00',
                nodes_count: null,
                translations: [
                    {
                        trans_id: 114,
                        title: 'test',
                        description: 'test',
                        language: 'EN',
                        default: true
                    }
                ],
                periods: [
                    {
                        period_id: 535,
                        frequency: 'ANNUAL',
                        toppers_limit: 5,
                        winners_limit: 3,
                        allow_multi_win: false,
                        enabled: false,
                        shareable: false,
                        translations: [
                        ]
                    },
                    {
                        period_id: 534,
                        frequency: 'BIANNUAL',
                        toppers_limit: 5,
                        winners_limit: 3,
                        allow_multi_win: false,
                        enabled: false,
                        shareable: false,
                        translations: [
                        ]
                    },
                    {
                        period_id: 533,
                        frequency: 'QUARTERLY',
                        toppers_limit: 5,
                        winners_limit: 3,
                        allow_multi_win: false,
                        enabled: false,
                        shareable: false,
                        translations: [
                        ]
                    },
                    {
                        period_id: 532,
                        frequency: 'MONTHLY',
                        toppers_limit: 5,
                        winners_limit: 3,
                        allow_multi_win: false,
                        enabled: false,
                        shareable: false,
                        translations: [
                        ]
                    },
                    {
                        period_id: 531,
                        frequency: 'FORTNIGHT',
                        toppers_limit: 5,
                        winners_limit: 3,
                        allow_multi_win: false,
                        enabled: true,
                        shareable: false,
                        translations: [
                            {
                                trans_id: 56,
                                information: 'test',
                                language: 'EN',
                                default: true
                            }
                        ]
                    }
                ]
            });
        }
        if (url === 'sequences/1/topics') {
            return Observable.of({
                topic_id: 64,
                title: 'pandiya Topics',
                position: 1,
                created_at: '2017 - 05 - 26T05: 19: 14+00: 00',
                criteria: [
                    {
                        criterion: 'ON_TOPIC_MASTERY',
                        value: true
                    }
                ]
            },
                {
                    topic_id: 64,
                    title: 'pandiya Topics',
                    position: 1,
                    created_at: '2017-05-26T05:19:14+00:00',
                    criteria: [
                        {
                            criterion: 'ON_TOPIC_MASTERY',
                            value: true
                        }
                    ]
                });
        }
        if (url === 'bucket/categories/1') {
            return Observable.of({
                category_id: 1,
                name: 'test name',
                description: 'test desc',
                counter: {
                    file_count: 0
                },
                created_at: '2018-01-22T10:21:12+00:00'
            });
        }
        if (url === 'bucket/categories/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'packages/1/files') {
            return Observable.of({});
        }
        if (url === 'packages/1001/files') {
            return Observable.throw('Server error');
        }
        if (url === 'packages/1') {
            return Observable.of({});
        }
        if (url === 'packages/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1/packages') {
            if (data.package_ids[0] === 1220) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'nodes/1001/packages') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1/insights') {
            if (data.insight_ids[0] === 1220) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'nodes/1001/insights') {
            return Observable.throw('Server error');
        }
        if (url === 'topics/1/packages') {
            if (data.package_ids[0] === 1220) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'topics/1001/packages') {
            return Observable.throw('Server error');
        }
        if (url === 'bucket/folders/1') {
            return Observable.of({});
        }
        if (url === 'bucket/folders/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'bucket/files/1') {
            return Observable.of({});
        }
        if (url === 'users/1') {
            return Observable.of({
                user_id: 1,
                first_name: 'test',
                last_name: 'avenger',
                email: 'test@avengers.com',
                mobile_number: null,
                is_email_verified: true,
                is_mobile_verified: false,
                role: 'USER',
                status: 'ACTIVE',
                language: 'TA',
                force_change_password: false,
                avatar: null,
                invited_at: null,
                activated_at: '2018-01-22T05:58:50+00:00',
                created_at: '2018-01-22T05:58:06+00:00',
                nodes: [],
                custom_profile_fields: [],
                selected: true
            });
        }
        if (url === 'nodes/1001/users') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1/users') {
            return Observable.of({});
        }
        if (url === 'nodes/1001/sequences') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1/sequences') {
            return Observable.of({});
        }
        if (url === 'nodes/1001/topics') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1/topics') {
            return Observable.of({});
        }
        if (url === 'orgs/customProfileFields/1') {
            return Observable.of({});
        }
        if (url === 'orgs/customProfileFields/1001') {
            return Observable.throw('Server error');
        }
        return Observable.of();
    }
    patch(url: string, data: any) {
        if (url === 'profile/password/123') {
            return Observable.of([{
                user_id: 123,
                email: data.email,
                first_name: 'testuser'
            }]);
        }
        if (url === 'profile') {
            return Observable.of([{
                user_id: 123,
                last_name: null,
                first_name: 'testuser'
            }]);
        }
        if (url === 'topics/1') {
            return Observable.of({
                'topic_id': 1,
                'min_mastery_questions': null,
                'release_count': null,
                'release_frequency': null,
                'max_backlog_questions': null,
                'max_mastery_days': null,
                'valid_from': null,
                'valid_until': null,
                'status': 'DRAFT',
                'created_at': '2017-07-14T12:03:44+00:00',
                'translations': [{
                    'trans_id': 248,
                    'language': 'en',
                    'title': 'sample new',
                    'description': 'sample new',
                    'default': true
                }]
            });
        }
        if (url === 'topics/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'topics/220') {
            return Observable.of({
                topic_id: 314,
                min_mastery_questions: 1,
                mastery_confidence_count: 1,
                release_count: 1,
                release_frequency: {
                    days: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        0
                    ],
                    hour: 6,
                    minute: 30,
                    expression: '30 6 * * 1,2,3,4,5,6,0'
                },
                max_backlog_questions: 1,
                max_mastery_days: null,
                valid_from: '2018-01-03T18:30:00+00:00',
                valid_until: '2018-01-31T18:29:00+00:00',
                status: 'LIVE',
                created_at: '2018-01-04T06:11:55+00:00',
                translations: [
                    {
                        trans_id: 350,
                        language: 'EN',
                        title: 'test topic',
                        description: 'topic desc',
                        default: true
                    }
                ],
                owner: {
                    user_id: 3,
                    first_name: 'Meyyappan',
                    last_name: 'Vel',
                    email: 'admin@avengers.in'
                }
            });
        }
        if (url === 'sequences/1') {
            return Observable.of({
                sequence_id: 65,
                valid_from: null,
                valid_until: null,
                status: 'DRAFT',
                created_at: '2018-01-17T12:18:46+00:00',
                translations: [
                    {
                        trans_id: 70,
                        language: 'EN',
                        title: 'test title',
                        description: 'test desc',
                        default: true
                    }
                ]
            });
        }
        if (url === 'sequences/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'topics/1/markAsInactive') {
            return Observable.of({});
        }
        if (url === 'topics/1001/markAsInactive') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1/users') {
            return Observable.of({});
        }
        if (url === 'nodes/1001/users') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1') {
            return Observable.of({});
        }
        if (url === 'nodes/1001') {
            return Observable.throw('Server error');
        }
        if (url === 'sequences/1') {
            return Observable.of({});
        }
        return Observable.of();
    }
    post(url: string, data: any) {
        if (url === 'login/lookup/user') {
            return Observable.of({
                user_id: 123,
                email: data.email,
                first_name: 'testuser',
                language: 'en',
                'action': 'ASK_PASSWORD'
            });
        }
        if (url === 'login/challenge/password') {
            return Observable.of({
                user_id: 123,
                email: data.email,
                first_name: 'testuser',
                language: 'en',
                token: 'Bearer fake-jwt-token'
            });
        }
        if (url === 'profile/code') {
            return Observable.of({
                user_id: 123,
                username: data
            });
        }
        if (url === 'login/lookup/code') {
            return Observable.of({});
        }
        if (url === 'assert/123') {
            return Observable.of({
                question_user_correlation: {
                    mastered: true,
                    correct: true
                },
                choices: [{
                    user_choice: true,
                    correct: true
                }]
            });
        }
        if (url === 'bookmarks') {
            return Observable.of([{
                question_id: 123
            }]);
        }
        if (url === 'topics') {
            if (data.translations[0].title === 'error') {
                return Observable.throw('Server error');
            } else {
                return Observable.of({
                    'topic_id': 220,
                    'min_mastery_questions': null,
                    'release_count': null,
                    'release_frequency': null,
                    'max_backlog_questions': null,
                    'max_mastery_days': null,
                    'valid_from': null,
                    'valid_until': null,
                    'status': 'DRAFT',
                    'created_at': '2017-07-14T12:03:44+00:00',
                    'translations': [{
                        'trans_id': 248,
                        'language': 'en',
                        'title': 'sample new',
                        'description': 'sample new',
                        'default': true
                    }]
                });
            }
        }
        if (url === 'questions') {
            if (data.position === 101) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({
                    'question_id': 1,
                    'position': 12,
                    'choice_view': 'TEXT',
                    'created_at': '2017-07-17T07:28:43+00:00',
                    'translations': [{
                        'trans_id': 1080,
                        'language': 'en',
                        'question': 'question 1',
                        'hint': null,
                        'default': true
                    }],
                    'assets': [],
                    'choices': [{
                        'choice_id': 3386,
                        'position': 1,
                        'created_at': '2017-07-17T07:28:43+00:00',
                        'correct': true,
                        'translations': [{
                            'trans_id': 3558,
                            'language': 'en',
                            'choice': 'choice 1',
                            'rationale': null,
                            'default': true
                        }],
                        'assets': []
                    }, {
                        'choice_id': 3387,
                        'position': 2,
                        'created_at': '2017-07-17T07:28:43+00:00',
                        'correct': false,
                        'translations': [{
                            'trans_id': 3559,
                            'language': 'en',
                            'choice': 'choice 2',
                            'rationale': null,
                            'default': true
                        }],
                        'assets': []
                    }]
                });
            }
        }
        if (url === 'nodes') {
            if (data.name === '') {
                return Observable.throw('Server error');
            } else {
                return Observable.of({
                    'node_id': 291,
                    'name': 'New Node',
                    'parent_node_id': null,
                    'short_code': 'node',
                    'description': 'new node desc',
                    'created_at': '2017-07-17T12:31:53+00:00',
                    'counter': {
                        'nodes': null,
                        'users': null,
                        'topics': null
                    },
                    'owner': {
                        'user_id': 3,
                        'first_name': 'MEYYAPPAN',
                        'last_name': 'VELAYUTHAM',
                        'email': 'admin@avengers.in'
                    }
                });
            }
        }
        if (url === 'leaderboards/groups/3/nodes/delete') {
            return Observable.of({});
        }
        if (url === 'leaderboards/groups/1001/nodes/delete') {
            return Observable.throw('Server Error');
        }
        if (url === 'leaderboards/groups/delete') {
            return Observable.of({});
        }
        if (url === 'leaderboards/groups') {
            if (data.translations[0].title === 'error') {
                return Observable.throw('Server error');
            } else {
                return Observable.of({
                    mlb_id: 1,
                    language: 'EN',
                    enabled: false,
                    rollout: false,
                    created_at: '2018-01-16T11:39:02+00:00',
                    nodes_count: null,
                    translations: [
                        {
                            trans_id: 114,
                            title: 'test',
                            description: 'test',
                            language: 'EN',
                            default: true
                        }
                    ],
                    periods: [
                        {
                            period_id: 535,
                            frequency: 'ANNUAL',
                            toppers_limit: 5,
                            winners_limit: 3,
                            allow_multi_win: false,
                            enabled: false,
                            shareable: false,
                            translations: [
                            ]
                        },
                        {
                            period_id: 534,
                            frequency: 'BIANNUAL',
                            toppers_limit: 5,
                            winners_limit: 3,
                            allow_multi_win: false,
                            enabled: false,
                            shareable: false,
                            translations: [
                            ]
                        },
                        {
                            period_id: 533,
                            frequency: 'QUARTERLY',
                            toppers_limit: 5,
                            winners_limit: 3,
                            allow_multi_win: false,
                            enabled: false,
                            shareable: false,
                            translations: [
                            ]
                        },
                        {
                            period_id: 532,
                            frequency: 'MONTHLY',
                            toppers_limit: 5,
                            winners_limit: 3,
                            allow_multi_win: false,
                            enabled: false,
                            shareable: false,
                            translations: [
                            ]
                        },
                        {
                            period_id: 531,
                            frequency: 'FORTNIGHT',
                            toppers_limit: 5,
                            winners_limit: 3,
                            allow_multi_win: false,
                            enabled: true,
                            shareable: false,
                            translations: [
                                {
                                    trans_id: 56,
                                    information: 'test',
                                    language: 'EN',
                                    default: true
                                }
                            ]
                        }
                    ]
                });
            }
        }
        if (url === 'sequences') {
            if (data.translations[0].title === 'error') {
                return Observable.throw('Server error');
            } else {
                return Observable.of({
                    sequence_id: 65,
                    valid_from: null,
                    valid_until: null,
                    status: 'DRAFT',
                    created_at: '2018-01-17T12:18:46+00:00',
                    translations: [
                        {
                            trans_id: 70,
                            language: 'EN',
                            title: 'test',
                            description: 'test',
                            default: true
                        }
                    ]
                });
            }
        }
        if (url === 'bucket/categories') {
            if (data.name) {
                return Observable.of({
                    category_id: 1,
                    name: 'test name',
                    description: 'test desc',
                    counter: {
                        file_count: 0
                    },
                    created_at: '2018-01-22T10:21:12+00:00'
                });
            } else {
                return Observable.throw('Server error');
            }
        }
        if (url === 'bucket/categories/delete') {
            return Observable.of({});
        }
        if (url === 'packages/1/files/delete') {
            return Observable.of({});
        }
        if (url === 'packages/1001/files/delete') {
            return Observable.throw('Server error');
        }
        if (url === 'packages') {
            if (data.name) {
                return Observable.of({});
            } else {
                return Observable.throw('Server error');
            }
        }
        if (url === 'packages/delete') {
            if (data.package_ids[0] === 1220) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'nodes/1/packages/delete') {
            if (data.package_ids[0] === 1220) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'nodes/1001/insights/delete') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1/insights/delete') {
            console.log('test');
            if (data.insight_ids[0] === 1220) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'nodes/1001/packages/delete') {
            return Observable.throw('Server error');
        }
        if (url === 'topics/1/packages/delete') {
            if (data.package_ids[0] === 1220) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'topics/1001/packages/delete') {
            return Observable.throw('Server error');
        }
        if (url === 'bucket/folders/delete') {
            return Observable.of({});
        }
        if (url === 'bucket/folders') {
            if (data.parent_id === 1001) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'bucket/categories') {
            if (data.name) {
                return Observable.of({});
            } else {
                return Observable.throw('Server error');
            }
        }
        if (url === 'users/delete') {
            if (data.user_ids[0] === 1001) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'users/invite') {
            if (data.user_ids[0] === 1001) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'users') {
            return Observable.of({
                user_id: 1,
                first_name: 'test',
                last_name: 'avenger',
                email: 'test@avengers.com',
                mobile_number: null,
                is_email_verified: true,
                is_mobile_verified: false,
                role: 'USER',
                status: 'ACTIVE',
                language: 'TA',
                force_change_password: false,
                avatar: null,
                invited_at: null,
                activated_at: '2018-01-22T05:58:50+00:00',
                created_at: '2018-01-22T05:58:06+00:00',
                nodes: [],
                custom_profile_fields: [],
                selected: true
            });
        }
        if (url === 'topics/delete') {
            if (data.topic_ids[0] === 1001) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'nodes/1001/users/delete') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1/users/delete') {
            return Observable.of({});
        }
        if (url === 'nodes/1001/sequences/delete') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1/sequences/delete') {
            return Observable.of({});
        }
        if (url === 'nodes/1001/topics/delete') {
            return Observable.throw('Server error');
        }
        if (url === 'nodes/1/topics/delete') {
            return Observable.of({});
        }
        if (url === 'orgs/customProfileFields') {
            if (data.label) {
                return Observable.of({});
            } else {
                return Observable.throw('Server error');
            }
        }
        if (url === 'nodes/delete') {
            if (data.node_ids[0] === 1001) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'questions/delete') {
            if (data.question_ids[0] === 1001) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        if (url === 'insights/delete') {
            if (data.insight_ids[0] === 1001) {
                return Observable.throw('Server error');
            } else {
                return Observable.of({});
            }
        }
        return Observable.of();
    }
    deleteData(url: string, data: any) {
        if (url === 'nodes/291/users') {
            return Observable.of(data);
        }
        if (url === 'bookmarks') {
            return Observable.of(data);
        }
        if (url === 'sequences/1') {
            return Observable.of(data);
        }
        if (url === 'sequences/1/topics/2') {
            return Observable.of(data);
        }
        if (url === 'orgs/customProfileFields/1') {
            return Observable.of(data);
        }
        return Observable.of();
    }
    uploadFile(url: string, data: any) {
        if (url === 'bucket/files') {
            if (data.file.name !== 'error') {
                return Observable.of({});
            } else {
                return Observable.throw('Server error');
            }
        }
        if (url === 'assets/image') {
            if (data.file.name !== 'error.png') {
                return Observable.of({
                    asset_id: 2929,
                    name: 'Screenshot from 2018-02-09 12-37-46.png',
                    unique_id: '6d4ba924-482d-4d83-bcb9-9a506bdcb2f6',
                    type: 'IMAGE',
                    extension: 'png',
                    mime_type: 'image\/png',
                    created_at: '2018-02-09T10:23:56+00:00',
                    renditions: [
                        {
                            rendition_id: 7346,
                            width: 1360,
                            height: 768,
                            size: 150470,
                            source: 'https:\/\/rapl-stage-QwJX8SBBQFc6oi7ilJN.png',
                            is_master: true
                        }
                    ]
                });
            } else {
                return Observable.throw('Server error');
            }
        }
        if (url === 'imports?action=testing') {
            return Observable.of({});
        }
        return Observable.of();
    }
    getFile(url: string, data: any) {
        if (url === 'imports/templates/download?action=testing') {
            return Observable.of({});
        }
        return Observable.of();
    }
 */}
