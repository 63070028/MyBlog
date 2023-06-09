import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id: string|undefined = '';
  isShowComment:boolean = false;

  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')?.toString();
  }

}
