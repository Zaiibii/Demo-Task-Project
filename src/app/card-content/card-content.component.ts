import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent {

  @Input()headercon:any;
  tableData = [
    { column1: 'North West Warriors v Leinster Lightning / 23/5/2023 02:45 PM', column2: '1.14', column3: '1.77', column4: "-", column5: "-", column6: "5.67", column7: "3.76" },
    { column1: 'Northern knights v Munster Reds / 23/5/2023 02:45 PM', column2: '0', column3: '0', column4: "-", column5: "-", column6: "0", column7: "0" },
    { column1: 'Gujrat Titans v Chennai Super Kings / 23/5/2023 07:00 PM', column2: '0', column3: '0', column4: "-", column5: "-", column6: "0", column7: "0" },
    { column1: 'Southern Vipers v South East Stars / 23/5/2023 03:00 PM', column2: '0', column3: '0', column4: "-", column5: "-", column6: "0", column7: "0" },
    { column1: 'Central Sporks v Northern Diamonds / 23/5/2023 03:00 PM', column2: '0', column3: '0', column4: "-", column5: "-", column6: "0", column7: "0" },
  ];
  
}
