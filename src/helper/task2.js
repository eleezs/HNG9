
exports.getOperator = (operation_type) => {
    const sum = ['addition', 'add', 'plus', 'sum'];
    const sub = ['subtract', 'subtraction', 'minus', 'takeaway']
    const div = ['divide', 'divide by', 'division'];
    const mul = ['multiplication', 'multiply', 'times']

    let operator, op_type, x2, y2;
 
    if (sum.some(v => operation_type.includes(v))) {
        operator = '+'
        op_type = 'addition'
    }
    if (sub.some(v => operation_type.includes(v))) {
        operator = '-'
        op_type = 'subtraction'
    }
    if (div.some(v => operation_type.includes(v))) {
        operator = '/'
        op_type = 'division'
    }
    if (mul.some(v => operation_type.includes(v))) {
        operator = '*'
        op_type = 'multiplication'
    }

    let str = operation_type
    let matches = str.match(/\d+/g)
    
    if (matches === null ) {
        return { operator, op_type, x2, y2 };
    } else {
        x2 = matches[0]
        y2 = matches[1]
    }
 
    return { operator, op_type, x2, y2 };
}