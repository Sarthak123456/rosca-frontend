import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
export interface PeriodicElement {
  name: string;
  winner: number;
  start_comity: string;
  round:number
  bid_amount: number;
}

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {
  displayedColumns: string[] = ['name' , 'winner' , 'start_comity', 'bid_amount' , 'round'];
  faTrash:any = faTrash;
  faCheck:any = faCheck;

  ELEMENT_DATA: any = [];
  dataSource:any = [];
  snackBarRef: any;
  showActionColumn:boolean = false;
  groupName = '';
  groupId = '';

  users:any;
  constructor( private _httpService:HttpService , private route:ActivatedRoute, private _snackBar: MatSnackBar, private titleService:Title) {
    const title = ['View Group'];
    // console.log(this.titleService.getTitle());

    if(this.titleService.getTitle().indexOf('|') !== -1){
      this.titleService.setTitle(([this.titleService.getTitle().split(' | ')[0] , title]).join(' | '));

    }else{
      this.titleService.setTitle(([this.titleService.getTitle() , title]).join(' | '));
    }
   }

  ngOnInit(): void {

    this.groupId = this.route.snapshot.params.groupId;
    this.viewGroup();
  }

  viewGroup(){

    this._httpService.viewGroup(this.groupId)
    .subscribe(
      data => {
      this.ELEMENT_DATA = data;
      // console.log(this.ELEMENT_DATA);
      this.groupName = this.ELEMENT_DATA[0].group_name;
      if(this.ELEMENT_DATA[0].status !== 'active'){
        this.showActionColumn = true;
        this.displayedColumns.push('action');

      }
      // console.log(this.dataSource);
      // let jsonObj: any = JSON.parse(JSON.stringify(data));
      // console.log(JSON.parse(jsonObj.data));

      // this.users = JSON.parse(jsonObj.users.replaceAll("'" , '"'));

      // this.users = data;
      this.dataSource = this.ELEMENT_DATA;
      // this.dataSource[0].action = 'action'
      // this.dataSource[1].action = 'action'
      // this.dataSource[2].action = 'action'


  },
    error => {
      console.log("error" , error)
  })
  }

  deleteUser(userName:any){
    // console.log("userName = " , userName);
    // this.dataSource =  this.dataSource.find((item:any) => {item.name === userName});

    // console.log("index = " , i);
    // console.log("ELEMENT_DATA = " , this.ELEMENT_DATA);


    // this.ELEMENT_DATA.splice(i,1);
    // this.dataSource = this.ELEMENT_DATA;
    // if(this.dataSource.length > 0){
    //   this.dataSource = this.dataSource.filter((element:any) => element.name !== userName)
    //   console.log("dataSource = " , this.dataSource);

    // }

    this.openSnackBar(`Are you sure you want to delete ${userName} from the group!`, "yes");

    this.snackBarRef.afterDismissed().subscribe((action:any) => {
      // console.log('::::::::::The snack-bar was dismissed', action);

      if(action.dismissedByAction == true){
          this._httpService.deleteUser(userName, this.groupId)
          .subscribe(
            data => {
            this.ELEMENT_DATA = data;
            if(this.ELEMENT_DATA.delete === 'success'){
              this.dataSource = this.dataSource.filter((element:any) => element.name !== userName)
              this.openSnackBar(`${userName} deleted from the group!`, "close");

            } else{
              this.openSnackBar(`Some error occured while deleting ${userName} from the group!`, "close");
            }

        },
          error => {
            console.log("error" , error)
        })

      }
    });



  }

  openSnackBar(message: string, action: string) {
    this.snackBarRef = this._snackBar.open(message, action,{ duration: 5000});
  }



}
