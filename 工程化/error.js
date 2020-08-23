/**
 * 全局异常捕获
 * 无法捕获跨域的异常和资源加载错误的异常
 */
window.onerror 
/**
 * js错误，资源加载错误
 */
window.addEventListener('error')
/**
 * 没有catch的promise错误
 */
window.addEventListener('unhandledrejection')

//node端
/**
 * 全局异常捕获
 */
process.on('uncaughtException')
process.on('unhandledrejection')