// Fetch the CSV file
fetch('movie_trailer_data.csv')
    .then(response => response.text())
        .then(csvData => {
            // Parse the CSV data using PapaParse
            Papa.parse(csvData, {
                header: true, 
                dynamicTyping: true, 
                complete: function(papaResults) {
                    // papaResults.data contains the parsed data as an array of objects
                    const movie_trailer_data = papaResults.data;
            
                     // linear regression graph
                    const xval = movie_trailer_data.slice(0, 20).map(entry =>entry.Worldwide)
                    const regression = [];
                    for (i=0; i= xval.length; i++) {
                        yval = 38134219.27 +0.027*i;
                        regression.push({x: i, y: yval})
                    }
                    const ctx = document.getElementById('linear4').getContext('2d');
                        const scatterChart = new Chart(ctx, {
                            type:'scatter',
                            data:{
                                datasets: [
                                    {
                                        label: 'Scatter Dataset',
                                        data: movie_trailer_data.slice(0, 20).map(entry => ({
                                            x: entry.Worldwide,
                                            y: entry.viewcount})),
                                        borderColor: 'black',
                                        backgroundColor: 'black'
                                    }, 
                                    {
                                        label: 'regression line Dataset',
                                        data: regression,
                                        borderColor: 'green',
                                        backgroundColor: 'transparent',
                                        type: 'line'
                                    }
                                ]
                            },
                            options: {
                                title: {
                                    display: true,
                                    text: 
                                    "Worldwide Top 20 Movies' Trailer Views and Box Office Sales Correlation (as of 12/27/23)",
                                    fontSize: 20
                                },
                                scales: {
                                    xAxes: [
                                        {
                                            type: 'linear', 
                                            position: 'bottom',
                                            scaleLabel: {
                                                display: true,
                                                labelString: 'box office sales'
                                            },
                                            ticks: {
                                                min: 0,
                                                max: 1400000000,
                                            },
                                        }
                                    ], 
                                    yAxes: [
                                        {
                                            type: 'linear', 
                                            scaleLabel: {
                                                display: true,
                                                labelString: 'viewcount'
                                            },
                                            ticks: {
                                                min: 0,
                                                max: 160000000,
                                            }
                                        }
                                    ]
                                }
                            }
                        });
                    }
                });
            });