import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MouseService } from './service/mouse.service';
import { MouseLocation } from './model/MouseLocation.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'observable test';
    items: Observable<string[]>;

    private searchTermStream = new Subject<string>();

    search(term: string) {
        this.searchTermStream.next(term);
    }

    constructor(private mService: MouseService) {
//        this.items = this.searchTermStream
//            .debounceTime(300)
//            .distinctUntilChanged()
//            .switchMap((term: string) => { return [term] });
    }

    coordinates(e: MouseEvent) {
        
        let targetDiv = <HTMLElement> e.currentTarget;
        let thisLoc = new MouseLocation([e.clientX, e.clientY], targetDiv);
        
        // for experimental
        // this.mService.addLocation(thisLoc);
        
        let mServiceSubject = this.mService.getSubject();
        mServiceSubject.next(thisLoc);
        
        // old
        // console.log('got a mouse event: ', e);
        // console.log('got a mouse target: ', e.currentTarget);
        // this.mService.sayHello();
        //this.mService.addLocation(thisLoc);
    }

}
