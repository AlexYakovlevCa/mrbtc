import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';

const user = {
    "_id": "5a56640269f443a5d64b32ca",
    "name": "Eshel Eyni",
    "coins": 1000,
}

@Injectable({
    providedIn: 'root'
})

export class UserService {


    constructor() {
    }

    public getUser() {
        return user;
    }
}

