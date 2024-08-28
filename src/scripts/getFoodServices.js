/* Author: Tor Sdayur */

//reads food data from table into foodServices
export function getFoodServices(foodTable) {
    let foodServices = [];
    for (const fp of foodTable)
    {
      foodServices.push(
        {
          serviceID: fp['ID'],
          title: fp['PROGRAM'],
          phone: fp['PHONE'],
          address: fp['FULL_ADDRESS'],
          borough: fp['BOROUGH'].toLowerCase(),
          hours: fp['HOURS'],
          days: getDays(
            [
              fp['mon'],
              fp['tue'],
              fp['wed'],
              fp['thur'],
              fp['fri'],
              fp['sat'],
              fp['sun']
            ]
          ),
          pos: {
            latitude: fp["LATITUDE"],
            longitude: fp["LONGITUDE"]
          }
        }
      )
    }
    return foodServices;
}

//currently doesn't handle hours
function getDays(daysAvailable)
{
  let a = [];
  let days = ['m','tu', 'w', 'th', 'f', 'sa', 'su'];
  for (const index in daysAvailable)
  {
    if (daysAvailable[index])
    {
      a.push(days[index]);
    }
  }
  return a;
}