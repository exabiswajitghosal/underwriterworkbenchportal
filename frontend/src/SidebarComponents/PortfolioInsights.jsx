import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './PortfolioInsights.css';

const PortfolioInsights = () => {
  // Written Premium By Year Chart
  const premiumChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    colors: ['#0066CC', '#E0E0E0'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['2019', '2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: [
      {
        title: {
          text: 'Written Premium'
        },
        labels: {
          formatter: (value) => `$${value.toLocaleString()}`
        }
      },
      {
        opposite: true,
        title: {
          text: 'Margin (%)'
        },
        labels: {
          formatter: (value) => `${value}%`
        }
      }
    ],
    markers: {
      size: 5
    },
    stroke: {
      curve: 'smooth'
    }
  };

  const premiumChartSeries = [
    {
      name: 'Written Premium',
      type: 'bar',
      data: [120000, 130000, 150000, 110000, 190000, 160000]
    },
    {
      name: 'Margin',
      type: 'line',
      data: [34, 44, 30, 14, 24, 19.2]
    },
    {
      name: 'Industry Benchmark',
      type: 'line',
      data: [30, 30, 30, 30, 30, 30]
    }
  ];

  // Product Distribution Pie Chart
  const productChartOptions = {
    chart: {
      type: 'pie',
      background: 'transparent'
    },
    colors: ['#0066CC', '#66B2FF', '#99CCFF', '#CCE5FF'],
    labels: ['Commercial Auto', 'Commercial Property', 'Commercial Liability', 'Inland marine'],
    legend: {
      position: 'bottom'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const productChartSeries = [40, 30, 20, 10];

  // Policy Count Chart
  const policyCountOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    colors: ['#0066CC', '#9966FF', '#FF6666'],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['2024', '2023', '2022'],
    }
  };

  const policyCountSeries = [{
    data: [13156, 26950, 15812]
  }];

  // New Claim History Donut Chart
  const claimHistoryOptions = {
    chart: {
      type: 'donut',
      background: 'transparent'
    },
    colors: ['#0066CC', '#FF69B4', '#4B0082', '#FFB6C1'],
    labels: ['Commercial Auto', 'Commercial Property', 'Commercial Liability', 'Inland marine'],
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Claim Amount',
              formatter: () => '$ 100,000'
            }
          }
        }
      }
    },
    legend: {
      position: 'right',
      formatter: function(val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%"
      }
    },
    dataLabels: {
      enabled: false
    }
  };

  const claimHistorySeries = [40, 30, 20, 10];

  return (
    <div className="dashboard">
        <div className="charts-grid">
      <div className="card premium-chart">
        <h2 className="card-header">Written Premium By Year</h2>
        <div className="chart-container">
          <ReactApexChart 
            options={premiumChartOptions}
            series={premiumChartSeries}
            type="line"
            height={320}
            width={500}
          />
        </div>
      </div>
      <div className="card claim-history">
          <h2 className="card-header">Claim History</h2>
          <div className="chart-container">
            <ReactApexChart 
              options={claimHistoryOptions}
              series={claimHistorySeries}
              type="donut"
              height={320}
              width={500}
            />
          </div>
        </div>
        </div>

      <div className="charts-grid">
        <div className="card business-card">
          <h2 className="card-header">Book Of Business</h2>
          <div className="business-stats">
            <div className="stats-row" >
              <div className="stat-item">
                <p className="stat-value">$100,000</p>
                <p className="stat-label">Written Premium</p>
              </div>
              <div className="stat-item">
                <p className="stat-value">1000</p>
                <p className="stat-label">Policy Count</p>
              </div>
            </div>
            <div className="stats-row">
              <div className="stat-item">
                <p className="stat-value">$100,000</p>
                <p className="stat-label">Claim Amount</p>
              </div>
              <div className="stat-item">
                <p className="stat-value negative">100</p>
                <p className="stat-label">Claim Count</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card product-chart">
          <h2 className="card-header">Written Premium By Product</h2>
          <div className="chart-container">
            <ReactApexChart 
              options={productChartOptions}
              series={productChartSeries}
              type="pie"
              height={250}
            />
          </div>
        </div>

        <div className="card policy-chart">
          <h2 className="card-header">Policy Count By Year</h2>
          <div className="chart-container">
            <ReactApexChart 
              options={policyCountOptions}
              series={policyCountSeries}
              type="bar"
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInsights;