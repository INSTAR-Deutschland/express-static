var ctx=document.getElementById("line_morecameras_ram"),myChart=new Chart(ctx,{type:"line",data:{labels:["4 Kameras","8 Kameras","16 Kameras"],datasets:[{type:"line",label:"Arbeitsspeicher in Megabyte",data:[157,250,371],backgroundColor:"rgba(2, 117, 216, 1)"}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{max:500,beginAtZero:!0}}]},title:{display:!0,text:"Arbeitsspeicher in Megabyte"}}});