<template>
    <span class="qualification-page">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0" :label-colon="true">
            
            <Row>
                <Col span="5">
                    <h3 style="textAlign:right" class="title-text">营业执照：</h3>                
                </Col>                
                <Col span="4">
                    <FormItem prop="businessLicense.code">
                        <Input 
                            v-model="formValidate.businessLicense.code" 
                            placeholder="请输入证书编号..." 
                        />
                    </FormItem>                
                </Col>
                <Col span="3">
                    <FormItem prop="businessLicense.startDate">
                        <DatePicker 
                            v-model="formValidate.businessLicense.startDate" 
                            type="date" 
                            placeholder="请选择有限期开始日期..." 
                            style="width: 100%"
                            :options="businessLicenseStartDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col>
                <Col span="3">
                    <FormItem prop="businessLicense.endDate">
                        <DatePicker 
                            v-model="formValidate.businessLicense.endDate" 
                            type="date" 
                            placeholder="请选择有效期截止日期..." 
                            style="width: 100%"
                            :options="businessLicenseEndDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col> 
                <Col span="4">
                    <Upload
                        action=""
                        :before-upload="(file)=>{ 
                            this.handleUpload('businessLicense',file)  
                            return false;
                        }"
                    >
                        <span v-if="formValidate.businessLicense.accessory">
                            <Button type="success" icon="md-checkmark">已上传</Button>
                            <Button style="marginLeft:10px" type="error" size="small" shape="circle" icon="md-close" @click="resetAccessory($event,'businessLicense')" title="重新上传"></Button>
                        </span>
                        <span v-else>
                            <Button v-if="!formValidate.businessLicense.error" type="primary" icon="ios-cloud-upload-outline">附件上传</Button>
                            <Button v-else type="warning" icon="ios-cloud-upload-outline">  待上传</Button>
                        </span> 
                    </Upload>               
                </Col> 
                <Col span="3" class="checkbox-box">
                    <FormItem >
                        <Checkbox
                            v-model="formValidate.businessLicense.required" 
                            disabled
                        > {{ formValidate.businessLicense.required?'附件必传':'附件不必传' }}</Checkbox>
                    </FormItem>               
                </Col>                                                                 
            </Row>

            <Row>
                <Col span="5">
                    <h3 style="textAlign:right" class="title-text">开户许可证：</h3>                
                </Col>                
                <Col span="4">
                    <FormItem prop="accountLicence.code">
                        <Input 
                            v-model="formValidate.accountLicence.code" 
                            placeholder="请输入证书编号..." 
                        />
                    </FormItem>                
                </Col>
                <Col span="3">
                    <FormItem prop="accountLicence.startDate">
                        <DatePicker 
                            v-model="formValidate.accountLicence.startDate" 
                            type="date" 
                            placeholder="请选择有限期开始日期..." 
                            style="width: 100%"
                            :options="accountLicenceStartDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col>
                <Col span="3">
                    <FormItem prop="accountLicence.endDate">
                        <DatePicker 
                            v-model="formValidate.accountLicence.endDate" 
                            type="date" 
                            placeholder="请选择有效期截止日期..." 
                            style="width: 100%"
                            :options="accountLicenceEndDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col> 
                <Col span="4">
                    <Upload
                        action=""
                        :before-upload="(file)=>{ 
                            this.handleUpload('accountLicence',file)  
                            return false;
                        }"
                    >
                        <span v-if="formValidate.accountLicence.accessory">
                            <Button type="success" icon="md-checkmark">已上传</Button>
                            <Button style="marginLeft:10px" type="error" size="small" shape="circle" icon="md-close" @click="resetAccessory($event,'businessLicense')" title="重新上传"></Button>
                        </span>
                        <span v-else>
                            <Button v-if="!formValidate.accountLicence.error" type="primary" icon="ios-cloud-upload-outline">附件上传</Button>
                            <Button v-else type="warning" icon="ios-cloud-upload-outline">  待上传</Button>
                        </span> 
                    </Upload>               
                </Col> 
                <Col span="3" class="checkbox-box">
                    <FormItem >
                        <Checkbox
                            v-model="formValidate.accountLicence.required" 
                            disabled
                        > {{ formValidate.accountLicence.required?'附件必传':'附件不必传' }}</Checkbox>
                    </FormItem>               
                </Col>                                                                 
            </Row>  

            <Row>
                <Col span="5">
                    <h3 style="textAlign:right" class="title-text">质量管理体系ISO9001：</h3>                
                </Col>                
                <Col span="4">
                    <FormItem prop="ISO.code">
                        <Input 
                            v-model="formValidate.ISO.code" 
                            placeholder="请输入证书编号..." 
                        />
                    </FormItem>                
                </Col>
                <Col span="3">
                    <FormItem prop="ISO.startDate">
                        <DatePicker 
                            v-model="formValidate.ISO.startDate" 
                            type="date" 
                            placeholder="请选择有限期开始日期..." 
                            style="width: 100%"
                            :options="ISOStartDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col>
                <Col span="3">
                    <FormItem prop="ISO.endDate">
                        <DatePicker 
                            v-model="formValidate.ISO.endDate" 
                            type="date" 
                            placeholder="请选择有效期截止日期..." 
                            style="width: 100%"
                            :options="ISOEndDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col> 
                <Col span="4">
                    <Upload
                        action=""
                        :before-upload="(file)=>{ 
                            this.handleUpload('ISO',file)  
                            return false;
                        }"
                    >
                        <span v-if="formValidate.ISO.accessory">
                            <Button type="success" icon="md-checkmark">已上传</Button>
                            <Button style="marginLeft:10px" type="error" size="small" shape="circle" icon="md-close" @click="resetAccessory($event,'businessLicense')" title="重新上传"></Button>
                        </span>
                        <span v-else>
                            <Button v-if="!formValidate.ISO.error" type="primary" icon="ios-cloud-upload-outline">附件上传</Button>
                            <Button v-else type="warning" icon="ios-cloud-upload-outline">  待上传</Button>
                        </span> 
                    </Upload>               
                </Col> 
                <Col span="3" class="checkbox-box">
                    <FormItem >
                        <Checkbox
                            v-model="formValidate.ISO.required" 
                            disabled
                        > {{ formValidate.ISO.required?'附件必传':'附件不必传' }}</Checkbox>
                    </FormItem>               
                </Col>                                                                 
            </Row> 

            <Row>
                <Col span="5">
                    <h3 style="textAlign:right" class="title-text">质量管理体系ITF16949：</h3>                
                </Col>                
                <Col span="4">
                    <FormItem prop="ITF.code">
                        <Input 
                            v-model="formValidate.ITF.code" 
                            placeholder="请输入证书编号..." 
                        />
                    </FormItem>                
                </Col>
                <Col span="3">
                    <FormItem prop="ITF.startDate">
                        <DatePicker 
                            v-model="formValidate.ITF.startDate" 
                            type="date" 
                            placeholder="请选择有限期开始日期..." 
                            style="width: 100%"
                            :options="ITFStartDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col>
                <Col span="3">
                    <FormItem prop="ITF.endDate">
                        <DatePicker 
                            v-model="formValidate.ITF.endDate" 
                            type="date" 
                            placeholder="请选择有效期截止日期..." 
                            style="width: 100%"
                            :options="ITFEndDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col> 
                <Col span="4">
                    <Upload
                        action=""
                        :before-upload="(file)=>{ 
                            this.handleUpload('ITF',file)  
                            return false;
                        }"
                    >
                        <span v-if="formValidate.ITF.accessory">
                            <Button type="success" icon="md-checkmark">已上传</Button>
                            <Button style="marginLeft:10px" type="error" size="small" shape="circle" icon="md-close" @click="resetAccessory($event,'businessLicense')" title="重新上传"></Button>
                        </span>
                        <span v-else>
                            <Button v-if="!formValidate.ITF.error" type="primary" icon="ios-cloud-upload-outline">附件上传</Button>
                            <Button v-else type="warning" icon="ios-cloud-upload-outline">  待上传</Button>
                        </span> 
                    </Upload>               
                </Col> 
                <Col span="3" class="checkbox-box">
                    <FormItem >
                        <Checkbox
                            v-model="formValidate.ITF.required" 
                            disabled
                        > {{ formValidate.ITF.required?'附件必传':'附件不必传' }}</Checkbox>
                    </FormItem>               
                </Col>                                                                 
            </Row> 

            <Row>
                <Col span="5">
                    <h3 style="textAlign:right" class="title-text">职业健康安全：</h3>                
                </Col>                
                <Col span="4">
                    <FormItem prop="healthySafety.code">
                        <Input 
                            v-model="formValidate.healthySafety.code" 
                            placeholder="请输入证书编号..." 
                        />
                    </FormItem>                
                </Col>
                <Col span="3">
                    <FormItem prop="healthySafety.startDate">
                        <DatePicker 
                            v-model="formValidate.healthySafety.startDate" 
                            type="date" 
                            placeholder="请选择有限期开始日期..." 
                            style="width: 100%"
                            :options="healthySafetyStartDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col>
                <Col span="3">
                    <FormItem prop="healthySafety.endDate">
                        <DatePicker 
                            v-model="formValidate.healthySafety.endDate" 
                            type="date" 
                            placeholder="请选择有效期截止日期..." 
                            style="width: 100%"
                            :options="healthySafetyEndDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col> 
                <Col span="4">
                    <Upload
                        action=""
                        :before-upload="(file)=>{ 
                            this.handleUpload('healthySafety',file)  
                            return false;
                        }"
                    >
                        <span v-if="formValidate.healthySafety.accessory">
                            <Button type="success" icon="md-checkmark">已上传</Button>
                            <Button style="marginLeft:10px" type="error" size="small" shape="circle" icon="md-close" @click="resetAccessory($event,'businessLicense')" title="重新上传"></Button>
                        </span>
                        <span v-else>
                            <Button v-if="!formValidate.healthySafety.error" type="primary" icon="ios-cloud-upload-outline">附件上传</Button>
                            <Button v-else type="warning" icon="ios-cloud-upload-outline">  待上传</Button>
                        </span> 
                    </Upload>               
                </Col> 
                <Col span="3" class="checkbox-box">
                    <FormItem >
                        <Checkbox
                            v-model="formValidate.healthySafety.required" 
                            disabled
                        > {{ formValidate.healthySafety.required?'附件必传':'附件不必传' }}</Checkbox>
                    </FormItem>               
                </Col>                                                                 
            </Row> 

            <Row>
                <Col span="5">
                    <h3 style="textAlign:right" class="title-text">环境管理：</h3>                
                </Col>                
                <Col span="4">
                    <FormItem prop="environmentalManagement.code">
                        <Input 
                            v-model="formValidate.environmentalManagement.code" 
                            placeholder="请输入证书编号..." 
                        />
                    </FormItem>                
                </Col>
                <Col span="3">
                    <FormItem prop="environmentalManagement.startDate">
                        <DatePicker 
                            v-model="formValidate.environmentalManagement.startDate" 
                            type="date" 
                            placeholder="请选择有限期开始日期..." 
                            style="width: 100%"
                            :options="environmentalManagementStartDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col>
                <Col span="3">
                    <FormItem prop="environmentalManagement.endDate">
                        <DatePicker 
                            v-model="formValidate.environmentalManagement.endDate" 
                            type="date" 
                            placeholder="请选择有效期截止日期..." 
                            style="width: 100%"
                            :options="environmentalManagementEndDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col> 
                <Col span="4">
                    <Upload
                        action=""
                        :before-upload="(file)=>{ 
                            this.handleUpload('environmentalManagement',file)  
                            return false;
                        }"
                    >
                        <span v-if="formValidate.environmentalManagement.accessory">
                            <Button type="success" icon="md-checkmark">已上传</Button>
                            <Button style="marginLeft:10px" type="error" size="small" shape="circle" icon="md-close" @click="resetAccessory($event,'businessLicense')" title="重新上传"></Button>
                        </span>
                        <span v-else>
                            <Button v-if="!formValidate.environmentalManagement.error" type="primary" icon="ios-cloud-upload-outline">附件上传</Button>
                            <Button v-else type="warning" icon="ios-cloud-upload-outline">  待上传</Button>
                        </span> 
                    </Upload>               
                </Col> 
                <Col span="3" class="checkbox-box">
                    <FormItem >
                        <Checkbox
                            v-model="formValidate.environmentalManagement.required" 
                            disabled
                        > {{ formValidate.environmentalManagement.required?'附件必传':'附件不必传' }}</Checkbox>
                    </FormItem>               
                </Col>                                                                 
            </Row> 
         
            <Row>
                <Col span="5">
                    <h3 style="textAlign:right" class="title-text">特殊资质：</h3>                
                </Col>                
                <Col span="4">
                    <FormItem prop="specialQualifications.code">
                        <Input 
                            v-model="formValidate.specialQualifications.code" 
                            placeholder="请输入证书编号..." 
                        />
                    </FormItem>                
                </Col>
                <Col span="3">
                    <FormItem prop="specialQualifications.startDate">
                        <DatePicker 
                            v-model="formValidate.specialQualifications.startDate" 
                            type="date" 
                            placeholder="请选择有限期开始日期..." 
                            style="width: 100%"
                            :options="specialQualificationsStartDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col>
                <Col span="3">
                    <FormItem prop="specialQualifications.endDate">
                        <DatePicker 
                            v-model="formValidate.specialQualifications.endDate" 
                            type="date" 
                            placeholder="请选择有效期截止日期..." 
                            style="width: 100%"
                            :options="specialQualificationsEndDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col> 
                <Col span="4">
                    <Upload
                        action=""
                        :before-upload="(file)=>{ 
                            this.handleUpload('specialQualifications',file)  
                            return false;
                        }"
                    >
                        <span v-if="formValidate.specialQualifications.accessory">
                            <Button type="success" icon="md-checkmark">已上传</Button>
                            <Button style="marginLeft:10px" type="error" size="small" shape="circle" icon="md-close" @click="resetAccessory($event,'businessLicense')" title="重新上传"></Button>
                        </span>
                        <span v-else>
                            <Button v-if="!formValidate.specialQualifications.error" type="primary" icon="ios-cloud-upload-outline">附件上传</Button>
                            <Button v-else type="warning" icon="ios-cloud-upload-outline">  待上传</Button>
                        </span> 
                    </Upload>               
                </Col> 
                <Col span="3" class="checkbox-box">
                    <FormItem >
                        <Checkbox
                            v-model="formValidate.specialQualifications.required" 
                            disabled
                        > {{ formValidate.specialQualifications.required?'附件必传':'附件不必传' }}</Checkbox>
                    </FormItem>               
                </Col>                                                                 
            </Row> 

            <Row>
                <Col span="5">
                    <h3 style="textAlign:right" class="title-text">代理商授权书：</h3>                
                </Col>                
                <Col span="4">
                    <FormItem prop="authorization.code">
                        <Input 
                            v-model="formValidate.authorization.code" 
                            placeholder="请输入证书编号..." 
                        />
                    </FormItem>                
                </Col>
                <Col span="3">
                    <FormItem prop="authorization.startDate">
                        <DatePicker 
                            v-model="formValidate.authorization.startDate" 
                            type="date" 
                            placeholder="请选择有限期开始日期..." 
                            style="width: 100%"
                            :options="authorizationStartDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col>
                <Col span="3">
                    <FormItem prop="authorization.endDate">
                        <DatePicker 
                            v-model="formValidate.authorization.endDate" 
                            type="date" 
                            placeholder="请选择有效期截止日期..." 
                            style="width: 100%"
                            :options="authorizationEndDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col> 
                <Col span="4">
                    <Upload
                        action=""
                        :before-upload="(file)=>{ 
                            this.handleUpload('authorization',file)  
                            return false;
                        }"
                    >
                        <span v-if="formValidate.authorization.accessory">
                            <Button type="success" icon="md-checkmark">已上传</Button>
                            <Button style="marginLeft:10px" type="error" size="small" shape="circle" icon="md-close" @click="resetAccessory($event,'businessLicense')" title="重新上传"></Button>
                        </span>
                        <span v-else>
                            <Button v-if="!formValidate.authorization.error" type="primary" icon="ios-cloud-upload-outline">附件上传</Button>
                            <Button v-else type="warning" icon="ios-cloud-upload-outline">  待上传</Button>
                        </span> 
                    </Upload>               
                </Col> 
                <Col span="3" class="checkbox-box">
                    <FormItem >
                        <Checkbox
                            v-model="formValidate.authorization.required" 
                            disabled
                        > {{ formValidate.authorization.required?'附件必传':'附件不必传' }}</Checkbox>
                    </FormItem>               
                </Col>                                                                 
            </Row> 

            <Row>
                <Col span="5">
                    <h3 style="textAlign:right" class="title-text">其他：</h3>                
                </Col>                
                <Col span="4">
                    <FormItem prop="other.code">
                        <Input 
                            v-model="formValidate.other.code" 
                            placeholder="请输入证书编号..." 
                        />
                    </FormItem>                
                </Col>
                <Col span="3">
                    <FormItem prop="other.startDate">
                        <DatePicker 
                            v-model="formValidate.other.startDate" 
                            type="date" 
                            placeholder="请选择有限期开始日期..." 
                            style="width: 100%"
                            :options="otherStartDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col>
                <Col span="3">
                    <FormItem prop="other.endDate">
                        <DatePicker 
                            v-model="formValidate.other.endDate" 
                            type="date" 
                            placeholder="请选择有效期截止日期..." 
                            style="width: 100%"
                            :options="otherEndDate"
                        ></DatePicker>                        
                    </FormItem>  
                </Col> 
                <Col span="4">
                    <Upload
                        action=""
                        :before-upload="(file)=>{ 
                            this.handleUpload('other',file)  
                            return false;
                        }"
                    >
                        <span v-if="formValidate.other.accessory">
                            <Button type="success" icon="md-checkmark">已上传</Button>
                            <Button style="marginLeft:10px" type="error" size="small" shape="circle" icon="md-close" @click="resetAccessory($event,'businessLicense')" title="重新上传"></Button>
                        </span>
                        <span v-else>
                            <Button v-if="!formValidate.other.error" type="primary" icon="ios-cloud-upload-outline">附件上传</Button>
                            <Button v-else type="warning" icon="ios-cloud-upload-outline">  待上传</Button>
                        </span> 
                    </Upload>               
                </Col> 
                <Col span="3" class="checkbox-box">
                    <FormItem >
                        <Checkbox
                            v-model="formValidate.other.required" 
                            disabled
                        > {{ formValidate.other.required?'附件必传':'附件不必传' }}</Checkbox>
                    </FormItem>               
                </Col>                                                                 
            </Row> 



            <br/>
            <Divider />


        </Form>        
        <Modal v-model="modal" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>重置确认</span>
            </p>
            <div style="text-align:center">
                <p>重置后数据无法恢复！</p>
                <p>是否继续？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long @click="handleReset">重置</Button>
            </div>
        </Modal>  
        <div class="btn-box">
            <Button type="warning" @click="handleResetModal">重置</Button>
            <Button type="info" @click="lastStep">上一步</Button>
            <Button type="primary" @click="nextStep">下一步</Button>
        </div>      
    </span>
