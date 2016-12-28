import { Injectable } from '@angular/core';
import { MouseLocation } from '../model/MouseLocation.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class MouseService {
    mLocations: Array<MouseLocation> = new Array<MouseLocation>();
    // what's the difference between MouseLocation[] and Array<MouseLocation>
    
    locationObservable: Observable<MouseLocation[]>;
    locObserver: Observer<MouseLocation>;
    lastLocation: MouseLocation;
    sampleSubscription;

    constructor() {
        // this.mLocations = [];
        this.locationObservable = Observable.from(this.mLocations);
        this.locObserver = {
            next: function(x) {
                console.log('Observer next');
            },

            error: function(e) {
                console.log('there was an error');
            },

            complete: function() {
                console.log('it is done');
            }
        };

        // this.sampleSubscription = this.locationObservable.subscribe(this.locObserver);

    }

    addLocation(mLoc: MouseLocation) {
        // console.log('adding a location: ', mLoc);
        this.mLocations.push(mLoc);
        console.log('locations: ', this.mLocations);
        // console.log('loc observer = ', this.sampleSubscription);
    }

    sayHello(): void {
        console.log('hello');
    }

}
