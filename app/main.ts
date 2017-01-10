/**
 * Created by umitilhan on 1/6/17.
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';
import {Task} from './task';
import {CompletedTaskFilter} from './pipes';
import {UncompletedTaskFilter} from './pipe';


@Component({
    selector: 'main',
    pipes: [CompletedTaskFilter,UncompletedTaskFilter],
    styles: [`
    #container{
    margin: auto;
    height: auto;
    width: 600px;
}
.finishtask{
 text-decoration: line-through;
            color: red;
}
`],
    template: `
<div id="container">
<div>
    <h2>  <center>SmartUpCode Todo uygulamasi</center></h2>
</div>
<div class="input-group">
    <input type="text"  class="form-control" [(ngModel)]="taskName" (keyup.enter)="add()"  placeholder="Eklemek istediginiz gorevi giriniz">
    <span class="input-group-btn">
        <button class="btn btn-default" type="button" [disabled]="!addtask" (click)="add()">Ekle</button>
    </span>
</div>

<div id="container">
    <ul class="nav nav-pills">
        <li role="presentation" (click)="page=1"><a href="#">Butun Gorevler</a></li>
        <li role="presentation" (click)="page=2"><a href="#">Bitmis Gorevler</a></li>
        <li role="presentation" (click)="page=3"><a href="#">Bitmemis Gorevler</a></li>
    </ul>
</div>

<div *ngIf="page==1" >
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let task of tasks; let i=index">
            <input type="checkbox" [(ngModel)]="task.completed">
            <span [ngClass]="{'finishtask':task.completed}">{{i}}{{task.name}} - {{task.completed}}</span> 
            <button class="btn btn-danger" (click)="delete(i)">Sil</button>
        </li>
    </ul>
</div>
<div *ngIf="page==2">
    <ul class="list-group">
       <li class="list-group-item" *ngFor="let task of tasks | completedFilter; ">
            <input type="checkbox" [(ngModel)]="task.completed">
            <span [ngClass]="{'finishtask':task.completed}">{{i}}{{task.name}} - {{task.completed}}</span> 
            <button class="btn btn-danger" (click)="delete(i)">Sil</button>
       </li>
    </ul>
</div>
<div *ngIf="page==3">
   <ul class="list-group">
       <li class="list-group-item" *ngFor="let task of tasks | uncompletedFilter;">
            <input type="checkbox" [(ngModel)]="task.completed">
            <span [ngClass]="{'finishtask':task.completed}">{{task.name}} - {{task.completed}}</span> 
            <button class="btn btn-danger" (click)="delete(i)">Sil</button>
       </li>
    </ul>
</div>
</div>
`,
    directives: [ROUTER_DIRECTIVES]
})


@RouteConfig([
    // { path: '/', redirectTo: ['Dashboard'] },
])
export class Main {

    private tasks: Task[] = [];
    private taskName: string = '';

    add() {
        this.tasks.push(new Task(this.taskName, false));
        this.taskName = "";
    }

    delete(i:number) {
        this.tasks.splice(i, 1);
    }
}