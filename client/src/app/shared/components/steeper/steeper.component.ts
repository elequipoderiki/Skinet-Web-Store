import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-steeper',
  templateUrl: './steeper.component.html',
  styleUrls: ['./steeper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: SteeperComponent}]
})

export class SteeperComponent extends CdkStepper implements OnInit {

  @Input() linearModeSelected!: boolean;

  ngOnInit(): void {
    this.linear = this.linearModeSelected;
  }

  onClick(index: number){
    this.selectedIndex = index;
  }


}
