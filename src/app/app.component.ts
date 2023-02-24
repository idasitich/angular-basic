import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic';
  newMemberName ="";
  members: string[] =[];

  onInput(members: string){
    this.newMemberName=members;
    console.log(this.newMemberName);
  }
  
  addMember (){
    this.members.push(this.newMemberName);
    this.newMemberName="";
    console.log(this.members);
  }
}
