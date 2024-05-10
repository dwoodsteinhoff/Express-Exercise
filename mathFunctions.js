function getMean(arr){
    let sum = 0
    for(let num of arr){
        sum += num;
    }
    let mean = sum / arr.length;
    return mean
}

function getMedian(arr){
    arr.sort(function(a,b){
        return a-b
    })

    let median;

    if(arr.length % 2 !== 0){
        median = arr[Math.floor(arr.length/2)]
    }
    else{
        let num1 = arr[(arr.length/2) - 1]
        let num2 = arr[arr.length/2]
        median = (num1 + num2) / 2
    }

    return median
}

function getMode(arr){
    let obj = {}
    for(let num of arr){
        if(!obj[num]){
            obj[num] = 1
        }
        else{
            obj[num] ++;
        }
    }

    let frequency = 1;
    let mode = []
    
    for(let val in obj ){
        if(obj[val] > frequency){
            mode = [val]
            frequency = obj[val]
        }
        else if(obj[val] === frequency){
            mode.push(val)
        }
    }

    if(mode.length === 1){
        return mode[0]
    }
    else{
        return mode
    }
}

module.exports = {
    mean: getMean,
    median: getMedian, 
    mode: getMode
}
