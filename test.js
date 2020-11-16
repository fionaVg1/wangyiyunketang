let arr = [1, 2, 3];
Object.defineProperty(arr, '3', {
    set: function(newval) {
        console.log('update value....', newval)
    },
    get: () => {
        console.log('get value....')
        return 4
    }
})