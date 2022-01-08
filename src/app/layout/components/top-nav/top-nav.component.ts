import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProdPerCategComponent } from 'src/app/views/products/prod-per-categ/prod-per-categ.component';
import {ProductsService} from '../../../core/services/products.service'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  population: string;
  id: number;
}

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

@ViewChild(ProdPerCategComponent, { static: false })
collection!: ProdPerCategComponent;
@Input() SearchArray: any;
loadingCategories = false
navLinks: any[] = [];
stateCtrl = new FormControl();
filteredStates: Observable<State[]>;


statez = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];


constructor(
    private ProductsService:ProductsService
  ) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.SearchArray.slice())),
    );
   }

   private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.SearchArray.filter((state: { name: string; }) => state.name.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    this.getNavlinks()
  }
  onItemSelector(value :any) {
    this.collection = value
    }
    getNavlinks(){
      this.loadingCategories=true
      this.ProductsService.getCategories().subscribe(res=>{
        let data = res.result.response
        console.log(data);

        this.navLinks = res.result.response
        this.loadingCategories=false

      })
    }
}
