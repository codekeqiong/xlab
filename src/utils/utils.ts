export function TimeStream(timestamp: number, type?: string) {
  const date: Date = new Date(timestamp * 1000)
  const Y = date.getFullYear()
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  const nowTime: Date = new Date()
  const timeToString = nowTime.toString()
  switch (type) {
    case 'YM': // 年-月
      return Y + '-' + M
    case 'MD': // 月-日
      return M + '-' + D
    case 'MD_HM': // 月-日
      return M + '-' + D + ' ' + h + ':' + m
    case 'YMD_HMS': // 月-日 时：分：秒
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
    case 'CN_YMD': // x年x月x日
      return Y + '.' + M + '.' + D + '.'
    case 'CN_YMD_HM': // x年x月x日
      return Y + '.' + M + '.' + D + ' ' + h + ':' + m
    case 'CN_MD_HM': // x月x日
      return M + '.' + D + '.' + ' ' + h + ':' + m
    case 'hm': // 时:分
      return h + ':' + m
    case '-D': // 天数差
      return Math.floor(((timestamp * 1000) - Date.parse(timeToString)) / 1000 / 3600 / 24)
    case '-H': // 小时差
      return Math.ceil((timestamp * 1000 - Date.parse(timeToString)) / 1000 / 3600)
    default: // 年-月-日 时:分
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m
  }
}