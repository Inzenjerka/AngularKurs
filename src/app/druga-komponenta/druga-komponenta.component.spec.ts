
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('DrugaKomponentaComponent', () => {
  let component: DrugaKomponentaComponent;
  let fixture: ComponentFixture<DrugaKomponentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugaKomponentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugaKomponentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
