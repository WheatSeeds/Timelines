Для запуска проекта сначала установите все зависимости:
> npm install

Для создания production-билда используйте:
> npm run build

> npx serve -s dist

Данные о таймлайнах имеют вид 
"timelines": [
    {
      "startYear": number,
      "endYear": number,
      "events": [
        { "year": string, "description": string. }]
     }]

Для добавления новых данных стоит изменить файл ./src/shared/assets/data/timelines-data.json
