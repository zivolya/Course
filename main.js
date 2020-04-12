//Создаем массив со словами
var words = ["арбуз", "персик", "яблоко", "банан",];
//Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
var answerarray = [];
for (var i = 0; i<word.length; i++) {answerarray[i]="_";}
var remainingletters = word.length;
//Игровой цикл
while (remainingletters > 0)
    {
        // Основной код
    
        // Показываем состояние игры
alert(answerarray.join(" "));
        // Запрашиваем вариант ответа
var guess = prompt ("Угадайте букву или нажмите отмена для выхода из игры");
        if (guess === null){
            // Выходим из игрового цикла
            break;
        }else if (guess.length !==1){
            alert ("Пожалуйста введите только одну букву!");
        }else
        // Обновляем answerarray и remainingletters для каждого вхождения
        // угаданной буквы

            for (var j = 0; j < word.length; j++){
                if (word[j] === guess) {
                    answerarray[j] = guess;
                    remainingletters--;
                }
            }
    }
alert (answerarray.join(" "));
alert ("Отлично! Было загадано слово " + word);

dvsavvvvvvvvvvvvvvvvvvvvvv
