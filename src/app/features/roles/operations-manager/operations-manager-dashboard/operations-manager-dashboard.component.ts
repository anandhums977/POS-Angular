import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import { EChartsCoreOption } from 'echarts/core';
import * as echarts from 'echarts';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoaderService } from '../../../../core/services/loader.service';



@Component({
  selector: 'app-operations-manager-dashboard',
  standalone: true,
  imports: [
    NgxEchartsModule,CommonModule,
    FormsModule
    , CommonModule
  ],
  templateUrl: './operations-manager-dashboard.component.html',
  styleUrl: './operations-manager-dashboard.component.scss',
  providers: [
    provideEchartsCore({ echarts })
  ]
})
export class OperationsManagerDashboardComponent implements OnInit{
  chartOption:any;
  customers!: any[];
  loading: boolean = true;
  representatives!: any[];

  statuses!: any[];


  activityValues: number[] = [0, 100];
  constructor(private loaderService:LoaderService){
    
  }
  ngOnInit(): void {
      this.chartOption = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Sales',
            type: 'pie',
            radius: ['40%', '70%'], // Inner and outer radius for the donut effect
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Bike Tax' },
              { value: 735, name: 'Table Tax' },
              { value: 580, name: 'Parking Tax' },
              { value: 484, name: 'Cleaning Tax' },
              { value: 300, name: 'Stall' }
            ]
          }
        ]
      };

}


simulateLoading() {
  console.log('+++++++++++++++++++++++++++++++');
  
  this.loaderService.show();

  // Simulate a delay, e.g., an HTTP call
  setTimeout(() => {
    this.loaderService.hide();
  }, 3000);
}
}