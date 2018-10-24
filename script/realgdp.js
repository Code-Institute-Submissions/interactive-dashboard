function realGdp() {    
    var svg = d3.select("#realgdp"),
            margin = 200,
            width = svg.attr("width") - margin,
            height = svg.attr("height") - margin;
    
        svg.append("text")
           .attr("transform", "translate(100,0)")
           .attr("x", 50)
           .attr("y", 50)
           .attr("font-size", "24px")
           .text("Real GDP in USA in the last 30 Years.")
           .style('fill', 'white');
    
        var x = d3.scaleBand().range([0, width]).padding(0.5),
            y = d3.scaleLinear().range([height, 100]);
    
        var g = svg.append("g")
                .attr("transform", "translate(" + 100 + "," + 100 + ")");
    
        d3.csv("data/realgdp.csv", function(error, data) {
            if (error) {
                throw error;
            }
    
            x.domain(data.map(function(d) { return d.gdpDate; }));
            y.domain([0, d3.max(data, function(d) { return d.gdpValue; })]);
    
            g.append("g")
             .attr("transform", "translate(0," + height + ")")
             .call(d3.axisBottom(x))
             .append("text")
             .attr("y", height - 250)
             .attr("x", width - 100)
             .attr("text-anchor", "end")
             .attr("font-size", "15px")
             .attr("letter-spacing", "2px")
             .text("Year")
             .style('fill', 'white');;
    
            g.append("g")
             .call(d3.axisLeft(y).tickFormat(function(d){
                 return "$" + d;
             }).ticks(20))
             .append("text")
             .attr("transform", "rotate(-90)")
             .attr("y", 5)
             .attr("dy", "-5.1em")
             .attr("text-anchor", "end")
             .attr("font-size", "15px")
             .attr("letter-spacing", "2px")
             .text("Blns of dollars")
             .style('fill', 'white');;
    
            g.selectAll(".bar")
             .data(data)
             .enter().append("rect")
             .attr("class", "bar")
             .on("mouseover", onMouseOver) //Add listener for the mouseover event
             .on("mouseout", onMouseOut)   //Add listener for the mouseout event
             .attr("x", function(d) { return x(d.gdpDate); })
             .attr("y", function(d) { return y(d.gdpValue); })
             .attr("width", x.bandwidth())
             .transition()
             .ease(d3.easeLinear)
             .duration(400)
             .delay(function (d, i) {
                 return i * 50;
             })
             .attr("height", function(d) { return height - y(d.gdpValue); });
        });
        
        //mouseover event handler function
        function onMouseOver(d, i) {
            d3.select(this).attr('class', 'highlight');
            d3.select(this)
              .transition()     // adds animation
              .duration(400)
              .attr('width', x.bandwidth() + 5)
              .attr("y", function(d) { return y(d.gdpValue) - 10; })
              .attr("height", function(d) { return height - y(d.gdpValue) + 10; });
    
            g.append("text")
             .attr('class', 'val') 
             .attr('x', function() {
                 return x(d.gdpDate);
             })
             .attr('y', function() {
                 return y(d.gdpValue) - 15;
             })
             .text(function() {
                 return [ '$' +d.gdpValue];  // Value of the text
             });
        }
    
        //mouseout event handler function
        function onMouseOut(d, i) {
            d3.select(this).attr('class', 'bar');
            d3.select(this)
              .transition()     // adds animation
              .duration(400)
              .attr('width', x.bandwidth())
              .attr("y", function(d) { return y(d.gdpValue); })
              .attr("height", function(d) { return height - y(d.gdpValue); });
    
            d3.selectAll('.val')
              .remove()
        }
}

realGdp();