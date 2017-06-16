/**
 * Created by A11150421050193k on 2017/5/18.
 */
import * as d3 from 'd3';

let clock=null;

const Com={
    template:require('./time.html'),
    data(){
        return {
            hello:'hi im from controller'
        }
    },
    methods:{
        go(){

        }
    },
    mounted(){
        var width = innerWidth,
            height = innerHeight,
            radius = Math.min(width, height) / 1.9,
            spacing = .08;

        var formatSecond = d3.timeFormat("%-S seconds"),
            formatMinute = d3.timeFormat("%-M minutes"),
            formatHour = d3.timeFormat("%-H hours"),
            formatDay = d3.timeFormat("%A"),
            formatDate = function(d) { d = d.getDate(); switch (10 <= d && d <= 19 ? 10 : d % 10) { case 1: d += "st"; break; case 2: d += "nd"; break; case 3: d += "rd"; break; default: d += "th"; break; } return d; },
            formatMonth = d3.timeFormat("%B");

        var color = d3.scaleLinear()
            .range(["hsl(-180,60%,50%)", "hsl(180,60%,50%)"])
            .interpolate(function(a, b) { var i = d3.interpolateString(a, b); return function(t) { return d3.hsl(i(t)); }; });

        var arcBody = d3.arc()
            .startAngle(0)
            .endAngle(function(d) { return d.value * 2 * Math.PI; })
            .innerRadius(function(d) { return d.index * radius; })
            .outerRadius(function(d) { return (d.index + spacing) * radius; })
            .cornerRadius(6);

        var arcCenter = d3.arc()
            .startAngle(0)
            .endAngle(function(d) { return d.value * 2 * Math.PI; })
            .innerRadius(function(d) { return (d.index + spacing / 2) * radius; })
            .outerRadius(function(d) { return (d.index + spacing / 2) * radius; });

        var svg = d3.select("#clock").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 3 + ")");

        var digitalClock = d3.select('#clock svg')
            .append('g')
            .attr("transform", "translate(" + width / 2 + "," + height / 1.25 + ")")
            .append('text')
            .attr('class','white')
            .style("text-anchor", "middle");

        var field = svg.selectAll("g")
            .data(fields)
            .enter().append("g");

        field.append("path")
            .attr("class", "arc-body");

        field.append("path")
            .attr("id", function(d, i) { return "arc-center-" + i; })
            .attr("class", "arc-center");

        field.append("text")
            .attr("dy", ".35em")
            .attr("dx", ".75em")
            .style("text-anchor", "start")
            .append("textPath")
            .attr("startOffset", "50%")
            .attr("class", "arc-text")
            .attr("xlink:href", function(d, i) { return "#arc-center-" + i; });


        tick();

        d3.select(self.frameElement).style("height", height + "px");

        function tick() {
            // if (!document.hidden){
            field
                .each(function(d) {
                    this._value = d.value;
                })
                .data(fields)
                .each(function(d) {
                    d.previousValue = this._value;
                })
                .transition()
                .duration(500)
                .each(fieldTransition);
            // }
            digitalClock.text(function(){
                var now = new Date();
                function hello(x){
                    if(x>9){
                        return x
                    }else{
                        return '0'+x.toString()
                    }
                }
                return now.getHours()+' : '+hello(now.getMinutes())
            });

            clock=setTimeout(tick, 1000);
        }

        function fieldTransition() {

            var field = d3.select(this).transition();

            field.select(".arc-body")
                .attrTween("d", arcTween(arcBody))
                .style("fill", function(d) { return color(d.value); });

            field.select(".arc-center")
                .attrTween("d", arcTween(arcCenter));

            field.select(".arc-text")
                .text(function(d) { return d.text; });
        }

        function arcTween(arc) {
            return function(d) {
                var i = d3.interpolateNumber(d.previousValue, d.value);
                return function(t) {
                    d.value = i(t);
                    return arc(d);
                };
            };
        }

        function fields() {
            var now = new Date;
            return [
                {index: .7, text: formatSecond(now), value: now.getSeconds() / 60},
                {index: .6, text: formatMinute(now), value: now.getMinutes() / 60},
                {index: .5, text: formatHour(now),   value: now.getHours() / 24},
                {index: .3, text: formatDay(now),    value: now.getDay() / 7},
                {index: .2, text: formatDate(now),   value: (now.getDate() - 1) / (32 - new Date(now.getYear(), now.getMonth(), 32).getDate())},
                {index: .1, text: formatMonth(now),  value: now.getMonth() / 12}
            ];
        }
    },
    destroyed(){
        clearInterval(clock)
    }
}


module.exports=Com;
