d3.csv("micro.csv", function(error, data) {
    //console.log(data);
    const fatality = [];
    for(i = 1; i < data.length; i++) {
        fatalityToInteger = parseInt(data[i]["Fatal_US"]);
        if(!isNaN(fatalityToInteger)) {
            fatality.push(fatalityToInteger);
        }
    }
    console.log(fatality);

var width = 1000,
    barHeight = 20;

var x = d3.scale.linear()
    .domain([0, d3.max(fatality)])
    .range([0, width]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * fatality.length);

var bar = chart.selectAll("g")
    .data(fatality)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });
});

