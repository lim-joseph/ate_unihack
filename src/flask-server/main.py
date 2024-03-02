from ics import Calendar
import requests
from datetime import datetime,date,timedelta
import numpy as np

DISPLAY_WEEK = 2
START_TIME = 8.0 #8AM
END_TIME = 20.0 #8PM

# {
#     weeks: [
#         {
#            {
#             weekday: "mon",
#             date: "2024-03-04",
#             start:"3:00:00",
#             end: "6:00:00",
#             duration:"3"
#             start:"7:00:00",
#             end: "8:00:00",
#             duration:"1"
#             },
#         {
#             weekday: "tue"
#             date: "2024-03-05",
#             start:"11:00:00",
#             end: "12:00:00",
#             duration:"1"
#             },
#
#     ]
# }

#iso format: YYYY-MM-DD"T"hh:mm:ss"+"{UTC-zone}
def get_date(isoTime):
    dateList = isoTime.split("T")[0].split("-")
    return [int(dates) for dates in dateList]

def get_time(isoTime):
    utcTime = isoTime.split("T")[1]
    timeList = utcTime.split("+")[0].split(":")
    # get hour and minute in float
    return float(timeList[0]+"."+timeList[1])

def merge_timeblock(timetableList) -> list:
    #Output the block of time they are in classes
    mergedTimeblock = set([num for index, num in enumerate(timetableList) if index > 0 and num == timetableList[index-1]])
    mergedTimeblock = sorted(list(set(timetableList) - mergedTimeblock))
    return mergedTimeblock

def find_freeblock(mergedTimeblock):
    validTimeDoubled = list(range(2*int(START_TIME),2*int(END_TIME),1))
    validTime = list(np.divide(validTimeDoubled,2))
    diffTime = [time for time in validTime if time not in mergedTimeblock]
    return diffTime


def main():
    lastDate = None
    datetimeList = {}
    tempList = []
    
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
        BeginTimeFloat = get_time(str(event.begin))
        EndTimeFloat = get_time(str(event.end))
        # ignore the past dates
        if eventBeginDate < currentDate:
            continue
        # also ignore the dates more the set week
        if eventBeginDate > boundaryDate:
            break
        
        if not(lastDate is None) and str(eventBeginDate) != lastDate:
           datetimeList[lastDate] = merge_timeblock(tempList)
           tempList = []

        tempList.append(BeginTimeFloat)
        tempList.append(EndTimeFloat)
        lastDate = str(eventBeginDate)
    return datetimeList

        # print(event.name)
        # print(event.location)
        # print(event.duration)
        # print(event.begin) 

# print(main())
test =[15.0, 18.0]
print(find_freeblock(test))
# if __name__ == "__main":
#     print("hello")
#     main()

