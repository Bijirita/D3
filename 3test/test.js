var margin = { top: 20, right: 10, bottom: 100, left: 40},
    width = 700 - margin.right -margin.left,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select('body')
    .append('svg')
    .attr ({
        "width" : width + margin.right + margin.left,
        "height": height + margin.top + margin.bottom
    })
    .append('g')
        .attr("transform", "translate(" + margin.left + ',' + margin.right + ')');

var xScale = d3.scale.ordinal()
    .rangeRoundBands([0 , width], 0.2, 0.2);

var yScale = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

d3.csv("micro.csv", function(error, data) {
    if (error) {
        console.log("Error: data not found");
    }
    else data.forEach(function(d) {
        Fatal_US = parseInt(d["Fatal_US"]);
        Name = d.Name;
        if (!isNaN(fatalityToInteger) && fatalityToInteger !== 0) {
            fatality.push(fatalityToInteger);
        }
        console.log(Fatal_US);
        console.log(Name);
    });
});
