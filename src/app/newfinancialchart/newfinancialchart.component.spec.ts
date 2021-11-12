import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { NewFinancialChartComponent } from './newfinancialchart.component';

describe('NewFinancialChartComponent', () => {
  let component: NewFinancialChartComponent;
  let fixture: ComponentFixture<NewFinancialChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewFinancialChartComponent],
      imports: [IgxFinancialChartModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFinancialChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
