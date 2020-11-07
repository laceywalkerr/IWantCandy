const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/demands/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/demands`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/demands/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    }
}