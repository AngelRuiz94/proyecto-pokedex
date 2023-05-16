import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokeComponent } from './poke-list.component';

describe('HomePokeComponent', () => {
  let component: ListPokeComponent;
  let fixture: ComponentFixture<ListPokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPokeComponent]
    });
    fixture = TestBed.createComponent(ListPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
