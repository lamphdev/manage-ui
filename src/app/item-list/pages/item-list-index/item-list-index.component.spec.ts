import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListIndexComponent } from './item-list-index.component';

describe('ItemListIndexComponent', () => {
  let component: ItemListIndexComponent;
  let fixture: ComponentFixture<ItemListIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
