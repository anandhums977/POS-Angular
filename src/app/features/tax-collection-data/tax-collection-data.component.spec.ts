import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCollectionDataComponent } from './tax-collection-data.component';

describe('TaxCollectionDataComponent', () => {
  let component: TaxCollectionDataComponent;
  let fixture: ComponentFixture<TaxCollectionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxCollectionDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxCollectionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
