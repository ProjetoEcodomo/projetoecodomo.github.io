<template>
  <div id="chart">
    <chart class="chart" type="area" :options="options" :series="series"></chart>
  </div>
</template>
``
<script>
import chart from 'vue-apexcharts';

export default {
  components: {
    chart,
  },
  props: ['data'],
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart',
        },
        xaxis: {
          type: 'datetime',
          categories: ['2018-09-19T00:00:00', '2018-09-19T01:30:00', '2018-09-19T02:30:00',
            '2018-09-19T03:30:00', '2018-09-19T04:30:00', '2018-09-19T05:30:00',
            '2018-09-19T06:30:00'],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy',
          },
        },
      },
      series: [
        {
          name: 'Umidade do Solo',
          data: [30, 40, 45, 50, 49, 60, 70],
        },
        {
          name: 'Temperatura do Solo',
          data: [10, 20, 25, 30, 15, 50, 30],
        },
        {
          name: 'Umidade do Ambiente',
          data: [14, 21, 11, 20, 23, 21, 23],
        },
        {
          name: 'Luminosidade do Ambiente',
          data: [12, 23, 12, 34, 54, 12, 34],
        },
        {
          name: 'Temperatura do Ambiente',
          data: [10, 22, 12, 24, 32, 12, 33],
        },
      ],
      chartOptions: {
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth',
        },
      },
    };
  },
  mounted() {
  },
};
</script>

<style scoped>
.chart {
  width: 80%;
  margin: auto;
}
</style>
