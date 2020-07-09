/**
 * 存放后端提供接口
 */
export default {
  // 获取对应状态中英文字典
  postEntrys: '/information/getEntrys.do',
  // 判断是否同意隐私协议
  getIsAgree: '/customPrivacy/isAgree.do',
  // 同意隐私协议
  postAgree: '/customPrivacy/agree.do',
  // 判断是否有新的沟通需求和定制需求
  postDemandUpdateCss: '/demand/demandUpdateCss.do',
  // 当前页面展示页数
  postVerifyCustomerViewData: '/information/verifyCustomerViewData.do',



  // 资讯库-筛选条件导航内容
  postInformationAddEntryToEdits: '/information/addEntryToEdits.do',
  // 资讯库-列表
  postInformationList: '/information/list.do',
  // 资讯库-详情
  postInformationDetailData: '/information/detailData.do',
  // 资讯库-本企业其他资讯
  postTheEnterpriseList: '/information/theEnterpriseList.do',
  // 保存阅读记录
  postReadingStatus: '/tpRecordcliReadingStatus/readingStatus.do',

  // 企业库-筛选条件导航内容
  postEnterpriseAddEntryToEdits: '/enterprise/addEntryToEdits.do',
  // 企业库-列表
  postEnterpriseList: '/enterprise/list.do',
  // 企业库-详情
  postEnterpriseDetailData: '/enterprise/detailData.do',
  // 企业库-公司股东
  getEnterpriseShareholderList: '/enterpriseShareholder/list.do',
  // 企业库-主要团队
  getEnterpriseTeamList: '/enterpriseTeam/list.do',
  // 企业库-经营状况(访谈)
  getEnterpriseStatusList: '/enterpriseStatus/list.do',
  // 企业库-经营状况(工商)
  getEnterpriseStatusCommerceList: '/enterpriseStatusCommerce/list.do',
  // 企业库-主营品牌
  getEnterpriseBrandList: '/enterpriseBrand/list.do',
  // 企业库-主要竞争对手
  getEnterpriseCompetitorList: '/enterpriseCompetitor/list.do',
  // 企业库-董事会构成
  getEnterpriseResearchDirectorateList: '/enterpriseResearchDirectorate/list.do',

  // 企业研究-筛选条件导航内容
  postEnterpriseResearchAddEntryToEdits: '/enterpriseResearch/addEntryToEdits.do',
  // 企业研究-列表
  postEnterpriseResearchList: '/enterpriseResearch/enterpriseResearchList.do',
  // 企业研究-详情
  postEnterpriseResearchDetailNew: '/enterpriseResearch/detailNew.do',
  // 企业研究-根据tmEnterpriseId查询企业研究
  getEnterpriseResearch: '/enterpriseResearch/getEnterpriseResearch.do',
  // 企业研究-公司对外投资
  getEnterpriseResearchEnterpriseList: '/enterpriseResearchEnterprise/list.do',
  // 企业研究-法人对外投资
  getEnterpriseResearchCorporationList: '/enterpriseResearchCorporation/list.do',
  // 企业研究-融资历史
  getEnterpriseResearchFinancingHistoryList: '/enterpriseResearchFinancingHistory/list.do',


  // 行业研究-筛选条件导航内容
  postIndustryResearchAddEntryToEdits: '/industryResearch/addEntryToEdits.do',
  // 行业研究-列表
  postIndustryResearchList: '/industryResearch/list.do',
  // 行业研究-详情
  postIndustryResearchDetail: '/industryResearch/detailList.do',
  // 其他-行业研究
  postIndustryResearch: '/industryResearch/otherList.do',



  // 沟通需求-筛选条件导航内容
  postDemandAddEntryToEdits: '/demand/addEntryToEdits.do',
  // 沟通需求-列表
  postDemandList: '/demand/demandList.do',
  // 沟通需求-当前需求
  getCustomFeedbackData: '/demand/customFeedbackData.do',
  // 沟通需求-需求反馈
  getFeedBackContent: '/demand/getFeedBackContent.do',
  // 沟通需求-发送需求
  postRequirementFeedback: '/demand/requirementFeedback.do',
  // 收藏
  getStoreAdd: '/store/add.do',


  // 企业竞争对手列表
  getEnterpriseSimilarEnterprise: '/enterprise/similarEnterprise.do',

  // 全文搜索列表
  postGlobalList: '/information/globalList.do',


  // 收藏
  collectList: '/store/list.do',
  // 设置
  setTreeList: '/information/treeList.do',
  // 设置 选中数据
  setTreeSelectList: '/enterpriseResearch/getIndustryList.do',

  // 设置 保存
  setTreeSave: '/setting/updateCheckStatus.do',
  // 邮件订阅
  emailConfig: '/customSubscribe/initData.do',
  // 邮件订阅 保存
  emailConfigSave: '/customSubscribe/setting.do',

  // 提出需求 获取 保存
  demandGetInformation: '/information/addDemandData.do',  // 质询库 
  demandGetEnterprise: '/enterprise/addDemandData.do',  // 企业库 
  demandGetEnterpriseResearch: '/enterpriseResearch/addDemandData.do',  // 企业研究
  demandGetIndustryResearch: '/industryResearch/newCustomData.do',  // 行业研究



  demandSave: '/',

  postLogin: '/j_spring_security_check.action', //登录
  postLogOut: '/custom/doLogOut.do' //退出登录

}