import Chart from 'chart.js';
import $ from "../../node_modules/jquery/src/jquery.js";

var teal500 = '#14B8A6';
var cyan500 = '#06B6D4';
var purple500 = '#A855F7';

$( document ).ready(function() {
    var ctx = $('#userChart');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
        }]
        },
        options: {
        title: {
            display: true,
            text: 'Errors Per App'
        }
        }
    });
  });
