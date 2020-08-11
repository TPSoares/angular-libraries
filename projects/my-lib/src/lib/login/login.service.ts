import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'any'
})
export class LoginService {

    public formData: any;
  
    constructor() { }

    setFormData(data) {
        this.formData = data;
        console.log(this.formData)
    }


    getFormData(): Observable<any> {
        return new Observable(subscriber => {
            subscriber.next(this.formData)
        })
    }

}
