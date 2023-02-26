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
  errorMessage= " ";
  numberOfTeams : Number | "" = "";
  teams: string [][]=[];

  onInput(members: string){
    this.newMemberName=members;
    console.log(this.newMemberName);
  }
  onNumberOfTeamsInput(value: string){
    this.numberOfTeams= Number(value);
  }
  
  addMember (){

    if(!this.newMemberName){
      this.errorMessage="Name can't be Empty";
      return; 
    }

    this.errorMessage="";
    this.members.push(this.newMemberName);
    this.newMemberName="";
    console.log(this.members);
  }

  generateTeams(){

    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage="invalid number of teams";
      return;
    }

    if(this.members.length<this.numberOfTeams){
      this.errorMessage="Not Enough Members";
      return;
    }

    this.errorMessage = "";
    const allMembers = [...this.members];

   while(allMembers.length){
    for(let i=0; i<this.numberOfTeams; i++){
      const randomOfIndex = Math.floor(Math.random()* allMembers.length);
      const member = allMembers.splice(randomOfIndex,1)[0];
      if(!member)break;
      if(this.teams[i]){
        this.teams[i].push(member);
      }else{
        this.teams[i]=[member];
      }
    }
   }

   this.members=[];
   this.numberOfTeams="";

   console.log(this.teams);
  }
}
