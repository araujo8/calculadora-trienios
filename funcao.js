function ehMaior(data1 = new Date(), dataAgora = new Date()) {

    if (data1.getTime() < dataAgora.getTime()) {
        return dataAgora;
    } else {
        return data1;
    }

    
}