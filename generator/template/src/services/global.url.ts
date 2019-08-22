/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-08-20 12:17:24
 * @LastEditTime: 2019-08-21 20:23:38
 * @LastEditors: Devin Shi
 * @Description: 
 */
const globalUrl = {
  "UsersOctocat": {
    url: "users/octocat",
    method: 'POST',
    data: {
      orgId: ''
    },
    headers: {},
    config: {},
    dataValid: {
      orgId: {
        type: String,
        require: true
      }
    }
  }
}
export default globalUrl

