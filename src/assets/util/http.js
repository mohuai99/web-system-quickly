export default {
    post(url, obj, callback) {
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(function(res) {
            res.json().then(function(data) {
                callback(data)
            })
        })
    }
}
