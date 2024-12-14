import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaxCollectionAreaComponent } from './list-tax-collection-area.component';

describe('ListTaxCollectionAreaComponent', () => {
  let component: ListTaxCollectionAreaComponent;
  let fixture: ComponentFixture<ListTaxCollectionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTaxCollectionAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTaxCollectionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
