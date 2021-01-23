import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PrvaKomponentaComponent', () => {
  let component: PrvaKomponentaComponent;
  let fixture: ComponentFixture<PrvaKomponentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrvaKomponentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvaKomponentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
