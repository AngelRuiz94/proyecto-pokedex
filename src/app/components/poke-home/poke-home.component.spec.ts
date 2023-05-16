import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePokeComponent } from './poke-home.component';

describe('HomePokeComponent', () => {
  let component: HomePokeComponent;
  let fixture: ComponentFixture<HomePokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePokeComponent]
    });
    fixture = TestBed.createComponent(HomePokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
