const ctx = document.getElementById('barChart');

new Chart (
    ctx,{
        type:'bar', 
        data:{
            labels:["Red", "Blue", "Yellow", "Purple"],
            datasets: [
                {
                    label:"Votes",
                    data: [12, 19,3, 10],
                    borderWidth: 2,
                    backgroundColor: ['red', 'blue', 'yellow', 'purple'],
                    borderColor:'black',


                }
            ]
        }
    }
    ]
) 