import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFacturaComponent } from './productos-factura.component';

describe('ProductosFacturaComponent', () => {
  let component: ProductosFacturaComponent;
  let fixture: ComponentFixture<ProductosFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
