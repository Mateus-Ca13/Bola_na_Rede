export function timestampToHour(timestamp){
    const [date, timeWithZ] = timestamp.split('T') 
    const time = timeWithZ.replace('Z', '').slice(0, 5)
    return time;
    
}

export function timestampToDate(timestamp){
    const ts = new Date(timestamp)
    return `${ts.getDate() < 10? '0'+ts.getDate() : ts.getDate()}/${ts.getMonth() < 10? '0'+ts.getMonth() : ts.getMonth()}/${ts.getFullYear()}`;
}
