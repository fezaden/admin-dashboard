import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import {
  ChartOptions,
  ChartType,
  ChartData
} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Genel ayarlar
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  // Bar Chart (Aylık kullanıcılar)
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
    datasets: [
      {
        label: 'Yeni Kullanıcılar',
        data: [5, 10, 8, 12, 7],
        backgroundColor: '#42A5F5'
      }
    ]
  };

  // Pie Chart (Durum dağılımı)
  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie'> = {
    labels: ['Aktif', 'Pasif', 'Yeni'],
    datasets: [
      {
        data: [10, 5, 3],
        backgroundColor: ['#42A5F5', '#FFA726', '#66BB6A']
      }
    ]
  };

  // Line Chart (Günlük giriş)
  public lineChartType: ChartType = 'line';
  public lineChartData: ChartData<'line'> = {
    labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum'],
    datasets: [
      {
        label: 'Günlük Girişler',
        data: [12, 19, 3, 5, 2],
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66,165,245,0.2)',
        fill: true
      }
    ]
  };
}
