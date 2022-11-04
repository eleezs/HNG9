# HNG9
For all HNG project using RESTful APIs

# NODEJS(EXPRESS FRAMEWORK)

## TASK 1
This is a function that is being exported to the server.js file. It is a function that is being
called when the user goes to the firstDisplay route. It is sending a status code of 200 and a json
object with the slackUsername, backend, age, and bio.

## TASK 2
Create an (POST) api endoint that takes the following sample json:
{ “operation_type”: Enum <addition | subtraction | multiplication> , “x”: Integer, “y”: Integer }
Operation can either be addition, subtraction or mutiplication
x can be a number and Integer datatype
y can be a number and Integer datatype
Based on the operation sent, perform a simple arithmetic operation on x and y
Return a response with the result of the operation and your slack username
{ “slackUsername”: String, "operation_type" : Enum. value, “result”: Integer }
