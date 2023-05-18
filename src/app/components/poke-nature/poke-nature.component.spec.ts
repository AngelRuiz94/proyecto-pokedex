import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeNatureComponent } from './poke-nature.component';

describe('PokeNatureComponent', () => {
  let component: PokeNatureComponent;
  let fixture: ComponentFixture<PokeNatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeNatureComponent]
    });
    fixture = TestBed.createComponent(PokeNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
