export function handleConvertTimestampToHourString(timestamp: number){
    const date = new Date(timestamp)
    const time = String(date.getHours()).padStart(2, "0")+":" + String(date.getMinutes()).padStart(2, "0")
    return time
}