import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as echarts from 'echarts'; // Import echarts

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit, AfterViewInit, OnDestroy {

  private chartInstance: any;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createGaugeChart();
  }

  ngOnDestroy(): void {
    if (this.chartInstance) {
      this.chartInstance.dispose(); // Clean up to avoid memory leaks
    }
  }

  // Create the ECharts gauge chart
  createGaugeChart(): void {
    const element = document.getElementById('loader-container') as HTMLElement;

    this.chartInstance = echarts.init(element);

    const option = {
      graphic: {
        elements: [
          {
            type: 'group',
            left: 'center',
            top: 'center',
            children: new Array(7).fill(0).map((val, i) => ({
              type: 'rect',
              x: i * 20,
              shape: {
                x: 0,
                y: -40,
                width: 10,
                height: 80
              },
              style: {
                fill: '#32a852'
              },
              keyframeAnimation: {
                duration: 1000,
                delay: i * 200,
                loop: true,
                keyframes: [
                  {
                    percent: 0.5,
                    scaleY: 0.3,
                    easing: 'cubicIn'
                  },
                  {
                    percent: 1,
                    scaleY: 1,
                    easing: 'cubicOut'
                  }
                ]
              }
            }))
          }
        ]
      }
    };
    this.chartInstance.setOption(option);
    
    // Optionally, you can update the gauge dynamically if needed
  
  }
}
