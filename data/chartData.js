export const overviewChartData = {
  options: {
    chart: {
      type: "area",
      dropShadow: {
        enabled: true,
        top: 10,
        left: 0,
        blur: 3,
        color: "#720f1e",
        opacity: 0.15,
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    markers: {
      strokeWidth: 4,
      strokeColors: "#ffffff",
      hover: {
        size: 9,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      lineCap: "butt",
      width: 4,
    },
    legend: {
      show: false,
    },
    colors: ["#4b55c4"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.4,
        stops: [0, 90, 100],
      },
    },
    grid: {
      xaxis: {
        lines: {
          borderColor: "transparent",
          show: false,
        },
      },
      yaxis: {
        lines: {
          borderColor: "transparent",
          show: false,
        },
      },
      padding: {
        right: -112,
        bottom: 0,
        left: 15,
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          grid: {
            padding: {
              right: -95,
            },
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          grid: {
            padding: {
              right: -69,
            },
          },
        },
      },
    ],
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "K";
        },
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      range: undefined,
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: "#4b55c4",
          width: 1,
          dashArray: 0,
        },
      },
    },
    tooltip: {
      formatter: undefined,
    },
  },
  series: [
    {
      name: "$2530.00",
      data: [20, 25, 20, 30, 20, 50, 30, 35, 25, 60, 0],
    },
  ],
};

export const agentSalesData = {
  options: {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "40%",
      },
    },
    grid: {
      xaxis: {
        lines: {
          borderColor: "transparent",
          show: false,
        },
      },
      yaxis: {
        lines: {
          borderColor: "transparent",
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 1199,
        options: {
          chart: {
            height: 270,
          },
        },
      },
    ],
    colors: ["#ff8c41"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 1,
        type: "horizontal",
        gradientToColors: ["#ffffff"],
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },

    xaxis: {
      categories: ["Zack Lee", "Greta Life", "Bob Frapples", "Paige Turner", "Brock Lee", "Mary Goround", "Zack Lee"],
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  },
  series: [
    {
      data: [1380, 1200, 1100, 900, 700, 500, 400],
    },
  ],
};

export const availablePropertyData = {
  options: {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        track: {
          show: true,
          background: "#f2f2f2",
          strokeWidth: "20%",
          opacity: 1,
          margin: 5,
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        dataLabels: {
          name: {},
          value: {
            show: false,
          },
          total: {
            show: true,
            fontSize: "40px",
            fontWeight: 400,
            label: "80",
          },
        },
      },
    },

    labels: ["property"],
    colors: ["#4b55c4"],
    stroke: {
      lineCap: "round",
    },
  },
  series: [80],
};

export const smallChartData1 = {
  options: {
    chart: {
      type: "bar",
      width: "100%",
      stacked: true,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
      },
    },

    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
    },
  },

  series: [
    {
      data: [25, 66, 41, 89, 63, 25, 44],
    },
  ],
};
