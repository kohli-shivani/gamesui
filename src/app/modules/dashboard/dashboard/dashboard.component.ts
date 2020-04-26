import { Component, OnInit } from '@angular/core';
import {  MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common';
import { GameService } from '@core/services/game.service';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderPipe } from 'ngx-order-pipe';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  order: string = 'score';
  reverse: boolean = false;
  displayedColumns:any;
  gameDetails:any;
  size = 10;
  pageIndex = 0;
  totalSize = 0;
  gamedataSource: any;
  submitted = false;
  dataloaded = false;
  loading = false;
  searchString:string = '';
  formSearch = new FormControl();
  filteredOptions;

  constructor(private orderPipe: OrderPipe,private formBuilder: FormBuilder,private _api:GameService,private datePipe: DatePipe,private dialog: MatDialog) { 
    
  }

  ngOnInit() {
    this.getMeetingSlots();
    this.getMeetingGames();
   

    this.formSearch.valueChanges.subscribe(
      ()=>{
        this.filteredOptions =  this._filter(this.formSearch.value);
      })

  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.gamedataSource.filter(option => option['title'].toString().toLowerCase().indexOf(filterValue) === 0);

  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }


  getMeetingSlots(){
    this.displayedColumns = [{'id':'title','name':'Title'},
    {'id':'platform','name':'Platform'},
    {'id':'score','name':'Score'},
    {'id':'genre','name':'Genre'},
    {'id':'editors_choice','name':'Editors Choice'},
    {'id':'year','name':'Release Year'}];
  }


  getMeetingGames(){
    this.loading = true;
    this._api.getAllGames().subscribe((data:any)=>{
      if(data){
        this.dataloaded = true;
        this.loading = false;
        this.gameDetails = data;
        this.gamedataSource = data;
        this.totalSize = this.gameDetails.length;
        this.orderPipe.transform(this.gamedataSource, 'title');
      }
    },err => {
      this.dataloaded = false;
      this.loading = false;
      console.log("inside catch error",err);
    })
  }

  paginate(event: any) {
    this.pageIndex=event;
    this.gamedataSource = this.gameDetails.slice(event * this.size - this.size, event * this.size);
  }

}