</template>
<script>
    import {GlobalBus} from './../common/GlobalBus.js';

    export default {
        data (_this) {
            return {
                modal:false,

                // 表单
                formValidate: {

                    // 营业执照
                    businessLicense:{
                        code:'',            // 编号
                        startDate:'',       // 开始日期
                        endDate:'',         // 结束日期
                        accessory:null,     // 附件
                        required:true,        // 附件必传
                        error:false
                    },

                    // 开户许可证
                    accountLicence:{
                        code:'',            // 编号
                        startDate:'',       // 开始日期
                        endDate:'',         // 结束日期
                        accessory:null,     // 附件
                        required:false,        // 附件必传
                        error:false

                    },

                    // 质量管理体系ISO9001
                    ISO:{
                        code:'',            // 编号
                        startDate:'',       // 开始日期
                        endDate:'',         // 结束日期
                        accessory:null,     // 附件
                        required:false,        // 附件必传
                        error:false

                    },

                    // 质量管理体系ITF16949
                    ITF:{
                        code:'',            // 编号
                        startDate:'',       // 开始日期
                        endDate:'',         // 结束日期
                        accessory:null,     // 附件
                        required:false,        // 附件必传
                        error:false

                    },

                    // 职业健康安全
                    healthySafety:{
                        code:'',            // 编号
                        startDate:'',       // 开始日期
                        endDate:'',         // 结束日期
                        accessory:null,     // 附件
                        required:false,        // 附件必传
                        error:false

                    },

                    // 环境管理
                    environmentalManagement:{
                        code:'',            // 编号
                        startDate:'',       // 开始日期
                        endDate:'',         // 结束日期
                        accessory:null,     // 附件
                        required:false,        // 附件必传
                        error:false

                    },

                    // 特殊资质
                    specialQualifications:{
                        code:'',            // 编号
                        startDate:'',       // 开始日期
                        endDate:'',         // 结束日期
                        accessory:null,     // 附件
                        required:false,        // 附件必传
                        error:false

                    },

                    // 代理商授权书
                    authorization:{
                        code:'',            // 编号
                        startDate:'',       // 开始日期
                        endDate:'',         // 结束日期
                        accessory:null,     // 附件
                        required:false,        // 附件必传
                        error:false

                    },

                    // 其它
                    other:{
                        code:'',            // 编号
                        startDate:'',       // 开始日期
                        endDate:'',         // 结束日期
                        accessory:null,     // 附件
                        required:false,        // 附件必传
                        error:false

                    },                    
                },
                // 表单 验证
                ruleValidate: {
                    // 必填字段
                    // 'businessLicense.code': [
                    //     { required: true, message: '必填！', trigger: 'blur' }
                    // ],
                },   
                
                
                // 营业执照 设置开始结束 日期  限制                  
                businessLicenseStartDate: {
                    disabledDate (date) {
                        var endDate = _this.formValidate.businessLicense.endDate;
                        return endDate && date.getTime() > endDate.getTime()
                    }
                },
                businessLicenseEndDate: {
                    disabledDate (date) {
                        var startDate = _this.formValidate.businessLicense.startDate;
                        return startDate && date.getTime() < startDate.getTime()
                    }
                },
               
                // 开户许可证 设置开始结束 日期  限制  
                accountLicenceStartDate: {
                    disabledDate (date) {
                        var endDate = _this.formValidate.accountLicence.endDate;
                        return endDate && date.getTime() > endDate.getTime()
                    }
                },
                accountLicenceEndDate: {
                    disabledDate (date) {
                        var startDate = _this.formValidate.accountLicence.startDate;
                        return startDate && date.getTime() < startDate.getTime()
                    }
                }, 
                
                // 质量管理体系ISO9001 设置开始结束 日期  限制  
                ISOStartDate: {
                    disabledDate (date) {
                        var endDate = _this.formValidate.ISO.endDate;
                        return endDate && date.getTime() > endDate.getTime()
                    }
                },
                ISOEndDate: {
                    disabledDate (date) {
                        var startDate = _this.formValidate.ISO.startDate;
                        return startDate && date.getTime() < startDate.getTime()
                    }
                },                
                

                // 质量管理体系ITF16949 设置开始结束 日期  限制  
                ITFStartDate: {
                    disabledDate (date) {
                        var endDate = _this.formValidate.ITF.endDate;
                        return endDate && date.getTime() > endDate.getTime()
                    }
                },
                ITFEndDate: {
                    disabledDate (date) {
                        var startDate = _this.formValidate.ITF.startDate;
                        return startDate && date.getTime() < startDate.getTime()
                    }
                }, 

                // 职业健康安全 设置开始结束 日期  限制  
                healthySafetyStartDate: {
                    disabledDate (date) {
                        var endDate = _this.formValidate.healthySafety.endDate;
                        return endDate && date.getTime() > endDate.getTime()
                    }
                },
                healthySafetyEndDate: {
                    disabledDate (date) {
                        var startDate = _this.formValidate.healthySafety.startDate;
                        return startDate && date.getTime() < startDate.getTime()
                    }
                },    
                            
                // 环境管理 设置开始结束 日期  限制  
                environmentalManagementStartDate: {
                    disabledDate (date) {
                        var endDate = _this.formValidate.environmentalManagement.endDate;
                        return endDate && date.getTime() > endDate.getTime()
                    }
                },
                environmentalManagementEndDate: {
                    disabledDate (date) {
                        var startDate = _this.formValidate.environmentalManagement.startDate;
                        return startDate && date.getTime() < startDate.getTime()
                    }
                },
                
                // 特殊资质 设置开始结束 日期  限制  
                specialQualificationsStartDate: {
                    disabledDate (date) {
                        var endDate = _this.formValidate.specialQualifications.endDate;
                        return endDate && date.getTime() > endDate.getTime()
                    }
                },
                specialQualificationsEndDate: {
                    disabledDate (date) {
                        var startDate = _this.formValidate.specialQualifications.startDate;
                        return startDate && date.getTime() < startDate.getTime()
                    }
                },
                

                // 代理商授权书 设置开始结束 日期  限制  
                authorizationStartDate: {
                    disabledDate (date) {
                        var endDate = _this.formValidate.authorization.endDate;
                        return endDate && date.getTime() > endDate.getTime()
                    }
                },
                authorizationEndDate: {
                    disabledDate (date) {
                        var startDate = _this.formValidate.authorization.startDate;
                        return startDate && date.getTime() < startDate.getTime()
                    }
                },
                
                // 其它 设置开始结束 日期  限制  
                otherStartDate: {
                    disabledDate (date) {
                        var endDate = _this.formValidate.other.endDate;
                        return endDate && date.getTime() > endDate.getTime()
                    }
                },
                otherEndDate: {
                    disabledDate (date) {
                        var startDate = _this.formValidate.other.startDate;
                        return startDate && date.getTime() < startDate.getTime()
                    }
                },                
                
            }
        },
        created(){

            let that=this;

			// 保存数据
			GlobalBus.$off("register3_save");
			GlobalBus.$on("register3_save", function (callBack){
                callBack(that.formValidate);
			});            
        },
        methods: {
            /**
             * 上一步
             */
            lastStep(){
                this.$emit('lastStep');
            },
            /**
             * 下一步
             */            
            nextStep (name) {

                this.$refs['formValidate'].validate((valid) => {
                    if (valid) {

                        var result=false;
                        Object.entries(this.formValidate).map((o)=>{
                            if( o[1]['required'] && !o[1]['accessory'] ){
                                result=true;
                                this.formValidate[o[0]]['error']=true;
                            }
                        });
                        
                        if(result){
                            this.$Message.error({
                                "content":'文件待上传!',
                                "duration":2  
                            });   
                            return;
                        }



                        // 数据录入完成 跳转下一步
                        this.$Message.success({
                            "content":'填写完成!',
                            "duration":2  
                        });
                        this.$emit('nextStep');

                    } else {
                        this.$Message.error({
                            "content":'基础数据不完整!',
                            "duration":2  
                        });
                    }
                });

            },
            /**
             * 重置弹框
             */
            handleResetModal(){
                this.modal= true;
            },
            /**
             * 重置
             */
            handleReset () {
                this.$refs['formValidate'].resetFields();

                Object.entries(this.formValidate).map((o)=>{
                    this.formValidate[o[0]]['accessory']=null;
                    this.formValidate[o[0]]['error']=false;
                });

                this.modal = false;
                this.$Message.success({
                    "content":'重置完成!',
                    "duration":2  
                });
            },
            /**
             * 附件上传
             */
            handleUpload(name,file){
                this.formValidate[name]['accessory']=file;   // 设置文件
                this.formValidate[name].error=false;
            },
            /**
             * 重新上传 
             * */   
            resetAccessory(event,name){
                event.stopPropagation();
                this.formValidate[name].accessory=null;
                this.formValidate[name].error=false;
            }
        }
    }
</script>