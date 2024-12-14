import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOperationsManagerComponent } from './create-operations-manager.component';

describe('CreateOperationsManagerComponent', () => {
  let component: CreateOperationsManagerComponent;
  let fixture: ComponentFixture<CreateOperationsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOperationsManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOperationsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
