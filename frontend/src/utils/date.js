export const getTime = (dt) => {
    const date = new Date(dt * 1000);
    let hour = ""
    if (date.getHours() > 12) {
        hour = date.getHours() - 12 + "PM";
    } else if (date.getHours() === 12) {
        hour = date.getHours() + "PM";
    } else if (date.getHours() === 0) {
        hour = "12AM"
    } else {
        hour = date.getHours() + "AM";
    }
    return hour;
}

export const getDay = (dt) => {
    const date = new Date(dt * 1000);
    let day = "";
    switch (date.getDay()) {
        case 0:
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
            break;
    };
    return day;
}