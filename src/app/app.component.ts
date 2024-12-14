import { Component } from '@angular/core';
import { ThemeComponent } from './theme/theme/theme.component';
import { NgxEchartsDirective,provideEchartsCore } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, GridComponent, CanvasRenderer]);
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,NgxEchartsDirective,ThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    provideEchartsCore({ echarts }),
  ]
})
export class AppComponent {
  title = 'CTax';
  data: any;
}
