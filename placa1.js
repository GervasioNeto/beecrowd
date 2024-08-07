var input = require('fs').readFileSync('stdin', 'utf8');
var [letra1,letra2,letra3] = input.split(' ')

// HZB a IAP Sergipe
if (letra1 == 'H' && letra2 == 'Z' && letra3 != 'A'){
    console.log(`Veículo de placa ${input} é do Estado de Sergipe`)
} 
else if (letra1 == 'I' && letra2 == 'A'){
    if(letra3 == 'A' || letra3 == 'B' || letra3 == 'C' || letra3 == 'D' || letra3 == 'E' || letra3 == 'F' || letra3 == 'G' || letra3 == 'H'  || letra3 == 'I' || letra3 == 'J' || letra3 == 'K' || letra3 == 'L' || letra3 == 'M' || letra3 == 'N' || letra3 == 'O' || letra3 == 'P'){
    console.log(`Veículo de placa ${input} é do Estado de Sergipe`)
    } 
    else {
    console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
    }
} 
// -----------------------------------------


// NTD a NTW Bahia
// NVG a NVN Sergipe
// NYH a NZZ Bahia
else if (letra1 == 'N'){
    if (letra2 == 'T'){
        if (letra3 != "A" || letra3 != 'B' || letra3 != 'C' || letra3 != 'X' || letra3 != 'Y' || letra3 !== 'Z' ){
            console.log(`Veículo de placa ${input} é do Estado da Bahia`)
        }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
        }
    } 
    else if (letra2 == 'V'){
        if (letra3 == 'G' || letra3 == 'H' || letra3 == 'I' || letra3 == 'J' || letra3 == 'K' || letra3 == 'L' || letra3 == 'M' || letra3 == 'N'){
            console.log(`Veículo de placa ${input} é do Estado de Sergipe`)
        }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`) 
        }
    }
    else if (letra2 == 'Y'){
        if ( letra3 == 'H' ||letra3 == 'I' || letra3 == 'J' || letra3 == 'K' || letra3 == 'L' || letra3 == 'M' || letra3 == 'N' || letra3 == 'O' || letra3 == 'P' || letra3 == 'Q' || letra3 == 'R' || letra3 == 'S' || letra3 == 'T' || letra3 == 'U' || letra3 == 'V' || letra3 == 'W' || letra3 == 'X' || letra3 == 'Y' || letra3 == 'Z'){
            console.log(`Veículo de placa ${input} é do Estado da Bahia`)
        } 
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
        }  
    }
    else if (letra2 == 'Z'){
        console.log(`Veículo de placa ${input} é do Estado da Bahia`)
    }
    else {
        console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
    }
}
// -----------------------------------------

// OEJ a OES Sergipe
// OKI a OLG Bahia
// OUF a OVD Bahia
// OZB a OZB Sergipe
// OZC a OZV Bahia
else if (letra1 == 'O'){
    if (letra2 == 'E'){
        if (letra3 == 'J' || letra3 == 'K' || letra3 == 'L' || letra3 == 'M' || letra3 == 'N' || letra3 == 'O' || letra3 == 'P' || letra3 == 'Q' || letra3 == 'R' || letra3 == 'S'){
            console.log(`Veículo de placa ${input} é do Estado de Sergipe`)
        }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
        }
    }
    else if (letra2 == "K"){
        if (letra3 == 'I' || letra3 == 'J' || letra3 == 'K' || letra3 == 'L' || letra3 == 'M' || letra3 == 'N' || letra3 == 'O' || letra3 == 'P' || letra3 == 'Q' || letra3 == 'R' || letra3 == 'S' || letra3 == 'T' || letra3 == 'U' || letra3 == 'V' || letra3 == 'W' || letra3 == 'X' || letra3 == 'Y' || letra3 == 'Z'){
            console.log(`Veículo de placa ${input} é do Estado da Bahia`)
        }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
        }
    }
    else if (letra2 == 'L'){
        if (letra3 == 'A' || letra3 == 'B' || letra3 == 'C' || letra3 == 'D' ||  letra3 == 'E' || letra3 == 'F' || letra3 == 'G'){
            console.log(`Veículo de placa ${input} é do Estado da Bahia`)
        }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
        }
    }
    else if (letra2 == 'U'){
        if (letra3 == 'F' ||letra3 == 'G' || letra3 == 'H' ||letra3 == 'I' || letra3 == 'J' || letra3 == 'K' || letra3 == 'L' || letra3 == 'M' || letra3 == 'N' || letra3 == 'O' || letra3 == 'P' || letra3 == 'Q' || letra3 == 'R' || letra3 == 'S' || letra3 == 'T' || letra3 == 'U' || letra3 == 'V' || letra3 == 'W' || letra3 == 'X' || letra3 == 'Y' || letra3 == 'Z'){
            console.log(`Veículo de placa ${input} é do Estado da Bahia`)
        }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
        }
    }
    else if (letra2 == 'V'){
        if (letra3 == 'A' || letra3 == 'B' || letra3 == 'C' || letra3 == 'D'){
            console.log(`Veículo de placa ${input} é do Estado da Bahia`)
        }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
        }
    }
    else if (letra2 == 'Z'){
        if (letra3 == 'B'){
            console.log(`Veículo de placa ${input} é do Estado de Sergipe`)
        }
        else if (letra3 == 'C' || letra3 == 'D' ||  letra3 == 'E' || letra3 == 'F' || letra3 == 'G'|| letra3 == 'H' ||letra3 == 'I' || letra3 == 'J' || letra3 == 'K' || letra3 == 'L' || letra3 == 'M' || letra3 == 'N' || letra3 == 'O' || letra3 == 'P' || letra3 == 'Q' || letra3 == 'R' || letra3 == 'S' || letra3 == 'T' || letra3 == 'U' || letra3 == 'V'){
            console.log(`Veículo de placa ${input} é do Estado da Bahia`)
        }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
        }
    } 
    else {
        console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)  
    }
}
// -----------------------------------------


// PJA a PLZ Bahia
else if (letra1 == 'P'){
    if (letra2 == 'J' || letra2 == 'K' || letra2 == 'L'){
        console.log(`Veículo de placa ${input} é do Estado da Bahia`)
    }
    else {
        console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
    }
}
// -----------------------------------------

// QKN a QKZ Sergipe
// QMA a QMP Sergipe FAZER <<<<<<<<
// QTU a QTZ Bahia
else if (letra1 == 'Q'){
   if (letra2 == 'K'){
        if (letra3 == 'N' || letra3 == 'O' || letra3 == 'P' || letra3 == 'Q' || letra3 == 'R' || letra3 == 'S' || letra3 == 'T' || letra3 == 'U' || letra3 == 'V' || letra3 == 'W' || letra3 == 'X' || letra3 == 'Y' || letra3 == 'Z'){
        console.log(`Veículo de placa ${input} é do Estado de Sergipe`)  
        }
        else {
        console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)    
        }
   }
   else if (letra2 == 'M'){
    if (letra3 == ''){
        // terminei aqui
    }
    else {
        console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
    }
   }
   else if (letra2 == 'T'){
        if (letra3 == 'U' || letra3 == 'V' || letra3 == 'W' || letra3 == 'X' || letra3 == 'Y' || letra3 == 'Z'){
        console.log(`Veículo de placa ${input} é do Estado da Bahia`)
    }
        else {
        console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
    }
}
    else {
        console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
    }
}
// -----------------------------------------


// RCO a RDR Bahia
else if (letra1 == 'R'){
    if (letra2 == 'C'){
        if (letra3 == 'O' || letra3 == 'P' || letra3 == 'Q' || letra3 == 'R' || letra3 == 'S' || letra3 == 'T' || letra3 == 'U' || letra3 == 'V' || letra3 == 'W' || letra3 == 'X' || letra3 == 'Y' || letra3 == 'Z'){
            console.log(`Veículo de placa ${input} é do Estado da Bahia`)
    }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
    }
}   
    else if (letra2 == 'D'){
        if (letra3 == 'A' || letra3 == 'B' || letra3 == 'C' || letra3 == 'D' ||  letra3 == 'E' || letra3 == 'F' || letra3 == 'G'|| letra3 == 'H' ||letra3 == 'I' || letra3 == 'J' || letra3 == 'K' || letra3 == 'L' || letra3 == 'M' || letra3 == 'N' || letra3 == 'O' || letra3 == 'P' || letra3 == 'Q' || letra3 == 'R'){
            console.log(`Veículo de placa ${input} é do Estado da Bahia`)
        }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
        }
    }
    else {
        console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`) 
    }
    
}
// -----------------------------------------


