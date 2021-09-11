const date = new Date();

export const getWeeks = (firstDay, lastDay, year, month) => {
  let endExtraDays = 6 - new Date(year, month, lastDay).getDay(); //gets the last days that doesnt belong to the month 
  let totalDays = firstDay + lastDay + endExtraDays; //sum all of them and divide it by 7, to representante de rows
  
  let daysArray = [];
  let weeksArray = [];
  let counter = 0;

  for (let i = -firstDay; i < totalDays - firstDay; i ++){
    const currentDay = new Date(year,month,i+1);

    daysArray.push(currentDay);

    if((counter +1) % 7 === 0 && i >= 0) {
      weeksArray.push(daysArray.slice((counter+1) -7, counter+1));
    }
    counter++
  }
  return weeksArray
}

export const initialState = {
  year: date.getFullYear(),
  month: {
    index: date.getMonth(),
    name: date.toLocaleDateString("default", { month: "long"}),
    days: 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate(),
    weeks: getWeeks(
      (new Date(date.getFullYear(), date.getMonth())).getDay(),
      32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate(),
      date.getFullYear(),
      date.getMonth()
    )
  },
  selectedDate: date
}