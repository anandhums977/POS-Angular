import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeComponent } from '../../../../common/tree/tree.component';
import * as d3 from 'd3';

@Component({
  selector: 'app-operations-managers-listing',
  standalone: true,
  imports: [
    FormsModule, CommonModule,TreeComponent
  ],
  templateUrl: './operations-managers-listing.component.html',
  styleUrl: './operations-managers-listing.component.scss',
})
export class OperationsManagersListingComponent implements OnInit,AfterViewInit {
    @Input() data: any;
    constructor(){}

   
    treeData = [{
        name: 'Zelda Timeline',
        children: [
          {
            name: 'Skyward Sword',
            children: []
          },
          {
            name: 'The Minish Cap',
            children: [
              {
                name: 'Four Swords',
                children: [
                  {
                    name: 'Ocarina of Time',
                    children: [
                      {
                        name: 'A Link to the Past',
                        children: [
                          { name: 'Oracle of Seasons & Oracle of Ages', children: [] },
                          { name: 'Link\'s Awakening', children: [] }
                        ]
                      },
                      { name: 'Adventure of Link',  children: [] }
                    ]
                  }
                ]
              },
              { name: 'The Wind Waker',  children: [
                { name: 'pr Oracle of Ages', children: [] },
                { name: 'Lock Awakening', children: [] }
              ] }
            ]
          },
          { name: 'The Wind Waker', children: [] },
          {
            name: 'Majora\'s Mask',
            children: [
              { name: 'Twilight Princess', children: [] }
            ]
          }
        ]
      }];
    ngOnInit(): void {
        
    }

    ngAfterViewInit(): void {
        this.initializeZoom();
      }
    
      initializeZoom(): void {
        const container = d3.select('#zoom-container');
        const content = d3.select('#zoomable-content');
    
        // Initialize zoom behavior
        const zoom:any = d3.zoom()
          .scaleExtent([0.10, 3]) // Zoom scale range (min: 40%, max: 300%)
          .on('zoom', (event) => {
            // Apply the zoom transformation to the content
            content.style('transform', `translate(${event.transform.x}px, ${event.transform.y}px) scale(${event.transform.k})`);
          });
    
        // Apply the zoom to the container
        container.call(zoom);
    
        // Set initial scale to 40% and center content
        const initialTransform = d3.zoomIdentity.translate(0, 0).scale(0.4);
        container.call(zoom.transform, initialTransform); // Apply initial transform
        content.style('transform', `scale(0.5)`); // Set the content's initial transform
      }
}