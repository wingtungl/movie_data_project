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

//Graph
            var myPlot = document.getElementById('teest'),
                x = movie_trailer_data.slice(0, 20).map(entry => entry.Rank),
                y1 = movie_trailer_data.slice(0, 20).map(entry => entry.viewcount),
                trace1 = { x:x, y:y1, type:'scatter'},
                data = [trace1],
                layout = {
                    xaxis: {
                        title: 'Rank',
                        range: [ 0.75, 20.25 ],
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
                    hovermode:'closest',
                    title:"Worldwide Top 20 Movies' Trailer Views on Youtube (as of 12/27/23)"
                };

            Plotly.newPlot('teest', data, layout);

            myPlot.on('plotly_click', function(data){
                var pts = '';
                for(var i=0; i < data.points.length; i++){
                    annotate_text = movie_trailer_data.map(entry => entry.Rank)+ movie_trailer_data.map(entry => entry.Video_Name) + movie_trailer_data.map(entry => entry.viewcount);

                    annotation = {
                    text: annotate_text,
                    x: data.points[i].x,
                    y: data.points[i].y1
                    }

                    annotations = self.layout.annotations[annotation];
                    annotations.push(annotation);
                    Plotly.relayout('teest',{annotations: annotations})
                }
            });
        }
    });
  })
