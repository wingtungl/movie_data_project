// Fetch the CSV file
fetch('movie_trailer_data_reduced.csv')
    .then(response => response.text())
        .then(csvData => {
            // Parse the CSV data using PapaParse
            Papa.parse(csvData, {
                header: true, 
                dynamicTyping: true, 
                complete: function(papaResults) {
                    // papaResults.data contains the parsed data as an array of objects
                    const movie_trailer_data_reduced  = papaResults.data;
            
                     // linear regression graph
                     const xval = movie_trailer_data_reduced.slice(0, 20).map(entry =>entry.we8)
                     const regression = [];
                    for (i=0; i<= xval.length; i++) {
                        yval = 0.3829 +0.0263*i;
                        regression.push({x: i, y: yval})
                    }
                    const ctx = document.getElementById('linear5').getContext('2d');
                        const scatterChart = new Chart(ctx, {
                            type:'scatter',
                            data:{
                                datasets: [
                                    {
                                        label: 'Box Office Sales',
                                        data: movie_trailer_data_reduced.slice(0, 20).map(entry => ({
                                            x: entry.we8,
                                            y: entry.ve8})), 
                                        borderColor: 'black',
                                        backgroundColor: 'black'
                                    }, 
                                    {
                                        label: 'Linear Fit',
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
                                                labelString: 'Box Office Sales (1e8)'
                                            },
                                            ticks: {
                                                min: 0,
                                                max: 16,
                                            },
                                        }
                                    ], 
                                    yAxes: [
                                        {
                                            type: 'linear', 
                                            scaleLabel: {
                                                display: true,
                                                labelString: 'Views (1e8)'
                                            },
                                            ticks: {
                                                min: 0, 
                                                max: 1.5,
                                            }
                                        }]
                                }
                            }
                        });
                    }
                });
            });