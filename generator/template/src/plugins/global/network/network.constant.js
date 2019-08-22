/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-08-20 11:05:34
 * @LastEditTime: 2019-08-20 12:22:49
 * @LastEditors: Devin Shi
 * @Description: 
 */
const NETWORK_CONSTANT = {
  httpErrorCode: {
    NotFound: 404,
    NoAuth: 401,
    BadRequestMin: 400,
    BadRequestMax: 499,
    ServerExceptionMin: 500,
    ServerExceptionMax: 599
  }
}

export default NETWORK_CONSTANT
