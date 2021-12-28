import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-per-categ',
  templateUrl: './prod-per-categ.component.html',
  styleUrls: ['./prod-per-categ.component.scss']
})
export class ProdPerCategComponent implements OnInit {
  category_name = 'Face Mask';
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.category_name = params.name;
            
    });
   }

  ngOnInit(): void {
    console.log(this.category_name,'TESTING THE CATEGORY NAME WE ARE GETTING ON NAVLINK CLICK');
  }

}
