import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAbilitiesComponent } from './poke-abilities.component';

describe('PokeAbilitiesComponent', () => {
  let component: PokeAbilitiesComponent;
  let fixture: ComponentFixture<PokeAbilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeAbilitiesComponent]
    });
    fixture = TestBed.createComponent(PokeAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
