var dps = [];   //dataPoints. 
var chart;
var startTime;

$(document).on("pagecreate", "#chartPage", function () {
	
	//store start time in unixtime 
	startTime = Date.now();
	
	//set uplistener for button
	$('#addButton').on('click', function() {
	
		var randomValue = Math.random();
		updateChart(randomValue);
		
	});
	
	//setup chart
    chart = new CanvasJS.Chart("chartContainer",{
      title:{
      text: "Multi-Series Line Chart"  
      },
      data: [
      {        
        type: "line",
        dataPoints: [
        { x: 10, y: 21 },
        { x: 20, y: 25},
        { x: 30, y: 20 },
        { x: 40, y: 25 },
        { x: 50, y: 27 },
        { x: 60, y: 28 },
        { x: 70, y: 28 },
        { x: 80, y: 24 },
        { x: 90, y: 26}
      
        ]
      },
        {        
        type: "line",
        dataPoints: [
        { x: 10, y: 31 },
        { x: 20, y: 35},
        { x: 30, y: 30 },
        { x: 40, y: 35 },
        { x: 50, y: 35 },
        { x: 60, y: 38 },
        { x: 70, y: 38 },
        { x: 80, y: 34 },
        { x: 90, y: 44}
      
        ]
      },
        {        
        type: "line",
        dataPoints: [
        { x: 10, y: 45 },
        { x: 20, y: 50},
        { x: 30, y: 40 },
        { x: 40, y: 45 },
        { x: 50, y: 45 },
        { x: 60, y: 48 },
        { x: 70, y: 43 },
        { x: 80, y: 41 },
        { x: 90, y: 28}
      
        ]
      },
        {        
        type: "line",
        dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55},
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 95 },
        { x: 60, y: 68 },
        { x: 70, y: 28 },
        { x: 80, y: 34 },
        { x: 90, y: 14}
      
        ]
      }
      ]
    });


function updateChart(random) {
      	updateChart.frequency = 3000;
		
		
      	//set new random y values
      	yVal = random;
		
		//x value is time since start 
		xVal = Date.now() - startTime;
		//concert from milliseocnds to seconds (divide by a thousand)
		xVal = xVal / 1000;
      	
		//add them to the data points to draw
		dps.push({x: xVal,y: yVal});
      	
		//don't let the chart get too big 
		//if there are more than 100 data points then start removing older data points
      	if (dps.length >  100 )
      	{
      		dps.shift();				
      	}

		//redraw the chart
      	chart.render();		
	  }
