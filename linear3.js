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
                     const xval = movie_trailer_data.slice(0, 20).map(entry =>entry.Rank)
                     const regression = [];
                    for (i=0; i<= xval.length; i++) {
                        yval = 76042998.40 -2090421.71*i;
                        regression.push({x: i, y: yval})
                    }
                    const ctx = document.getElementById('linear3').getContext('2d');
                        const scatterChart = new Chart(ctx, {
                            type:'scatter',
                            data:{
                                datasets: [
                                    {
                                        label: 'Trailer Views',
                                        data: movie_trailer_data.slice(0, 20).map(entry => ({
                                            x: entry.Rank,
                                            y: entry.viewcount})), 
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
                                    "Worldwide Top 20 Movies' Trailer Views and Ranking Correlation (as of 12/27/23)",
                                    fontSize: 20
                                },
                                scales: {
                                    xAxes: [
                                        {
                                            type: 'linear', 
                                            position: 'bottom',
                                            scaleLabel: {
                                                display: true,
                                                labelString: 'Rank'
                                            },
                                            ticks: {
                                                min: 0,
                                                max: 20,
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
                                                min: 1000000, 
                                                max: 140000000,
                                            }
                                        }]
                                }
                            }
                        });
                    }
                });
            });




          
