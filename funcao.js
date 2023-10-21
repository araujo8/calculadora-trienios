function ehMaior(data1 = new Date(), dataAgora = new Date()) {

    if (data1.getFullYear() < dataAgora.getFullYear()) {
        return dataAgora;
    } else if (data1.getFullYear() == dataAgora.getFullYear() && data1.getMonth() > dataAgora.getMonth()) {
        return data1;
    } else if (data1.getFullYear() == dataAgora.getFullYear() && data1.getMonth() < dataAgora.getMonth()) {
        return dataAgora;  
    } else if (data1.getFullYear() == dataAgora.getFullYear() && data1.getMonth() == dataAgora.getMonth() && dataAgora.getDate() > data1.getDate()) {
        return dataAgora;
    } else {
        return data1;
    }
}
        