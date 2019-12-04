import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../_model/Item';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
	public items: Item[] = [];

	constructor(
	  private service: ApiService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
	  this.items = [ new Item('task name', 123) ];
  }

  public onRemove(item) {
	}

	public onEdit(item) {
		this.service.setCurrentItem(item);
		this.router.navigateByUrl('/edit-item');
	}
}
