var sitemap = d3.json("js/data.json", function(err, d) {
    var dataset = d,
        svg = d3.select("body");

    svg.selectAll("p")
        .data(dataset)
        .enter()
        .append("p")
        .text( function (dataset) {
            return dataset.topLevel.navPages[0].title;
        });
});