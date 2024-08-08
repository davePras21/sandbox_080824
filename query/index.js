const query = () => {
  return `
    select * from [AGROBANKCORESYSTEM_DWH].[dbo].[ABCS_M_DDMAST] where ACCOUNTNUMBER = '001001491831316'
  `
}

module.exports = query