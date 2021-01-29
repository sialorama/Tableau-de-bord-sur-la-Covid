Highcharts.chart('container', {

    title: {
      text: 'DONNEES HOSPITALIERES RELATIVES AU COVID 19'
    },
  
    subtitle: {
      text: 'données gouvernementales'
    },
  
  
    yAxis: [{
      className: 'highcharts-color-0',
      title: {
        text: 'Nombre de patients'
      },
      lineColor: '#FF0000',
      lineWidth: 1
    }, {
      className: 'highcharts-color-1',
      opposite: true,
      title: {
        text: 'Nombres de patients cumulés'
      },
      lineColor: '#0095B6',
      lineWidth: 1
    }],
  
  
    xAxis: {
      type: 'datetime'
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: Date.UTC(2020, 2, 18),
       pointInterval: 24 * 3600 * 1000 // one day
        }
    },
  
    series: [{
      name: 'hosp',
      color: '#E0115F',
      data: Object.values(donneesfrompython.hosp)
    }, {
      name: 'rad',
      color: '#83A697',
      data: Object.values(donneesfrompython.rad),
      yAxis: 1
    }, {
      name: 'dc',
      color: '#22427C',
      data: Object.values(donneesfrompython.dc)
    }, {
      name: 'rea',
      color: '#FF7F00',
      data: Object.values(donneesfrompython.rea)
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });


 
Highcharts.chart('container3', {
    title: {
      text: 'MOYENNE PAR SEXE POUR LA PERIODE DU 18 MARS 2020 AU 21 JANVIER 2021'
    },
    xAxis: {
      categories: ['TOTAL', 'HOMME', 'FEMME']
    },
    labels: {
      items: [{
        html: 'Moyenne Total des hommes et femmes',
        style: {
          left: '50px',
          top: '18px',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'black'
        }
      }]
    },
    series: [{
      type: 'column',
      name: 'hosp',
      color: '#E0115F',
      data: Object.values(donnees3frompython.hosp)
    }, {
      type: 'column',
      name: 'rad',
      color: '#83A697',
      data: Object.values(donnees3frompython.rad)
    }, {
      type: 'column',
      name: 'dc',
      color: '#22427C',
      data: Object.values(donnees3frompython.dc)
    }, {
      type: 'column',
      name: 'rea',
      color: '#FF7F00',
      data: Object.values(donnees3frompython.rea)
    }, ]
});



Highcharts.chart('container4', {
  title: {
    text: 'DONNEES HOSPITALIERES POUR LE DEPARTEMENT DU FINISTERE POUR LA PERIODE DU 18 MARS 2020 AU 21 JANVIER 2021'
  },
  xAxis: {
    categories: ['TOTAL']
  },
  labels: {
    items: [{
      html: 'Nombre total',
      style: {
        left: '50px',
        top: '18px',
        color: ( // theme
          Highcharts.defaultOptions.title.style &&
          Highcharts.defaultOptions.title.style.color
        ) || 'black'
      }
    }]
  },
  series: [{
    type: 'column',
    name: 'hosp',
    color: '#E0115F',
    data: Object.values(donnees4frompython.hosp)
  }, {
    type: 'column',
    name: 'rad',
    color: '#83A697',
    data: Object.values(donnees4frompython.rad)
  }, {
    type: 'column',
    name: 'dc',
    color: '#22427C',
    data: Object.values(donnees4frompython.dc)
  }, {
    type: 'column',
    name: 'rea',
    color: '#FF7F00',
    data: Object.values(donnees4frompython.rea)
  }, ]
});


var arr = [];

for (var key in donnees5frompython.hosp) {
    if (donnees5frompython.hosp.hasOwnProperty(key)) {
        arr.push( [ key, donnees5frompython.hosp[key] ] );
    }
}

Highcharts.chart('container5', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Nombre hospitalisations par département pour la période du 18 mars 2020 au 21 janvier 2021'
  },
  
  xAxis: {
    type: 'category',
    labels: {
      rotation: -45,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'nombre hospitalisations total'
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: 'Hospitalisations: <b>{point.y:.1f} nombre</b>'
  },
  series: [{
    name: 'hospitalisation',
    data: arr,
    dataLabels: {
      enabled: true,
      rotation: -90,
      color: '#FFFFFF',
      align: 'right',
      format: '{point.y:.1f}', // one decimal
      y: 10, // 10 pixels down from the top
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  }]
});



Highcharts.chart('container6', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Part des réanimations sur les hospitalisations par sexe pour la période du 18 mars 2020 au 21 janvier 2021'
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Pourcentage des réanimations'
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [
    {
      name: "Browsers",
      colorByPoint: true,
      data: [
        {
          name: "Total Réanimations",
          y: 14,
          drilldown: "Total réanimations"
        },
        {
          name: "Total hommes en réanimation",
          y: 19,
          drilldown: "Total hommes en réanimation"
        },
        {
          name: "Total femmes en réanimation ",
          y: 8,
          drilldown: "Total femmes en réanimation"
        },
        
      ]
    }
  ],
  drilldown: {
    series: [
      {
        name: "Total Réanimations",
        id: "Total Réanimations",
        data: Object.values(donnees6frompython)
      },
      {
        name: "Firefox",
        id: "Firefox",
        data: [
          [
            "v58.0",
            1.02
          ],
          [
            "v57.0",
            7.36
          ],
          [
            "v56.0",
            0.35
          ],
          [
            "v55.0",
            0.11
          ],
          [
            "v54.0",
            0.1
          ],
          [
            "v52.0",
            0.95
          ],
          [
            "v51.0",
            0.15
          ],
          [
            "v50.0",
            0.1
          ],
          [
            "v48.0",
            0.31
          ],
          [
            "v47.0",
            0.12
          ]
        ]
      },
      {
        name: "Internet Explorer",
        id: "Internet Explorer",
        data: [
          [
            "v11.0",
            6.2
          ],
          [
            "v10.0",
            0.29
          ],
          [
            "v9.0",
            0.27
          ],
          [
            "v8.0",
            0.47
          ]
        ]
      },
      {
        name: "Safari",
        id: "Safari",
        data: [
          [
            "v11.0",
            3.39
          ],
          [
            "v10.1",
            0.96
          ],
          [
            "v10.0",
            0.36
          ],
          [
            "v9.1",
            0.54
          ],
          [
            "v9.0",
            0.13
          ],
          [
            "v5.1",
            0.2
          ]
        ]
      },
      {
        name: "Edge",
        id: "Edge",
        data: [
          [
            "v16",
            2.6
          ],
          [
            "v15",
            0.92
          ],
          [
            "v14",
            0.4
          ],
          [
            "v13",
            0.1
          ]
        ]
      },
      {
        name: "Opera",
        id: "Opera",
        data: [
          [
            "v50.0",
            0.96
          ],
          [
            "v49.0",
            0.82
          ],
          [
            "v12.1",
            0.14
          ]
        ]
      }
    ]
  }
});


