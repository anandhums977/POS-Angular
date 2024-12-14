import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListZoneManagersComponent } from './list-zone-managers.component';

describe('ListZoneManagersComponent', () => {
  let component: ListZoneManagersComponent;
  let fixture: ComponentFixture<ListZoneManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListZoneManagersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListZoneManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
