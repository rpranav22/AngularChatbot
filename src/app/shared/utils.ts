// https://github.com/halt-hammerzeit/libphonenumber-js

import { environment } from '../../environments/environment';

declare function require(moduleName: string): any;
const { version: appVersion } = require('../../../package.json');
export class User {
    user_id: number;
    principal: string;
    org: any;
    type: string;
    avatar: string;
}

export enum Type {
    EMAIL, MOBILE
}

export const imageType: any = {
    medium: 240,
    large: 480,
    grande: 600,
    hude: 720,
    original: 1080
};

export class Util {
    static app_version = appVersion;
    static choiceType = ['TEXT', 'IMAGE', 'HYBRID'];
    
    static columnInfo(info: string) {
        return '<span class="info"><span class="mdi mdi-help-circle"></span><span class="info-text">' + info + '</span></span>';
    }
   
    static expiredJwt(token: string) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const jwt = JSON.parse(window.atob(base64));
        const exp = jwt.exp;
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + 2);
        const diff = exp - newDate.getTime() / 1000;
        return (diff < 0);
    }
    static filterArray(arr: any[], key: string, value: any) {
        if (arr && arr.length > 0) {
            const obj = arr.filter((trans) => (trans[key] === value));
            return obj[0];
        }
        return {};
    }
    static metaData(arr: any[]) {
        let metaData = Util.filterArray(arr, 'language', localStorage.getItem('translate_language'));
        if (!metaData) {
            metaData = Util.filterArray(arr, 'default', true);
        }
        return metaData;
    }
    static rendition(renditions: any[], value: number) {
        let rendition = Util.filterArray(renditions, 'width', value);
        if (!rendition) {
            rendition = Util.filterArray(renditions, 'is_master', true);
        }
        return rendition.source;
    }
    static getDays() {
        return [
            {
                index: 1, day: 'MON', isChecked: false, toString: function () {
                    return this.index;
                }
            },
            {
                index: 2, day: 'TUE', isChecked: false, toString: function () {
                    return this.index;
                }
            },
            {
                index: 3, day: 'WED', isChecked: false, toString: function () {
                    return this.index;
                }
            },
            {
                index: 4, day: 'THU', isChecked: false, toString: function () {
                    return this.index;
                }
            },
            {
                index: 5, day: 'FRI', isChecked: false, toString: function () {
                    return this.index;
                }
            },
            {
                index: 6, day: 'SAT', isChecked: false, toString: function () {
                    return this.index;
                }
            },
            {
                index: 0, day: 'SUN', isChecked: false, toString: function () {
                    return this.index;
                }
            }
        ];
    }
    static getReleaseFreq(release_frequency: any) {
        const days = this.getDays(),
            daysIndex = release_frequency.days,
            selectedDays: any = [];
        for (let d = 0; d < days.length; d++) {
            const dayIndex = days[d].index;
            if (daysIndex.indexOf(dayIndex) !== -1) {
                selectedDays.push(days[d].day);
            }
        }
        return selectedDays;
    }
    static getReleaseTime(rf: any) {
        return new Date((new Date()).setUTCHours(rf.hour, rf.minute, 0, 0));
    }
    static displayPermission(permissions: any[]) {
        const current_user = JSON.parse(localStorage.getItem('current_user'));
        let privileges: any[];
        if (current_user) {
            privileges = current_user['privileges'];
        }
        if ((permissions && privileges) && (permissions.length && privileges.length)) {
            for (let i = 0; i < permissions.length; i++) {
                const perm = permissions[i];
                const anyPerm = perm.replace(perm.split('.')[1], '*');
                if (privileges.indexOf(perm) !== -1 || privileges.indexOf(anyPerm) !== -1) {
                    return true;
                }
            }
        }
        return false;
    }
    static getSubDomain() {
        const hostUrl = environment.domainUrl;
        const hostname = window.location.host;
        const domain = hostname.slice(0, -(hostUrl.length + 1));
        return domain;
    }
    static getNotifImage(scenario: string) {
        const assetsURL = 'assets/img/';
        const images = {
            FIRST_LOGIN: assetsURL + 'logo2.png',
            NODE_ASSOCIATION: assetsURL + 'users.svg',
            MASTERED_TOPIC: assetsURL + 'trophy.svg',
            INACTIVATE_TOPIC: assetsURL + 'zzz.png',
            NEW_QUESTION: assetsURL + 'icon-notify-action.svg',
            ORANGE_ALERT: assetsURL + 'siren-orange.svg',
            RED_ALERT: assetsURL + 'siren.svg',
            WELL_DONE: assetsURL + 'thumbs-up.svg',
            REGULARITY_CREDIT: assetsURL + 'points.svg',
            NEW_BADGE: assetsURL + 'badge.svg',
            TOP_LEARNER: assetsURL + 'individual_leader_board.svg',
            TOP_LEARNER_GROUP: assetsURL + 'team_leader_board.svg'
        };
        if (scenario) {
            return images[scenario];
        } else {
            return assetsURL + 'alert.svg';
        }
    }
    static getLanguage() {
        const current_user = JSON.parse(localStorage.getItem('current_user'));
        const settings = current_user.org.settings;
        const supportedLang = Util.filterArray(settings, 'property', 'supported_languages').value.split(',');
        const language = [
            {
                value: 'EN',
                viewValue: 'English',
                default: false,
                topicPlaceholder: {
                    TopicTitle: 'Topic Title',
                    TopicDescription: 'Topic Description',
                    setDefault: 'Set Default'
                },
                questionPlaceholder: {
                    question: 'Add Question',
                    option: 'Add Option',
                    rationale: 'Add Rationale',
                },
                pathPlaceholder: {
                    pathName: 'Learning Path Name',
                    pathDesc: 'Learning Path Description',
                    setDefault: 'Set Default'
                },
                pollPlaceholder: {
                    PollQuestion: 'Poll Question',
                    PollHint: 'Poll Hint',
                    setDefault: 'Set Default'
                }
            },
            {
                value: 'TA',
                viewValue: 'தமிழ்',
                default: false,
                topicPlaceholder: {
                    TopicTitle: 'தலைப்பு',
                    TopicDescription: 'தலைப்பின் விளக்கம்',
                    setDefault: 'இயல்புநிலையாக அமைக்கவும்'
                },
                questionPlaceholder: {
                    question: 'கேள்வியைச் சேர்க்கவும்',
                    option: 'தேர்வை சேர்க்கவும்',
                    rationale: 'காரண விளக்கத்தை சேர்க்கவும்'
                },
                pathPlaceholder: {
                    pathName: 'Learning Path Name',
                    pathDesc: 'Learning Path Description',
                    setDefault: 'Set Default'
                },
                pollPlaceholder: {
                    PollQuestion: 'Poll Question',
                    PollHint: 'Poll Hint',
                    setDefault: 'Set Default'
                }
            },
            {
                value: 'KN',
                viewValue: 'ಕನ್ನಡ',
                default: false,
                topicPlaceholder: {
                    TopicTitle: 'ವಿಷಯದ ಶೀರ್ಷಿಕೆ',
                    TopicDescription: 'ವಿಷಯ ವಿವರಣೆ',
                    setDefault: 'ಡೀಫಾಲ್ಟ್ ಆಗಿ ಹೊಂದಿಸಿ'
                },
                questionPlaceholder: {
                    question: 'ಪ್ರಶ್ನೆಯನ್ನು ಸೇರಿಸಿ',
                    option: 'ಆಯ್ಕೆಯನ್ನು ಸೇರಿಸಿ',
                    rationale: 'ಸಕಾರಣವನ್ನು ಸೇರಿಸಿ'
                },
                pathPlaceholder: {
                    pathName: 'Learning Path Name',
                    pathDesc: 'Learning Path Description',
                    setDefault: 'Set Default'
                },
                pollPlaceholder: {
                    PollQuestion: 'Poll Question',
                    PollHint: 'Poll Hint',
                    setDefault: 'Set Default'
                }
            },
            {
                value: 'HI',
                viewValue: 'हिन्दी',
                default: false,
                topicPlaceholder: {
                    TopicTitle: 'टॉपिक का टाइटल',
                    TopicDescription: 'टॉपिक की जानकारी',
                    setDefault: 'डिफ़ॉल्ट सेट करें'
                },
                questionPlaceholder: {
                    question: 'प्रश्न जोड़ें',
                    option: 'विकल्प जोड़ें',
                    rationale: 'मूल कारण जोड़ें'
                },
                pathPlaceholder: {
                    pathName: 'Learning Path Name',
                    pathDesc: 'Learning Path Description',
                    setDefault: 'Set Default'
                },
                pollPlaceholder: {
                    PollQuestion: 'Poll Question',
                    PollHint: 'Poll Hint',
                    setDefault: 'Set Default'
                }
            },
            {
                value: 'TE',
                viewValue: 'తెలుగు',
                default: false,
                topicPlaceholder: {
                    TopicTitle: 'టాపిక్ శీర్షిక',
                    TopicDescription: 'టాపిక్ వివరణ',
                    setDefault: 'డిఫాల్ట్ అమర్చుము'
                },
                questionPlaceholder: {
                    question: 'ప్రశ్నను చేర్చండి',
                    option: 'జవాబును చేర్చంది',
                    rationale: 'వివరణను చేర్చండి'
                },
                pathPlaceholder: {
                    pathName: 'Learning Path Name',
                    pathDesc: 'Learning Path Description',
                    setDefault: 'Set Default'
                },
                pollPlaceholder: {
                    PollQuestion: 'Poll Question',
                    PollHint: 'Poll Hint',
                    setDefault: 'Set Default'
                }
            },
            {
                value: 'ML',
                viewValue: 'മലയാളം',
                default: false,
                topicPlaceholder: {
                    TopicTitle: 'വിഷയത്തിന്‍റെ തലക്കെട്ട്',
                    TopicDescription: 'വിഷയ വിവരണം ',
                    setDefault: 'ഡീഫാള്‍ട്ട് ആക്കുക'
                },
                questionPlaceholder: {
                    question: 'ചോദ്യം കൂട്ടിച്ചേര്‍ക്കുക',
                    option: 'ഓപ്ഷന്‍ കൂട്ടിച്ചേര്‍ക്കുക',
                    rationale: 'വ്യാഖ്യാനം കൂട്ടിച്ചേര്‍ക്കുക'
                },
                pathPlaceholder: {
                    pathName: 'Learning Path Name',
                    pathDesc: 'Learning Path Description',
                    setDefault: 'Set Default'
                },
                pollPlaceholder: {
                    PollQuestion: 'Poll Question',
                    PollHint: 'Poll Hint',
                    setDefault: 'Set Default'
                }
            },
            {
                value: 'GU',
                viewValue: 'ગુજરાતી',
                default: false,
                topicPlaceholder: {
                    TopicTitle: 'ટૉપિકનું શીર્ષક',
                    TopicDescription: 'ટૉપિકનું વર્ણન',
                    setDefault: 'ડિફૉલ્ટ સૅટ કરો'
                },
                questionPlaceholder: {
                    question: 'પ્રશ્ન ઉમેરો',
                    option: 'વિકલ્પ ઉમેરો',
                    rationale: 'મૂળ કારણ ઉમેરો'
                },
                pathPlaceholder: {
                    pathName: 'Learning Path Name',
                    pathDesc: 'Learning Path Description',
                    setDefault: 'Set Default'
                },
                pollPlaceholder: {
                    PollQuestion: 'Poll Question',
                    PollHint: 'Poll Hint',
                    setDefault: 'Set Default'
                }
            },
            {
                value: 'MR',
                viewValue: 'मराठी',
                default: false,
                topicPlaceholder: {
                    TopicTitle: 'टॉपिक शीर्षक',
                    TopicDescription: 'टॉपिकचे विवरण',
                    setDefault: 'डिफॉल्ट सेट करा'
                },
                questionPlaceholder: {
                    question: 'प्रश्न जोडा',
                    option: 'विकल्प जोडा',
                    rationale: 'तर्कशुध्द कारण जोदा'
                },
                pathPlaceholder: {
                    pathName: 'Learning Path Name',
                    pathDesc: 'Learning Path Description',
                    setDefault: 'Set Default'
                },
                pollPlaceholder: {
                    PollQuestion: 'Poll Question',
                    PollHint: 'Poll Hint',
                    setDefault: 'Set Default'
                }
            },
            {
                value: 'BN',
                viewValue: 'বাঙালি',
                default: false,
                topicPlaceholder: {
                    TopicTitle: 'বিষয় শিরোনাম',
                    TopicDescription: 'বিষয়ের বর্ণনা',
                    setDefault: 'পূর্বনির্ধারিত সেট করুন'
                },
                questionPlaceholder: {
                    question: 'প্রশ্ন যোগ করুন',
                    option: 'বিকল্প যোগ করুন',
                    rationale: 'যুক্তি যোগ করুন'
                },
                pathPlaceholder: {
                    pathName: 'Learning Path Name',
                    pathDesc: 'Learning Path Description',
                    setDefault: 'Set Default'
                },
                pollPlaceholder: {
                    PollQuestion: 'Poll Question',
                    PollHint: 'Poll Hint',
                    setDefault: 'Set Default'
                }
            }
        ];
        const filteredLang = language.filter(function (lang) {
            return supportedLang.indexOf(lang.value) > -1;
        });
        return filteredLang;
    }
    
   
    static updateRemUser(user: any) {
        const remUser = JSON.parse(localStorage.getItem('remember_user'));
        if (remUser && remUser.length) {
            const filteredUsers = Util.filterArray(remUser, 'user_id', user.user_id);
            filteredUsers.first_name = user.first_name;
            filteredUsers.last_name = user.last_name;
            filteredUsers.avatar = user.avatar;
            remUser.splice(remUser.indexOf(filteredUsers, 1));
            remUser.push(filteredUsers);
            localStorage.setItem('remember_user', JSON.stringify(remUser));
        }
    }
    static getGetOrdinal(d: any) {
        const date = new Date(d),
            day = date.getDate(),
            s = ['th', 'st', 'nd', 'rd'],
            v = day % 100;
        return day + (s[(v - 20) % 10] || s[v] || s[0]);
    }
    static unlockCritera() {
        return [
            {
                criterion: 'ON_TOPIC_MASTERY',
                viewValue: function (value: any) {
                    if (value) {
                        return 'Upon mastering the topic';
                    }
                },
                value: true
            },
            {
                criterion: 'ON_NTH_ITERATION',
                viewValue: function (value: any = 'N') {
                    return 'Upon releasing iteration ' + value;
                },
                value: 'N'
            },
            {
                criterion: 'ON_MASTERING_NTH_QUESTION',
                viewValue: function (value: any = 'N') {
                    return 'Upon mastering ' + value + ' questions';
                },
                value: 'N'
            },
            {
                criterion: 'ON_NTH_DAY_AFTER_RELEASE',
                viewValue: function (value: any = 'N') {
                    return 'Upon ' + value + ' days after release';
                },
                value: 'N'
            }
        ];
    }
    static dataURItoBlob(dataURI: any) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        } else {
            byteString = dataURI.split(',')[1];
        }
        // separate out the mime component
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
    }
  
    static setGraphData(stats: any, column: string) {
        let periods, trend = []; let width: any; let height: any;
        if (column) {
            periods = stats[column].periods.reverse();
            trend = stats[column].trend.reverse();
            width = 200;
            height = 55;
        } else {
            periods = stats.periods.reverse();
            trend = stats.trend.reverse();
            width = 250;
            height = 150;
        }
        stats.dataset = {
            chart: {
                type: 'spline',
                width: width,
                height: height,
                borderColor: '#DDDDDD',
                borderWidth: 0,
                margin: [8, 0, 8, 0],
                spacing: [0, 0, 0, 0]
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: periods,
                gridLineWidth: 0,
                lineWidth: 0,
                tickLength: 0,
                labels: {
                    enabled: false
                },
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
                min: 0,
                max: 100,
                offset: -15
            },
            plotOptions: {
                spline: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                },
                series: {
                    marker: {
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: '#4a8fe2',
                        radius: 3
                    },
                    lineWidth: 2,
                    color: '#4a8fe2'

                }
            },
            series: [{
                name: 'Trend %',
                data: trend
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    }
                }]
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        };
    }
    static setCircleGraph(progress: number) {
        const data = {
            chart: {
                type: 'solidgauge',
                height: 150,
                width: 150,
                margin: [8, 0, 8, 0],
                spacing: [0, 0, 0, 0]
            },
            title: {
                text: '',
            },
            tooltip: {
                enabled: false
            },
            pane: {
                startAngle: 0,
                endAngle: 360,
                background: [{ // Track for Move
                    outerRadius: '112%',
                    innerRadius: '88%',
                    backgroundColor: 'rgba(124, 181, 236, 0.3)',
                    borderWidth: 0
                }]
            },
            yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: -10,
                        borderWidth: 0
                    },
                    linecap: 'round',
                    stickyTracking: false,
                    rounded: true
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: '',
                data: [{
                    color: '#4a90e2',
                    radius: '112%',
                    innerRadius: '88%',
                    y: progress
                }],
                dataLabels: {
                    format: '<div class="progress-percentage">{y}%</div>'
                },
                tooltip: {
                    valueSuffix: ' %'
                }
            }]
        };
        return data;
    }
    static surveyThemes() {
        const current_user = JSON.parse(localStorage.getItem('current_user'));
        const settings = current_user.org.settings;
        const colorTheme = Util.filterArray(settings, 'property', 'survey_themes').value;
        return JSON.parse(colorTheme);
    }
}
