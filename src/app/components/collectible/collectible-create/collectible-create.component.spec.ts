import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectibleCreateComponent } from './collectible-create.component';

describe('CollectibleCreateComponent', () => {
  let component: CollectibleCreateComponent;
  let fixture: ComponentFixture<CollectibleCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectibleCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectibleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
