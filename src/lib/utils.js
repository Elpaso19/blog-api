export function convertHumanReadableTimeToMilliseconds(timestring){

    // time format can be like this : "90d"|"3w"|"1hr"
    const match=timestring.match(/^(\d+)(\w+)$/);
    if(!match){
        throw new Error("Invalid time format.Expected to be like this : '90d' or '3w' or '1hr'");
    }

    const number=parseInt(match[1],10);
    const unit=match[2];

    let milliseconds;
    switch(unit){
        case "d":
            millseconds=number*24*60*60*1000;
            break;
        case "w":
            millseconds=number*7*24*60*60*1000;
            break;
        case "hr":
            millseconds=number*60*60*1000;
            break;
        default:
            throw new Error("Invalid time unit.Expected to be like this : 'd' or 'w' or 'hr'");
    }

    return milliseconds

}


export const asyncWapper = (handler) => {
    return async (req, res, next) => {
      try {
        await handler(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  };