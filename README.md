# App del Meteo

Questa è una piccola applicazione del meteo che utilizza HTML, CSS e JavaScript vanilla per visualizzare le previsioni meteo delle città tramite un'API.

## Funzionalità Principali

- Visualizzazione del meteo attuale di una città specifica.
- Aggiornamento automatico delle previsioni meteo ogni volta che viene selezionata una nuova città.

## Requisiti di Sistema

- Browser web moderno con supporto per HTML5 e JavaScript.

## Utilizzo

1. Clona il repository:

    ```bash
    git clone <url_del_repository>
    ```

2. Apri il file `index.html` nel tuo browser web.

3. Seleziona una città dalla barra di ricerca.

4. Verranno visualizzate le previsioni meteo per la città selezionata.

## Configurazione

Non è necessaria alcuna configurazione aggiuntiva per utilizzare questa applicazione.

## Utilizzo dell'API del Meteo

L'applicazione utilizza l'API del Meteo per recuperare le previsioni meteo. L'API utilizzata è `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`, che fornisce informazioni meteo basate sulla latitudine e longitudine della città specificata.

Per utilizzare l'API, è necessario ottenere una chiave API gratuita registrandosi su OpenWeatherMap (https://openweathermap.org/). Dopo aver ottenuto la chiave API, sostituiscila nel file `script.js` nella variabile `apiKey`.

```javascript
const apiKey = 'INSERISCI_LA_TUA_CHIAVE_API_QUI';
