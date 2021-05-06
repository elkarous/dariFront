import {Component, Inject, Input, OnInit} from '@angular/core';

import * as CanvasJS from 'src/assets/canvasjs.min';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Unitprice} from '../../shered/model/unitprice';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }


  ngOnInit(): void {
    console.log(this.data)
    let dataPoints = [];
    for ( var value of this.data.keys()) {

      dataPoints.push({ y: this.data.get(value),label:value});
    }
    let chart = new CanvasJS.Chart("chartContainer", {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Simulation Chart "
      },

      data: [
        {
          type: "column",
          dataPoints: dataPoints
        }]
    });

    chart.render();

  }


}
