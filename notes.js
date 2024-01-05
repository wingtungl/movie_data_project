Plotly.plot('graph', [{
  y: new Array(100).fill(0).map((d, i) => 
    Math.pow(i / 50, 2) + Math.sin(i * 4)
  ),
  line: {dash: '0px 5200px'}
}]).then(function () {
  return Plotly.animate('graph',
    [{data: [{'line.dash': '5200px 0px'}]}],
    {
      frame: {duration: 5000, redraw: false},
      transition: {duration: 5000}
    }
  );
});



<head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>
<body>
  <div id="graph"></div>
</body>
