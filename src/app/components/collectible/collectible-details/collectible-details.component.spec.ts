import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectibleDetailsComponent } from './collectible-details.component';

describe('CollectibleDetailsComponent', () => {
  let component: CollectibleDetailsComponent;
  let fixture: ComponentFixture<CollectibleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectibleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectibleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
