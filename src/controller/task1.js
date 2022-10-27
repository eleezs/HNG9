/* This is a function that is being exported to the server.js file. It is a function that is being
called when the user goes to the firstDisplay route. It is sending a status code of 200 and a json
object with the slackUsername, backend, age, and bio. */
exports.firstDisplay = (req, res) => {
    return res.status(200).json({ slackUsername: "Uche", backend: true, age: 24, bio: "I am an entry level backend developer" })
}