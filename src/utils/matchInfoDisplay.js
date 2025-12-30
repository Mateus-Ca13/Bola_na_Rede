
export function displayMatchGamemode (matchGamemode){
    switch (matchGamemode) {
        case "soccer":
            return "Futebol (Campo)"
            break;
        case "futsal":
            return "Futsal (Salão)"
            break;  
        case "society":
            return "Society (Fut7)"
            break;
        default:
            return "Futebol"
            break;
    }

}
export function displayMatchGamestyle (matchGamestyle){

    switch (matchGamestyle) {
        case "relaxed":
            return "Descontraído"
            break;
        case "casual":
            return "Casual"
            break;  
        case "seasoned":
            return "Experiente"
            break;
        case "competitive":
            return "Competitivo"
            break;
        default:
            return "Casual"
            break;
    }

}