// RPA a RQL Bahia
else if (letra1 == "R"){
    if (letra2 == "P"){
        console.log(`Veículo de placa ${input} é do Estado da Bahia`)
    }
    else if (letra2 == 'Q'){
        if (letra3 == 'A' || letra3 == 'B' || letra3 == 'C' || letra3 == 'D' ||  letra3 == 'E' || letra3 == 'F' || letra3 == 'G'|| letra3 == 'H' ||letra3 == 'I' || letra3 == 'J' || letra3 == 'K' || letra3 == 'L'){
            console.log(`Veículo de placa ${input} é do Estado da Bahia`)
        }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`) 
        }
    }
    else {
        console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`) 
    }
}
// -----------------------------------------


// JKS a JSZ Bahia 
else if (letra1 == 'J'){
    if (letra2 == 'K'){
        if (letra3 == 'S' || letra3 == 'T' || letra3 == 'U' || letra3 == 'V' || letra3 == 'W' || letra3 == 'X' || letra3 == 'Y' || letra3 == 'Z'){
            console.log(`Veículo de placa ${input} é do Estado da Bahia`)
        }
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)  
        }
    } 
    else if (letra2 == 'L' || letra2 == 'M' || letra2 == 'N' || letra2 == 'O' || letra2 == 'P' || letra2 == 'Q' || letra2 == 'R' || letra2 == 'S'){
        onsole.log(`Veículo de placa ${input} é do Estado da Bahia`)
    } 
    else {
        console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
    }
}
// ----------------------------------------- 


// MUA a MVK Alagoas
else if (letra1 == 'M'){
    if (letra2 == 'U'){
        console.log(`Veículo de placa ${input} é do Estado de Alagoas`)
    }
    else if (letra2 == 'V'){
        if(letra3 == 'A' || letra3 == 'B' || letra3 == 'C' || letra3 == 'D' || letra3 == 'E' || letra3 == 'F' || letra3 == 'G' || letra3 == 'H' || letra3 == 'I' || letra3 == 'J' || letra3 == 'K'){
            console.log(`Veículo de placa ${input} é do Estado de Alagoas`)
        } 
        else {
            console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
        }
    } 
    else {
        console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
    }
} 
else {
    console.log(`Veículo de placa ${input} não pertence aos Estados de Sergipe, Bahia ou Alagoas.`)
}
// ----------------------------------------- 



