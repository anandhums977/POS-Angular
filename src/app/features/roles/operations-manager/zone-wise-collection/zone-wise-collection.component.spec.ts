import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneWiseCollectionComponent } from './zone-wise-collection.component';

describe('ZoneWiseCollectionComponent', () => {
  let component: ZoneWiseCollectionComponent;
  let fixture: ComponentFixture<ZoneWiseCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneWiseCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneWiseCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
