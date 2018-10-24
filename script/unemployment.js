var svg = d3.select("svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;

    svg.append("text")
       .attr("transform", "translate(100,0)")
       .attr("x", 50)
       .attr("y", 50)
       .attr("font-size", "24px")
       .text("Unemployment Rate in USA for last 30 Years.")
       .style('fill', '#4E5D6C');
       
    var xScale = d3.scaleBand().range([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range([height, 0]);

    var g = svg.append("g")
               .attr("transform", "translate(" + 100 + "," + 100 + ")");

    d3.csv("data/unemployment.csv", function(error, data) {
        if (error) {
            throw error;
        }

        xScale.domain(data.map(function(d) { return d.Date; }));
        yScale.domain([0, d3.max(data, function(d) { return d.Value; })]);

        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale))
         .append("text")
         .attr("y", height - 250)
         .attr("x", width - 100)
         .attr("text-anchor", "end")
         .attr("font-size", "15px")
         .attr("letter-spacing", "2px")
         .text("Year")
         .style('fill', '#4E5D6C');

        g.append("g")
         .call(d3.axisLeft(yScale).tickFormat(function(d){
             return d;
         })
         .ticks(15))
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 7)
         .attr("dy", "-5.1em")
         .attr("text-anchor", "end")
         .attr("font-size", "15px")
         .attr("letter-spacing", "2px")
         .text("Unemployment")
         .style('fill', '#4E5D6C');

        g.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return xScale(d.Date); })
         .attr("y", function(d) { return yScale(d.Value); })
         .attr("width", xScale.bandwidth())
         .attr("height", function(d) { return height - yScale(d.Value); });
    });