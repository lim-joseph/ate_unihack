from ics import Calendar
import requests
from datetime import datetime,date,timedelta

DISPLAY_WEEK = 2
START_TIME = 8 #8AM
END_TIME = 20 #8PM

# {
#     members: [
#         {
#             weekday: "mon",
#             date: "2024-03-04",
#             start:"3:00:00",
#             end: "6:00:00",
#             duration:"3"
#             },
#         {
#             date: "2024-03-04",
#             start:"7:00:00",
#             end: "8:00:00",
#             duration:"1"
#             },
#     ]
# }

#iso format: YYYY-MM-DD"T"hh:mm:ss"+"{UTC-zone}
def get_date(isoTime):
    dateList = isoTime.split("T")[0].split("-")
    return [int(dates) for dates in dateList]

def get_time(isoTime):
    utcTime = isoTime.split("T")[1]
    return utcTime.split("+")[0]

def main():
    lastestDate = None
    return_dict = {}
    # link from allocate+
    url = "https://my-timetable.monash.edu/even/rest/calendar/ical/a1df181d-05a3-4719-b029-bddb5f79e676"
    cal = Calendar(requests.get(url).text)
    currentDate = date.today()
    boundaryDate = currentDate + timedelta(days=7*DISPLAY_WEEK)

    for event in list(cal.timeline):
        eventBeginDateList = get_date(str(event.begin))

        eventBeginDate = date(eventBeginDateList[0],
                            eventBeginDateList[1],
                            eventBeginDateList[2])
        # ignore the past dates
        if eventBeginDate < currentDate:
            continue
        # also ignore the dates more the set week
        if eventBeginDate > boundaryDate:
            break

        return_dict["members"] =[str(eventBeginDate),str(event.duration),currentDate]
        return return_dict
        # if not(lastestDate is None) and lastestDate == str(eventBeginDate):
        #     return_dict[str(eventBeginDate)] = 
        # lastestDate = str(eventBeginDate)

        # print(event.name)
        # print(event.location)
        # print(event.duration)
        # print(get_time(str(event.begin))) 
        # print(eventBeginDate)

if __name__ == "__main":
    print(main())
    print("hellow")

