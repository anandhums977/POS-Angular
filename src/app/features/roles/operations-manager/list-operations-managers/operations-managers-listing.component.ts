import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeComponent } from '../../../../common/tree/tree.component';
import * as d3 from 'd3';

@Component({
  selector: 'app-operations-managers-listing',
  standalone: true,
  imports: [FormsModule, CommonModule, TreeComponent],
  templateUrl: './operations-managers-listing.component.html',
  styleUrl: './operations-managers-listing.component.scss',
})
export class OperationsManagersListingComponent
  implements OnInit, AfterViewInit
{
  @Input() data: any;
  constructor() {}

  treeData = [
    {
      name: 'Zelda',
      role: 'Operations Manager',
      children: [
        {
          name: 'Tom',
          role: 'Zone Manager',
          children: [ 
            { name: 'William', role: 'TCA', children: [] },
            { name: 'Olivia', role: 'TCA', children: [] },],
        },
        {
          name: 'Ellie',
          role: 'Zone Manager',
          children: [
            {
              name: 'Stella',
              role: 'TCA',
              children: [],
            },
            { name: 'Sonia', role: 'TCA', children: [] },
          ],
        },
        {
          name: 'john',
          role: 'Zone Manager',
          children: [
            { name: 'jomy', role: 'TCA', children: [] },
            { name: 'Sofia', role: 'TCA', children: [] },
            { name: 'Emma', role: 'TCA', children: [] },
            { name: 'Michael', role: 'TCA', children: [] },
          ],
        },
        {
          name: 'Majora',
          role: 'Zone Manager',
          children: [
            { name: 'jimmy', role: 'TCA', children: [] },
            { name: 'Henry', role: 'TCA', children: [] },
            { name: 'Charlotte', role: 'TCA', children: [] },
          ],
        },
      ],
    },
  ];
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeZoom();
  }

  initializeZoom(): void {
    const container = d3.select('#zoom-container');
    const content = d3.select('#zoomable-content');

    // Initialize zoom behavior
    const zoom: any = d3
      .zoom()
      .scaleExtent([0.1, 3]) // Zoom scale range (min: 40%, max: 300%)
      .on('zoom', (event) => {
        // Apply the zoom transformation to the content
        content.style(
          'transform',
          `translate(${event.transform.x}px, ${event.transform.y}px) scale(${event.transform.k})`
        );
      });

    // Apply the zoom to the container
    container.call(zoom);

    // Set initial scale to 40% and center content
    const initialTransform = d3.zoomIdentity.translate(0, 0).scale(0.4);
    container.call(zoom.transform, initialTransform); // Apply initial transform
    content.style('transform', `scale(0.5)`); // Set the content's initial transform
  }
}
