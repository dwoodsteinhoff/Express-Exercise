const express = require('express');
const MyError = require('./error')
const {mean, median, mode} = require("./mathFunctions")

const app = express()

app.get("/mean", function(request,response,next){
    const numsArr = []
    if (!request.query.nums){
        return next(new MyError("nums are required"))
    }
    onlyNums = request.query.nums.split(',');
    for (let num of onlyNums){
        if(Number.isNaN(Number(num))){
            return next(new MyError(`${num} is not a number`, 400))
        }
        else if (Number(num)){
            numsArr.push(Number(num))
        }
    }
    return response.json({
        operation: "mean",
        value : mean(numsArr)
    })
})

app.get("/median", function(request,response,next){
    const numsArr = []
    if (!request.query.nums){
        return next(new MyError("nums are required"))
    }
    onlyNums = request.query.nums.split(',');
    for (let num of onlyNums){
        if(Number.isNaN(Number(num))){
            return next(new MyError(`${num} is not a number`, 400))
        }
        else if (Number(num)){
            numsArr.push(Number(num))
        }
    }
    return response.json({
        operation: "median",
        value : median(numsArr)
    })
})

app.get("/mode", function(request,response,next){
    const numsArr = []
    if (!request.query.nums){
        return next(new MyError("nums are required"))
    }
    onlyNums = request.query.nums.split(',');
    for (let num of onlyNums){
        if(Number.isNaN(Number(num))){
            return next(new MyError(`${num} is not a number`, 400))
        }
        else if (Number(num)){
            numsArr.push(Number(num))
        }
    }
    return response.json({
        operation: "mode",
        value : mode(numsArr)
    })
})

app.use((req,res,next) => {
    const error = new MyError("Page Not Found", 404)
    next(error)
})

app.use(function(error,request,response,next){

    let status = error.status || 500;
    let message = error.message;
    
    return response.status(status).json({
        error: {message, status}
    });
})

app.listen(3000,function(){
    console.log('App on port 3000')
})