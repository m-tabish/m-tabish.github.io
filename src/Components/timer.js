const date = new Date();
const time = date.toString().split(" ");
const displayDate = time[2] + " " + time[1] + " " + " " + time[3];
const displayTime = time[4].split(":");
let meridiem = "am";

let [hours, minutes] = displayTime;
if (hours > 12) { meridiem = "pm"; }
hours = hours > 12 ? hours - 12 : hours == 0 ? 12 : hours;

{/* displayTime */ }
<div className='self-end px-7 py-4 sm:px-5 sm:text-2xl font-light w-full h-24 z-10 flex flex-col text-right text-xl'>{displayDate} <br className='text-xl' /> {hours + ":" + minutes + " " + meridiem} IST</div>