import { Injectable } from '@angular/core';
import { MouseLocation } from '../model/MouseLocation.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';


@Injectable()
export class MouseService {
    mLocs$: Subject<MouseLocation>;
    mouseLocationSubscriber;
    colorsArray = Array<string>();

    constructor() {

        this.mLocs$ = new Subject<MouseLocation>();

        this.mouseLocationSubscriber = this.mLocs$.subscribe(
            X => this.handleNext(X),
            err => this.handleSubscriberError(err),
            () => console.log('subscriber recd complete')
        );

        this.colorsArray = [
            'f7f4fd',
            'ebe5fb',
            'e0d7f9',
            'd5c8f7',
            'c9b9f5',
            'beaaf2',
            'b39bf0',
            'a78dee',
            '9c7eec',
            '906fea',
            '8560e7',
            '7a52e5',
            '6e43e3',
            '6334e1',
            '5825df',
            '501fd4',
            '4b1dc5',
            '451bb6',
            '3f19a7',
            '3a1798',
            '34148a',
            '2f127b',
            '29106c',
            '230e5d',
            '1e0c4e',
            '180940',
            '130731',
            '0d0522',
            '070313',
            '020104',
            '000'
        ];


    }

    sayHello(): void {
        console.log('hello');
    }

    handleNext(e) {

        // console.log('Subscriber- foo= ', foo);
        // console.log('e = ', e);
        let color = this.chooseRandomColor();
        let size = '1px';
        let height = e.container.clientHeight;
        let startLoc = (e.container.clientHeight / 2);
        let newDiv = <any>document.createElement('div');
        newDiv.setAttribute('id', 'singlePixel');
        newDiv.setAttribute('style', 'top: ' + startLoc + 'px; left: ' + e.mouseX + 'px; background-color: ' + color + ';' + this.setRandomTransformStyle());


        e.container.appendChild(newDiv);

        setTimeout(function() {
            newDiv.className = 'pixelAnimated';
        }, 3000);
    }

    setRandomTransformStyle() {
        let time = Math.round(Math.random() * 9);

        let styleInfo = ' -webkit-transition: -webkit-transform ' + time + 's; -moz-transition: -moz-transform ' + time + 's; -ms-transition: -ms-transform ' + time + 's; transition: transform ' + time + 's;';

        return styleInfo;
    }

    chooseRandomColor() {
        // let and var are interchangable - let is preferred
        let totalNum = this.colorsArray.length - 1;
        let randIdx = Math.round(Math.random() * (totalNum - 0) + 0);
        return '#' + this.colorsArray[randIdx];
    }

    handleSubscriberError(err) {
        console.log('subscriber caught an error', err);
    }

    getSubject() {
        return this.mLocs$;
    }

}
