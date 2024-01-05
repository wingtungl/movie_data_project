// Fetch the CSV file
fetch('/Resources/movie_trailer_data.csv')
  .then(response => response.text())
      .then(csvData => {
        // Parse the CSV data using PapaParse
        Papa.parse(csvData, {
          header: true, 
          dynamicTyping: true, 
          complete: function(papaResults) {
            // papaResults.data contains the parsed data as an array of objects
            const movie_trailer_data = papaResults.data;
            
            //Scatter plot for rank vs. viewcount
            var trace1 = {
                x: movie_trailer_data.slice(0, 20).map(entry => entry.Rank),
                y: movie_trailer_data.slice(0, 20).map(entry => entry.viewcount),
                mode: 'markers+text',
                type: 'scatter',
                // name: 'Team A',
                text: ['1st', '2nd', '3rd', '4th', '5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th'],
                textposition: 'top center',
                textfont: {
                  family:  'Raleway, sans-serif'
                },
                marker: { size: 12, color: '#17becf'},
              };
            var data = [ trace1 ];

            var layout = {
                xaxis: {
                    title: 'Rank',
                    range: [ 0.75, 23 ],
                },
                yaxis: {
                    title: 'Views',
                    range: [0, 150000000]
                },
                legend:{
                    y: 0.5,
                    yref: movie_trailer_data.map(entry => entry.Video_Name),
                    font: {
                      family: 'Arial, sans-serif',
                      size: 20,
                      color: 'grey',
                    }
                },
                title: "Worldwide Top 20 Movies' Trailer Views on Youtube (as of 12/27/23)"
            };

            Plotly.newPlot( "view_vs_rank", data, layout);
          }
        });
      })