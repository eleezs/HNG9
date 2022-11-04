// Create an (POST) api endoint that takes the following sample json:
// { “operation_type”: Enum <addition | subtraction | multiplication> , “x”: Integer, “y”: Integer }
// Operation can either be addition, subtraction or mutiplication
// x can be a number and Integer datatype
// y can be a number and Integer datatype
// Based on the operation sent, perform a simple arithmetic operation on x and y
// Return a response with the result of the operation and your slack username
// { “slackUsername”: String, "operation_type" : Enum. value, “result”: Integer }
// Push to GitHub
// Sample Input { “operation_type”: Enum <addition | subtraction | multiplication> , “x”: Integer, “y”: Integer }
// Sample Response Format { “slackUsername”: String, “result”: Integer, “operation_type”: Enum.value }

const { getOperator } = require("../helper/task2");


exports.solveMaths = (req, res) => {
   try {
    const { operation_type, x, y } = req.body;
    let  { operator, op_type, x2, y2 } = getOperator(operation_type)
    const x1 = x ? x : x2
    const y1 = y ? y : y2
    let result;
    if (operator === '+') {
        result = Number(x1) + Number(y1);
    } else if (operator === '/') {
        result = Number(x1) / Number(y1);
    } else if (operator === '*') {
        result = Number(x1) * Number(y1);
    } else if (operator === '-') {
        result = Number(x1) - Number(y1);
    }


    return res.status(200).json({  'slackUsername': 'Eleezs', 'result': result, 'operation_type': op_type })
   } catch (error) {
    console.log(error)
    return res.status(400).json({  'error': true, 'message': 'Something went wrong.' })
   } 
};