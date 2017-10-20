import fetch from '../tool/fetch'
/**
 * 获取支付信息列表
 */

export const getPayList = () => fetch('http://localhost:3000/test', {
  type: '1'
})
export const test = type => fetch('http://localhost:3000/test', {
  type: type
})

export const test2 = (type, name) => fetch('http://localhost:3000/test', {
  type: type,
  name: name
})


export const queryPay = (type,page,limit,start,end,lineno,carno,driver) => fetch('http://localhost:3000/pay',{
  type:type,
  page:page,
  limit:limit,
  start:start,
  end:end,
  lineno:lineno,
  carno:carno,
  driver:driver
})

export const queryPay1 = (type,page,limit,start,end,lineno,carno,driver) => fetch('http://localhost:3000/pay1',{
  type:type,
  page:page,
  limit:limit,
  start:start,
  end:end,
  lineno:lineno,
  carno:carno,
  driver:driver
})