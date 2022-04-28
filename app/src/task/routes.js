const baseUrl = '/task'

const taskRoutes = {
    get: baseUrl,
    add: baseUrl + '/add',
    delete: baseUrl + '/delete',
    update: baseUrl + '/update'
} 

module.exports = taskRoutes