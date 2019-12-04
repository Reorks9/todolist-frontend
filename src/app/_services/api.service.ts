import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	constructor() {}

	public getCurrentItem(): any {}

  public setCurrentItem(item: any) {}

  public getItems(): any {}

  public removeItem(item: any): any {}

  public addItem(item: any): any {}

  public updateItem(item: any): any {}
}
