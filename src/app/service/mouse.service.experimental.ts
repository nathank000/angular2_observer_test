import { Injectable } from '@angular/core';
import { MouseLocation } from '../model/MouseLocation.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class MouseService {
    mLocations;
    mLocs$;
    lineOneSubscriber;

    constructor() {
        this.mLocations = [];
        this.mLocs$ = Observable.from(this.mLocations);
        
        console.log('mLocs$ = ', this.mLocs$);
        //this.mLocs$.subscribe(foo => this.logInfo(foo));
        this.lineOneSubscriber = this.mLocs$.subscribe(
            X => this.handleNext(X),
            err => this.handleSubscriberError(err),
            () => console.log('subscriber recd complete')
        );
    }

    addLocation(mLoc: MouseLocation) {
        // console.log('adding a location: ', mLoc);
        this.mLocations.push(mLoc);
        
        //console.log('locations: ', this.mLocations);
        // console.log('loc observer = ', this.sampleSubscription);
    }

    sayHello(): void {
        console.log('hello');
    }

    logInfo(foo) {
        console.log('info: logging - ' + foo);
    }

    handleNext(e) {

        // console.log('Subscriber- foo= ', foo);
        console.log('e = ', e);
        let color = '#000000';
        let size = '1px';
        let newDiv = <any>document.createElement('div');
        newDiv.setAttribute('style', 'position: absolute; top: ' + e.mouseY + 'px; left: ' + e.mouseX + 'px; width: 1px; height: 1px; background-color: ' + color + ';');
        e.container.appendChild(newDiv);
    }

    handleSubscriberError(err) {
        console.log('subscriber caught an error', err);
    }

    getSubject() {

        return this.mLocs$;
    }

}
