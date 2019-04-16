import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectibleEditComponent } from './collectible-edit.component';

describe('CollectibleEditComponent', () => {
  let component: CollectibleEditComponent;
  let fixture: ComponentFixture<CollectibleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectibleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectibleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
