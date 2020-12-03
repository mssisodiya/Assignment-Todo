getBudgets = arr => arr.reduce(function(total,arr){
    return total+arr.budget
},0)