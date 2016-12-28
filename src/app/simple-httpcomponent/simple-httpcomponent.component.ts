import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-simple-httpcomponent',
  templateUrl: './simple-httpcomponent.component.html',
  styleUrls: ['./simple-httpcomponent.component.css']
})
export class SimpleHTTPcomponentComponent implements OnInit {	
	data: Object;
	loading: boolean;
	
  constructor(private http: Http) { }

  ngOnInit() {
  }

	makeRequest():void {
		this.loading = true;
		this.http.request('http://jsonplaceholder.typicode.com/posts/1')
		.subscribe((res: Response) => {
			console.log('actual response = ', res);
			this.data = res.json();
			this.loading = false;
		});
	}
}