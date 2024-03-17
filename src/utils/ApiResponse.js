class ApiResponse {
    constructor(success=true, message = "Done", data={}) {
        this.success = success
        this.message = message
        this.data = data
    }
}

export default ApiResponse;