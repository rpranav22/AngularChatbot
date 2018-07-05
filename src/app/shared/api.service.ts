import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { SpinnerService } from '../spinner/spinner.service';
import { ToasterService } from 'angular2-toaster';
import { environment } from '../../environments/environment';
import { Util, User } from '../shared/utils';

@Injectable()
export class ApiService {
    private toasterService: ToasterService;
    private http: HttpClient;
    private auth_token: string;
    public serverUrl = environment.serverUrl;
    //user: User;
    remUser: Array<any>;
    constructor(@Inject(HttpClient) http: HttpClient,
        public spinner: SpinnerService,
        private router: Router,
        toasterService: ToasterService) {
        this.http = http;
        this.toasterService = toasterService;
    }
    header() {
        var auth_token = '{"token_type":"Bearer","expires_in":432000,"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAwOGU3NmQ1NzgyYmNhMTQ4ZWQ0NWNkY2U5NTRhNjUzMjg5ZGUyNGU5N2Y1NzhkNGFlMzIwNWM5ODE5ZjhjNGU5ZGZjOWYxMzVhMDVjNzJmIn0.eyJhdWQiOiIyIiwianRpIjoiMDA4ZTc2ZDU3ODJiY2ExNDhlZDQ1Y2RjZTk1NGE2NTMyODlkZTI0ZTk3ZjU3OGQ0YWUzMjA1Yzk4MTlmOGM0ZTlkZmM5ZjEzNWEwNWM3MmYiLCJpYXQiOjE1Mjk3MzM1MTUsIm5iZiI6MTUyOTczMzUxNSwiZXhwIjoxNTMwMTY1NTE1LCJzdWIiOiIyMDYxIiwic2NvcGVzIjpbXX0.fAqEwLfG8BYQIQTf2DlgrKkEhmuAN7SkY-gtKdTMYf1zzKVuiyzsxJdf-4psqE5OkQEKi6E8fkJmfOnuW5vXzlVgcPi0CJKfA9HI3rR_FjhtIpTAGwmo1HFtqjbobBQWLWPLQSbMw63eX1zJz9Zk-Eo2VryPphPnQlfDwZwgHeTNRhKuE8R8jUSzjbzYCplN_Q72y_9ouvcmVRPe_dZw8O_WcrGlG5a2yiUDKEAyK8f7JpJ_f0loWbuKONnE6cUiku1hQlKCU3DhoDBVh5s0kvqBnBmCuaRBiVrdCvD3ft43MN6mvB8xpNQXO3BUNDKPvZcINV_xMRcS9lgZ1aIeA42boh8swpbKl1wuhQ_CnNd2PYw8BUCnFVKpUhQ5lgiLPNPflubbnjJtmIM4FhfmkKKImQK2sO4M2xa2j2JFqMlOCU_Gg5DOPHWmAgDaaU3dO-eniaLy9BaIpLSF4Ll1lrf15mIKJxiFj334faKTfMRrQvepILeXRlRkG0X7zryGB6ds8A6NBUBcThVK2_neqIP_6ktz9GDfDVe_9UwzZfmhF0CpZgH8c-9yPDGAjsS33wZQWoYF_LCx2RaA25SYWUOjlqs9pNcAu1SX99rk8OuhBWxaFGjBbyffJe4gD4bT2JZEasb0XqrOntq8S3Wmh2EgovZGRAuJGE54sdGW2rM","refresh_token":"def5020009fcb7182b6013e6079c410530fa9a68c74dd209982100a1dc625d9774e3eabe414188de34dd7f9cbb29b4b74e9d177ec4d397949dae7fcbd9fec8dcd23d4f366bb696f1fb685f2c791f6434d37833779660e1e6fbdfa355c90373a1dd924ffeb9158305afd32226d8776c0de17d532ea459e62e0789440871ea888dd88df55bac4523be8483a556b9037862e39f475068adefc299509f0ffea4e8742c3013d3f0ee82c34f9bfee1793de16e941aa9fcf4d607bbcb1f922c88e6878a66f7ad3a1c984c56d8ac82cbeab483273028e9cdec46f0bd860bd79f6845275855dd21eb4873e45e6f0f457a7a4a4f5e57ff62ad6c1fa02c450239e8ba666fd0d23f09f9b2771e41bda57ae267bac012f036b5709d027bf61b6654da8ce1a7aea20b02e0aabf0e7ad2c86d99222c0ab06662b79961ac47479d6f7f7da39ccb90638a2dbd315db9c98aff382184a911f228055f709d1c5e9884a891139bc71a1aa11dcb6d"}';
        const token = JSON.parse(auth_token);
        this.auth_token = token.token_type + ' ' + token.access_token;
        return new HttpHeaders()
            .set('Content-Type', 'application/vnd.api+json')
            .set('Authorization', this.auth_token);
    }
    fileHeader() {
        const token = JSON.parse(localStorage.getItem('auth_token'));
        this.auth_token = token.token_type + ' ' + token.access_token;
        return new HttpHeaders().set('Authorization', this.auth_token);
    }
    getEmptyHeader() {
        return new HttpHeaders().set('Content-Type', 'application/vnd.api+json');
    }
    getAuthorizationHeader() {
        const promise = new Promise((resolve, reject) => {
            var auth_token = '{"token_type":"Bearer","expires_in":432000,"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAwOGU3NmQ1NzgyYmNhMTQ4ZWQ0NWNkY2U5NTRhNjUzMjg5ZGUyNGU5N2Y1NzhkNGFlMzIwNWM5ODE5ZjhjNGU5ZGZjOWYxMzVhMDVjNzJmIn0.eyJhdWQiOiIyIiwianRpIjoiMDA4ZTc2ZDU3ODJiY2ExNDhlZDQ1Y2RjZTk1NGE2NTMyODlkZTI0ZTk3ZjU3OGQ0YWUzMjA1Yzk4MTlmOGM0ZTlkZmM5ZjEzNWEwNWM3MmYiLCJpYXQiOjE1Mjk3MzM1MTUsIm5iZiI6MTUyOTczMzUxNSwiZXhwIjoxNTMwMTY1NTE1LCJzdWIiOiIyMDYxIiwic2NvcGVzIjpbXX0.fAqEwLfG8BYQIQTf2DlgrKkEhmuAN7SkY-gtKdTMYf1zzKVuiyzsxJdf-4psqE5OkQEKi6E8fkJmfOnuW5vXzlVgcPi0CJKfA9HI3rR_FjhtIpTAGwmo1HFtqjbobBQWLWPLQSbMw63eX1zJz9Zk-Eo2VryPphPnQlfDwZwgHeTNRhKuE8R8jUSzjbzYCplN_Q72y_9ouvcmVRPe_dZw8O_WcrGlG5a2yiUDKEAyK8f7JpJ_f0loWbuKONnE6cUiku1hQlKCU3DhoDBVh5s0kvqBnBmCuaRBiVrdCvD3ft43MN6mvB8xpNQXO3BUNDKPvZcINV_xMRcS9lgZ1aIeA42boh8swpbKl1wuhQ_CnNd2PYw8BUCnFVKpUhQ5lgiLPNPflubbnjJtmIM4FhfmkKKImQK2sO4M2xa2j2JFqMlOCU_Gg5DOPHWmAgDaaU3dO-eniaLy9BaIpLSF4Ll1lrf15mIKJxiFj334faKTfMRrQvepILeXRlRkG0X7zryGB6ds8A6NBUBcThVK2_neqIP_6ktz9GDfDVe_9UwzZfmhF0CpZgH8c-9yPDGAjsS33wZQWoYF_LCx2RaA25SYWUOjlqs9pNcAu1SX99rk8OuhBWxaFGjBbyffJe4gD4bT2JZEasb0XqrOntq8S3Wmh2EgovZGRAuJGE54sdGW2rM","refresh_token":"def5020009fcb7182b6013e6079c410530fa9a68c74dd209982100a1dc625d9774e3eabe414188de34dd7f9cbb29b4b74e9d177ec4d397949dae7fcbd9fec8dcd23d4f366bb696f1fb685f2c791f6434d37833779660e1e6fbdfa355c90373a1dd924ffeb9158305afd32226d8776c0de17d532ea459e62e0789440871ea888dd88df55bac4523be8483a556b9037862e39f475068adefc299509f0ffea4e8742c3013d3f0ee82c34f9bfee1793de16e941aa9fcf4d607bbcb1f922c88e6878a66f7ad3a1c984c56d8ac82cbeab483273028e9cdec46f0bd860bd79f6845275855dd21eb4873e45e6f0f457a7a4a4f5e57ff62ad6c1fa02c450239e8ba666fd0d23f09f9b2771e41bda57ae267bac012f036b5709d027bf61b6654da8ce1a7aea20b02e0aabf0e7ad2c86d99222c0ab06662b79961ac47479d6f7f7da39ccb90638a2dbd315db9c98aff382184a911f228055f709d1c5e9884a891139bc71a1aa11dcb6d"}';
            const token = JSON.parse(auth_token);
            console.log("token->"+token);
            if (token) {
                const expired = Util.expiredJwt(token.access_token);
                console.log("Expired->"+expired);
                if (expired) {
                    const body = {
                        client_id: environment.client_id,
                        client_secret: environment.client_secret,
                        refresh_token: token.refresh_token
                    };
                    this.http.post(environment.serverUrl + 'token/refresh', body, { headers: this.header() })
                        .timeout(30000)
                        .toPromise()
                        .then(res => {
                            localStorage.setItem('auth_token', JSON.stringify(res));
                            resolve(this.header());
                        },
                            err => {
                                this.logout();
                                reject(err);
                            });
                } else {
                    resolve(this.header());
                }
            } else {
                resolve(this.getEmptyHeader());
            }
        });
        return promise;
    }
    options(option: any) {
        let options = option;
        if (options !== null && typeof options === 'object') {
            options.show_error = (typeof options.show_error !== 'undefined') ? options.show_error : true;
            options.show_success = (typeof options.show_success !== 'undefined') ? options.show_success : false;
            options.show_loader = (typeof options.show_loader !== 'undefined') ? options.show_loader : true;
        } else {
            options = { show_loader: true, show_success: false, show_error: true };
        }
        return options;
    }
    get(url: string, options?: any) {
        options = this.options(options);
        if (options.show_loader) {
            this.spinner.start();
        }
        return Observable.fromPromise(this.getAuthorizationHeader()).flatMap((response: HttpHeaders) => {
            console.log("response->"+response);
            return this.http.get(environment.serverUrl + url, {
                headers: response,
                params: options.search
            }).timeout(30000)
                .do(res => {
                    return this.handleSuccess(res, options);
                })
                .catch((err) => {
                    return this.handleError(err, options);
                });
        });
    }
    getFile(url: string, options?: any) {
        options = this.options(options);
        if (options.show_loader) {
            this.spinner.start();
        }
        return Observable.fromPromise(this.getAuthorizationHeader()).flatMap((response: HttpHeaders) => {
            return this.http.get(environment.serverUrl + url, {
                headers: this.fileHeader(),
                responseType: 'blob',
                params: options.search
            }).timeout(30000)
                .do(res => {
                    return this.handleSuccess(res, options);
                })
                .catch((err) => {
                    return this.handleError(err, options);
                });
        });
    }
    put(url: string, data: any, options?: any) {
        options = this.options(options);
        if (options.show_loader) {
            this.spinner.start();
        }
        return Observable.fromPromise(this.getAuthorizationHeader()).flatMap((response: HttpHeaders) => {
            return this.http.put(environment.serverUrl + url, data, {
                headers: response
            }).timeout(30000)
                .do(res => {
                    return this.handleSuccess(res, options);
                })
                .catch((err) => {
                    return this.handleError(err, options);
                });
        });
    }
    patch(url: string, data: any, options?: any) {
        options = this.options(options);
        if (options.show_loader) {
            this.spinner.start();
        }
        return Observable.fromPromise(this.getAuthorizationHeader()).flatMap((response: HttpHeaders) => {
            return this.http.patch(environment.serverUrl + url, data, {
                headers: response
            }).timeout(30000)
                .do(res => {
                    return this.handleSuccess(res, options);
                })
                .catch((err) => {
                    return this.handleError(err, options);
                });
        });
    }
    post(url: string, data: any, options?: any) {
        options = this.options(options);
        if (options.show_loader) {
            this.spinner.start();
        }
        return Observable.fromPromise(this.getAuthorizationHeader()).flatMap((response: HttpHeaders) => {
            return this.http.post(environment.serverUrl + url, data, {
                headers: response
            }).timeout(30000)
                .do(res => {
                    return this.handleSuccess(res, options);
                })
                .catch((err) => {
                    return this.handleError(err, options);
                });
        });
    }
    deleteData(url: string, data: any, options?: any) {
        options = this.options(options);
        if (options.show_loader) {
            this.spinner.start();
        }
        return Observable.fromPromise(this.getAuthorizationHeader()).flatMap((response: HttpHeaders) => {
            return this.http.delete(environment.serverUrl + url, {
                headers: response,
                params: data
            }).timeout(30000)
                .do(res => {
                    return this.handleSuccess(res, options);
                })
                .catch((err) => {
                    return this.handleError(err, options);
                });
        });
    }
    uploadFile(url: string, myFormData: any, options?: any) {
        options = this.options(options);
        if (options.show_loader) {
            this.spinner.start();
        }
        const formData = new FormData();
        for (const key in myFormData) {
            if (myFormData.hasOwnProperty(key)) {
                const value = myFormData[key];
                if (Array.isArray(value)) {
                    const arrayKey = key + '[]';
                    for (const arrayValue of value) {
                        formData.append(arrayKey, arrayValue);
                    }
                } else {
                    formData.append(key, value);
                }
            }
        }
        return Observable.fromPromise(this.getAuthorizationHeader()).flatMap(() => {
            return this.http.post(environment.serverUrl + url, formData, {
                headers: this.fileHeader(),
            }).timeout(30000)
                .do(res => {
                    return this.handleSuccess(res, options);
                })
                .catch((err) => {
                    return this.handleError(err, options);
                });
        });
    }
    private handleSuccess(response: any, options: any) {
        if (options.show_loader) {
            this.spinner.stop();
        }
        return response;
    }
    private handleError(error: any, options: any) {
        if (options.show_loader) {
            this.spinner.stop();
        }
        const errorMsg = error;
        const body = errorMsg.error;
        if (navigator.onLine && error.status === 0) {
            this.toasterService.pop('error', 'Oops something went wrong, Please try again later.');
        }
        if (navigator.onLine && body) {
            if (body.code === 1103) {
                this.toasterService.pop('error', 'Unauthenticated request, Please login again.');
                this.logout();
            } else if (body.message) {
                this.toasterService.pop('error', body.message);
            }
        }
        return Observable.throw(errorMsg || 'Server error');
    }
    logout() {
        const remUser = JSON.parse(localStorage.getItem('remember_user'));
        localStorage.clear();
        localStorage.setItem('remember_user', JSON.stringify(remUser));
       // this.dataService.removeAll();
        // --------- clearing notification subscriptions ---------- //
        //this.notifService.subscriptions.forEach(s => s.unsubscribe());
        //this.notifService.notifWindow = [];
        //this.notifService.queryable = true;
        this.router.navigate(['/security/login']);
    }
}
