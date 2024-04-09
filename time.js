const date = new Date()
let time = date.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit'
});

console.log(time)

