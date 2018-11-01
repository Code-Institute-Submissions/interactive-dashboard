// Create crossfilter

let tradeIndex = crossfilter([
	{exportValue: 90000, region:"Europe", difference: -10000, importValue: 100000},
	{exportValue: 75000, region:"Asia", difference: -45000, importValue: 120000},
	{exportValue: 45000, region:"America", difference: 2000, importValue: 43000}
])

// First Dimension

let dimensionTrade = tradeIndex.dimension(item => item.region)
let quantityByTrade = dimensionTrade.group().reduceSum(item => item.importValue)


// 1: Separate value on distinct conditions
let dimensionRegion = tradeIndex.dimension(item => item.region + ' ' + item.exportValue)
let quantityByRegion = dimensionRegion.group()

// graphs
var pie1 = dc.pieChart("#first");
pie1
    .width(200)
    .height(200)
    .innerRadius(25)
    .label(function(d) {
				return d.value; 
		})
    .dimension(dimensionTrade)
    .group(quantityByTrade);
pie1.render();

var pie2 = dc.pieChart("#second");
pie2
    .width(200)
    .height(200)
    .innerRadius(25)
    .dimension(dimensionRegion)
    .group(quantityByRegion);
pie2.render();

let regionCategory = tradeIndex.dimension(item => item.region);
let differenceByRegion = regionCategory.group().reduceSum(item => item.difference);


var chart = dc.barChart("#third");
chart
	.width(200)
    .height(200)
    .x(d3.scaleOrdinal())
    .xUnits(dc.units.ordinal)
    .xAxisLabel("Region")
    .yAxisLabel("")
    .elasticY(true)
    .dimension(regionCategory)
    .group(differenceByRegion);
chart.render();