const color1 = '#DE9C53'
const formatTime = (date = new Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatHours = (date = new Date) => {
  return date.toTimeString().split(' ')[0]
}

const formatWeek = (date = new Date) => {
  let str = "";
  switch (date.getDay()) {
    case 0: {
      str = "星期日"; break;
    }
    case 1: {
      str = "星期一"; break;
    }
    case 2: {
      str = "星期二"; break;
    }
    case 3: {
      str = "星期三"; break;
    }
    case 4: {
      str = "星期四"; break;
    }
    case 5: {
      str = "星期五"; break;
    }
    case 6: {
      str = "星期六"; break;
    }
  }
  return str;
}

module.exports = {
  formatTime,
  formatNumber,
  formatWeek,
  formatHours
}
