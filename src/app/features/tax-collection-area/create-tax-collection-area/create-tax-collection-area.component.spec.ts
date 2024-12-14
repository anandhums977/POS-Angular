import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaxCollectionAreaComponent } from './create-tax-collection-area.component';

describe('CreateTaxCollectionAreaComponent', () => {
  let component: CreateTaxCollectionAreaComponent;
  let fixture: ComponentFixture<CreateTaxCollectionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTaxCollectionAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTaxCollectionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
