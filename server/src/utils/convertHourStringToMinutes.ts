export function convertHourStringToMinutes(hourString: string){
    const [hours, minutes] = hourString.split(":")

    return parseInt(hours)*60 + parseInt(minutes)
}