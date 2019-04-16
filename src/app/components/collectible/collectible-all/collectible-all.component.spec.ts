import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectibleAllComponent } from './collectible-all.component';

describe('CollectibleAllComponent', () => {
  let component: CollectibleAllComponent;
  let fixture: ComponentFixture<CollectibleAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectibleAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectibleAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
