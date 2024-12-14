import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent implements OnInit{
  @Input() data: any;

  constructor(){}

  ngOnInit(): void {
      
  }

  hasChildren(node: any): boolean {
    return node.children && node.children.length > 0;
  }
}
