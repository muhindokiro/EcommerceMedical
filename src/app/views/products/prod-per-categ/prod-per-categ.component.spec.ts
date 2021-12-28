import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPerCategComponent } from './prod-per-categ.component';

describe('ProdPerCategComponent', () => {
  let component: ProdPerCategComponent;
  let fixture: ComponentFixture<ProdPerCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdPerCategComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdPerCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
