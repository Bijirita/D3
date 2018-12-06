d3.csv("micro.csv", function(error, data) {
    //console.log(data);
    const fatality = [];
    for(i = 1; i < data.length; i++) {
        fatalityToInteger = parseInt(data[i]["Fatal_US"]);
        if(!isNaN(fatalityToInteger) && fatalityToInteger !== 0) {
            fatality.push(fatalityToInteger);
        }
    }

fatality.sort(function(a, b) {
    return a - b;
});

console.log(fatality);

// function top50Percent (value) {
//     return value >  (fatality => fatality.reduce((a,b) => a + b, 0) / fatality.length);
// }

// const mostFatal = fatality.filter(top50Percent);

const mostFatal = d3.mean(fatality);

top50Percent = fatality.filter(deaths => deaths > mostFatal);

console.log(top50Percent);


var width = 1000,
    barHeight = 20;

var x = d3.scale.linear()
    .domain([0, d3.max(top50Percent)])
    .range([0, d3.max(top50Percent)]);

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
    

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("left");

var bar = chart.selectAll("g")
    .data(top50Percent)
  .enter().append("g")
  .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; })

  .attr("class", "x axis")
    // .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; })
    .call(xAxis);

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d) { return x(d+20); })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });



// chart.append("g")

//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis);

});

