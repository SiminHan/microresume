/**
 * Created by simin on 2016/8/4.
 */
microresume_index.controller('left_side_flypanel_user',['$scope',function($scope){
    //$scope.name="micro";
}]);

microresume_index.controller('user_menu',['$scope',function($scope){
    //$scope.name="micro";

}]);

microresume_index.controller('user_info_detail',['$scope',function($scope){
    $scope.ui_pic="img/head_img.jpg";

    $scope.get_sex=function(type){
        if(type==='F'){
            return "女";
        }else  if(type==='M'){
            return "男";
        }else{
            return "";
        }
    };

    $scope.data={
        ui_real_name:"王力宏",
        u_id:10001,
        city_id:10001,
        city_name:"广州",
        ui_pic:"img/head_img.jpg",
        c_id:10001,
        c_name:"C++",
        ui_sex:"M",
        ui_birth_date:new Date("2007-11-01 12:20:30"),
        ui_address:"华南农业大学华山学生宿舍1栋",
        ui_domicile_place:"台湾",
        ui_phone_number:"1881234854",
        ui_qq_number:"454545656",
        ui_email:"wanglihong@163.com"
    };

    $scope.edit=function(){
        window.location.href="user-info-edit.html";
    };

}]);

microresume_index.controller('user_info_edit',['$scope','$filter',function($scope,$filter){

    $scope.user_info={
        ui_real_name:"王",
        u_id:10001,
        city_id:3,
        city_name:"广州",
        ui_pic:"img/head_img.jpg",
        c_id:202002,
        c_name:"C++",
        ui_sex:"F",
        ui_birth_date:new Date("2007-11-01 12:20:30"),
        ui_address:"华南农业大学华山学生宿舍1栋",
        ui_domicile_place:"台湾",
        ui_phone_number:"1881234854",
        ui_qq_number:"454545656",
        ui_email:"wanglihong@163.com"
    };

    $scope.edit_user_info_submit=function(edit_user_info_form){
        var test= $filter('date')($scope.user_info.ui_birth_date,'yyyy-MM-dd HH:mm:ss');
        //var test=new Date($scope.user_info.ui_birth_date).format("yyyy-MM-dd HH:mm:ss");
        console.log(test);
       console.log($scope.user_info);
    };
    $scope.provinces=[
        {
            province_id:1,
            province_name:"广东"
        },
        {
            province_id:2,
            province_name:"湖南"
        }
    ];
    $scope.cities=[
        {
            city_id:1,
            city_name:"广州",
            province_id:1
        },
        {
            city_id:2,
            city_name:"佛山",
            province_id:1
        },
        {
            city_id:3,
            city_name:"长沙",
            province_id:2
        },
        {
            city_id:4,
            city_name:"株洲",
            province_id:2
        }
    ];
    $scope.catalogue=[
        {
            c_id:100000,
            c_name:"计算机"
        },
        {
            c_id:101000,
            c_name:"软件"
        },
        {
            c_id:101001,
            c_name:"JAVA"
        },
        {
            c_id:101002,
            c_name:"c++"
        },
        {
            c_id:102000,
            c_name:"运维"
        },
        {
            c_id:102001,
            c_name:"运行"
        },
        {
            c_id:102002,
            c_name:"维护"
        },
        {
            c_id:200000,
            c_name:"金融"
        },
        {
            c_id:201000,
            c_name:"股票"
        },
        {
            c_id:201001,
            c_name:"国内"
        },
        {
            c_id:201002,
            c_name:"国际"
        },
        {
            c_id:202000,
            c_name:"财务"
        },
        {
            c_id:202001,
            c_name:"会计"
        },
        {
            c_id:202002,
            c_name:"精算"
        }
    ];
    var get_province_id=function(city_id){
        for(var i=0;i<$scope.cities.length;i++){
            if(city_id===$scope.cities[i].city_id){
                return $scope.cities[i].province_id;
            }
        }
    };
    $scope.user_info.province_id=get_province_id($scope.user_info.city_id);

    var get_second_menu_id=function(third_id){
        var temp=Math.floor(third_id/1000);
        return temp*1000;
    };

    var get_first_menu_id=function(second_id){
        var temp=Math.floor(second_id/100000);
        return temp*100000;
    };
    $scope.second_menu=get_second_menu_id($scope.user_info.c_id);
    $scope.first_menu=get_first_menu_id($scope.second_menu);

    $scope.get_first_menu= function (e) {
        var ret= e.c_id%100000;
        if(ret===0){
            return true;
        }else{
            return false;
        }
    };
    $scope.get_second_menu=function(e){
        var t=e.c_id-$scope.first_menu;
        var mod=t%1000;
        if(t<10000&&t>0&&mod===0){
            return true;
        }else{
            return false;
        }
    };
    $scope.get_third_menu=function(e){
        var t=e.c_id-$scope.second_menu;
        if(t<100&&t>0){
            return true;
        }else{
            return false;
        }
    };


}]);


microresume_index.controller('resume_manage',['$scope',function($scope){
    $scope.data=[
        {
            r_id:1000,
            r_time:new Date("2008-8-7"),
            u_id:1,
            r_name:"给腾讯后台的简历",
            r_note:"重点强调了XXX项目的经验，待XXX项目完成后需要添加XX的项目经验，若发简历时优先选择这个简历。",
            r_state:'1'
        },
        {
            r_id:10001,
            r_time:new Date("2008-8-6"),
            u_id:1,
            r_name:"给百度前台的简历",
            r_note:"重点强调了XXX项目的经验，待XXX项目完成后需要添加XX的项目经验，若发简历时优先选择这个简历。",
            r_state:'1'
        },
        {
            r_id:10002,
            r_time:new Date("2008-8-4"),
            u_id:1,
            r_name:"给网易后台的简历",
            r_note:"重点强调了XXX项目的经验，待XXX项目完成后需要添加XX的项目经验，若发简历时优先选择这个简历。",
            r_state:'1'
        },
        {
            r_id:10003,
            r_time:new Date("2008-8-5"),
            u_id:1,
            r_name:"给阿里巴巴后台的简历",
            r_note:"重点强调了XXX项目的经验，待XXX项目完成后需要添加XX的项目经验，若发简历时优先选择这个简历。",
            r_state:'1'
        },{
            r_id:10004,
            r_time:new Date("2008-8-8"),
            u_id:1,
            r_name:"给阿里后台的简历",
            r_note:"重点强调了XXX项目的经验，待XXX项目完成后需要添加XX的项目经验，若发简历时优先选择这个简历。",
            r_state:'2'
        },
        {
            r_id:1005,
            r_time:new Date("2008-8-8"),
            u_id:1,
            r_name:"给百度后台的简历",
            r_note:"重点强调了XXX项目的经验，待XXX项目完成后需要添加XX的项目经验，若发简历时优先选择这个简历。",
            r_state:'2'
        }
    ];
    $scope.remove_resume=function(id){
        //console.log(id);
        if(confirm("您确定删除这份简历吗")){
            for(var i=0;i<$scope.data.length;i++){
                if($scope.data[i].r_id===id){
                    $scope.data.splice(i,1);
                }
            }
            alert("在服务器中删除！");
        }
    };
    $scope.edit_resume=function(id){
        console.log(id);
    };
    $scope.publish_resume=function(id,event){
        console.log(id);
    };
}]);

microresume_index.controller('resume_edit',['$scope',function($scope){

    $scope.edit_user_resume_submit= function () {
        console.log($scope.resume);
    };
    $scope.resume={};
    $scope.resume={
        r_id:10002,
        u_id:10001,
        r_time:new Date("2007-11-01 12:20:30"),
        r_name:"给腾讯后台的简历",
        r_note:"重点强调了XXX项目的经验，待XXX项目完成后需要添加XX的项目经验",
        r_state:'2',
        r_intro:"我是一个认真负责乐观向上积极工作的人",
        r_job_state:'2',
        r_min_expected_salary:5000,
        r_max_expected_salary:8000,
        r_advanture:"精通c++,java",
        r_pic:"img/head_img.jpg",
        graduate:[
            {
                g_id:2001,
                g_name:"广东梅县东山中学",
                g_start:new Date("2010-9-01"),
                g_stop:new Date("2013-6-9"),
                g_note:"担任学生主席，班长"
            },
            {
                g_id:2002,
                g_name:"华南农业大学",
                g_start:new Date("2013-9-01"),
                g_stop:new Date("2017-6-9"),
                g_note:"担任学生主席，班长"
            }
        ],
        experience:[
            {
                exp_id:3001,
                exp_start:new Date("2011-9-01"),
                exp_stop:new Date("2012-9-01"),
                exp_enterprise_name:"腾讯计算机网络公司",
                exp_job:"开发人员",
                exp_note:"参与完成微信摇一摇模块开发"
            },
            {
                exp_id:3002,
                exp_start:new Date("2012-9-01"),
                exp_stop:new Date("2013-9-01"),
                exp_enterprise_name:"阿里巴巴计算机网络公司",
                exp_job:"项目经理",
                exp_note:"参与完成微信摇一摇模块开发"
            }
        ]
    };
    var JSONLength=function JSONLength(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    graduate_rownumber=JSONLength($scope.resume.graduate);
    experience_rownumber=JSONLength($scope.resume.experience);
    if(!graduate_rownumber>0){
        $scope.resume.graduate=[{}];
    }
    if(!experience_rownumber>0){
        $scope.resume.experience=[{}];
    }

    $scope.add_graduate=function(){
        window.event? window.event.returnValue = false : e.preventDefault();
        graduate_rownumber++;
        $scope.resume.graduate.push({});
    };
    $scope.delete_graduate=function(id){
        window.event? window.event.returnValue = false : e.preventDefault();
        graduate_rownumber--;
        //console.log(id);
        $scope.resume.graduate.splice(id,1);
    };
    $scope.add_experience=function(){
        window.event? window.event.returnValue = false : e.preventDefault();
        experience_rownumber++;
        $scope.resume.experience.push({});
    };
    $scope.delete_experience=function(id){
        window.event? window.event.returnValue = false : e.preventDefault();
        experience_rownumber--;
        //console.log(id);
        $scope.resume.experience.splice(id,1);
    };
    $scope.publish_resume=function(){
        console.log("发布");
        if($scope.resume.r_id==''||$scope.resume.r_id==null){
            console.log("新增");
        }else{
            console.log("修改");
        }
    };
    $scope.save_resume=function(){
        console.log("保存");
        if($scope.resume.r_id==''||$scope.resume.r_id==null){
            console.log("新增");
        }else{
            console.log("修改");
        }

    };
}]);

microresume_index.controller('resume_info_detail',['$scope',function($scope){
    $scope.data={
        r_id:10002,
        u_id:10001,
        r_time:new Date("2007-11-01 12:20:30"),
        r_name:"给腾讯后台的简历",
        r_note:"重点强调了XXX项目的经验，待XXX项目完成后需要添加XX的项目经验",
        r_state:'2',
        r_intro:"我是一个认真负责乐观向上积极工作的人",
        r_job_state:'2',
        r_min_expected_salary:5000,
        r_max_expected_salary:8000,
        r_advanture:"精通c++,java",
        r_pic:"img/head_img.jpg",
        graduate:[
            {
                g_id:2001,
                g_name:"广东梅县东山中学",
                g_start:new Date("2010-9-01"),
                g_stop:new Date("2013-6-9"),
                g_note:"担任学生主席，班长"
            },
            {
                g_id:2002,
                g_name:"华南农业大学",
                g_start:new Date("2013-9-01"),
                g_stop:new Date("2017-6-9"),
                g_note:"担任学生主席，班长"
            }
        ],
        experience:[
            {
                exp_id:3001,
                exp_start:new Date("2011-9-01"),
                exp_stop:new Date("2012-9-01"),
                exp_enterprise_name:"腾讯计算机网络公司",
                exp_job:"开发人员",
                exp_note:"参与完成微信摇一摇模块开发"
            },
            {
                exp_id:3002,
                exp_start:new Date("2012-9-01"),
                exp_stop:new Date("2013-9-01"),
                exp_enterprise_name:"阿里巴巴计算机网络公司",
                exp_job:"项目经理",
                exp_note:"参与完成微信摇一摇模块开发"
            }
        ]
    };
}]);


microresume_index.controller('job_collection',['$scope',function($scope){
    $scope.title="jc_time";
    $scope.desc=0;
    var education=["初中以下","高中以下","专科","本科","研究生"];
    var property=["国营","私营","混合所有制"];
    var size=["10人以下","10~50人","50~100人","100~500人","500~1000人","1000~5000人","5000人以上"];
    $scope.get_education=function(type){
        switch(type){
            case '1':return education[0];break;
            case '2':return education[1];break;
            case '3':return education[2];break;
            case '4':return education[3];break;
            case '5':return education[4];break;
            default :return education[0];
        }
    };

    $scope.get_size=function(type){
        return size[type-1];
    };

    $scope.get_property=function(type){
        return property[type-1];
    };

    $scope.data=[
        {
            j_id:1001,
            e_id:1001,
            ei_pic:"img/logo2.jpg",
            ei_link:"#",
            ei_name:"阿里巴巴计算机系统有限公司",
            city_id:1001,
            city_name:"广州",
            c_id:1001,
            ei_property:'3',
            ei_size:'7',
            c_name:"JAVA后台",
            j_name:"JAVA高级工程师",
            j_min_salary:"5000",
            j_max_salary:"8000",
            j_education:"2",
            j_experience:"会使用SSM框架",
            j_summary:"提供实战学习平台，接触五百强企业项目",
            j_publish_time:new Date("2016-6-7"),
            j_number:"3",
            ei_linkman_name:"李经理",
            ei_linkman_phone:"188-1235-1231",
            ei_linkman_pic:"img/head_img.jpg",
            jc_time:new Date("2016-6-9")
        },
        {
            j_id:1001,
            e_id:1001,
            ei_pic:"img/logo2.jpg",
            ei_link:"#",
            ei_name:"腾讯计算机系统有限公司",
            city_id:1001,
            city_name:"广州",
            c_id:1001,
            ei_property:'3',
            ei_size:'7',
            c_name:"JAVA后台",
            j_name:"JAVA高级工程师",
            j_min_salary:"5000",
            j_max_salary:"8000",
            j_education:"2",
            j_experience:"会使用SSM框架",
            j_summary:"提供实战学习平台，接触五百强企业项目",
            j_publish_time:new Date("2016-6-8"),
            j_number:"3",
            ei_linkman_name:"李经理",
            ei_linkman_phone:"188-1235-1231",
            ei_linkman_pic:"img/head_img.jpg",
            jc_time:new Date("2016-6-8")
        },
        {
            j_id:1001,
            e_id:1001,
            ei_pic:"img/logo2.jpg",
            ei_link:"#",
            ei_name:"腾讯计算机系统有限公司",
            city_id:1001,
            city_name:"广州",
            c_id:1001,
            ei_property:'3',
            ei_size:'7',
            c_name:"JAVA后台",
            j_name:"JAVA高级工程师",
            j_min_salary:"5000",
            j_max_salary:"8000",
            j_education:"2",
            j_experience:"会使用SSM框架",
            j_summary:"提供实战学习平台，接触五百强企业项目",
            j_publish_time:new Date("2016-7-7"),
            j_number:"3",
            ei_linkman_name:"李经理",
            ei_linkman_phone:"188-1235-1231",
            ei_linkman_pic:"img/head_img.jpg",
            jc_time:new Date("2016-8-8")
        },
        {
            j_id:1001,
            e_id:1001,
            ei_pic:"img/logo2.jpg",
            ei_link:"#",
            ei_name:"腾讯计算机系统有限公司",
            city_id:1001,
            city_name:"广州",
            c_id:1001,
            ei_property:'3',
            ei_size:'7',
            c_name:"JAVA后台",
            j_name:"JAVA高级工程师",
            j_min_salary:"5000",
            j_max_salary:"8000",
            j_education:"2",
            j_experience:"会使用SSM框架",
            j_summary:"提供实战学习平台，接触五百强企业项目",
            j_publish_time:new Date("2016-9-7"),
            j_number:"3",
            ei_linkman_name:"李经理",
            ei_linkman_phone:"188-1235-1231",
            ei_linkman_pic:"img/head_img.jpg",
            jc_time:new Date("2016-9-7")
        },
        {
            j_id:1001,
            e_id:1001,
            ei_pic:"img/logo2.jpg",
            ei_link:"#",
            ei_name:"腾讯计算机系统有限公司",
            city_id:1001,
            city_name:"广州",
            c_id:1001,
            ei_property:'3',
            ei_size:'7',
            c_name:"JAVA后台",
            j_name:"JAVA高级工程师",
            j_min_salary:"5000",
            j_max_salary:"8000",
            j_education:"2",
            j_experience:"会使用SSM框架",
            j_summary:"提供实战学习平台，接触五百强企业项目",
            j_publish_time:new Date("2016-6-7"),
            j_number:"3",
            ei_linkman_name:"李经理",
            ei_linkman_phone:"188-1235-1231",
            ei_linkman_pic:"img/head_img.jpg",
            jc_time:new Date("2016-12-8")
        }
    ];

}]);

microresume_index.controller('feedback',['$scope',function($scope){
    $scope.isBtnActive=function(val){
        if(val===true){
            document.getElementById("check_time_btn").setAttribute("disabled","true");
        }else{
            document.getElementById("check_time_btn").removeAttribute("disabled");
        }
    };
    $scope.title="d_time";
    $scope.desc=true;
    $scope.data=[
        {
            e_id:10000,
            e_name:"深圳腾讯计算机网络公司",
            j_id:20001,
            j_name:"JAVA高级工程师",
            r_id:30001,
            r_name:"给腾讯后台的简历",
            d_check:"2",
            d_remark:"欢迎于10月1日来我公司面试",
            d_check_time:new Date("2016-7-22"),
            d_time:new Date("2016-7-21")
        },
        {
            e_id:10000,
            e_name:"深圳京东计算机网络公司",
            j_id:20001,
            j_name:"JAVA高级工程师",
            r_id:30001,
            r_name:"给腾讯后台的简历",
            d_check:"1",
            d_remark:"欢迎于10月1日来我公司面试",
            d_check_time:new Date("2016-7-22"),
            d_time:new Date("2016-7-21")
        },
        {
            e_id:10000,
            e_name:"深圳阿里巴巴计算机网络公司",
            j_id:20001,
            j_name:"JAVA高级工程师",
            r_id:30001,
            r_name:"给腾讯后台的简历",
            d_check:"2",
            d_remark:"欢迎于10月1日来我公司面试",
            d_check_time:new Date("2016-8-22"),
            d_time:new Date("2016-7-21")
        },
        {
            e_id:10000,
            e_name:"深圳腾讯计算机网络公司",
            j_id:20001,
            j_name:"JAVA高级工程师",
            r_id:30001,
            r_name:"给腾讯后台的简历",
            d_check:"3",
            d_remark:"经验太少，欢迎下次报名",
            d_check_time:new Date("2016-5-22"),
            d_time:new Date("2016-1-21")
        },
        {
            e_id:10000,
            e_name:"广州网易计算机网络公司",
            j_id:20001,
            j_name:"JAVA高级工程师",
            r_id:30001,
            r_name:"给腾讯后台的简历",
            d_check:"1",
            d_remark:"经验太少，欢迎下次报名",
            d_check_time:new Date("2016-8-22"),
            d_time:new Date("2016-2-21")
        },
        {
            e_id:10000,
            e_name:"深圳百度计算机网络公司",
            j_id:20001,
            j_name:"JAVA高级工程师",
            r_id:30001,
            r_name:"给腾讯后台的简历",
            d_check:"3",
            d_remark:"经验太少，欢迎下次报名",
            d_check_time:new Date("2016-7-22"),
            d_time:new Date("2016-7-21")
        },
        {
            e_id:10000,
            e_name:"广州聚美优品计算机网络公司",
            j_id:20001,
            j_name:"JAVA高级工程师",
            r_id:30001,
            r_name:"给腾讯后台的简历",
            d_check:"2",
            d_remark:"欢迎于10月1日来我公司面试",
            d_check_time:new Date("2015-7-22"),
            d_time:new Date("2015-7-21")
        }

    ];
}]);

microresume_index.controller('notice',['$scope',function($scope){
    $scope.data=[
        {
            n_id:"",
            u_id:"",
            n_time:"2016-7-22",
            n_title:"您有一份来自腾讯的面试通知",
            n_detail:"您的面试已通过，欢迎10月1日来腾讯公司面试",
            n_read:"1"
        },
        {
            n_id:"",
            u_id:"",
            n_time:"2016-7-22",
            n_title:"您有一份来自百度的面试通知",
            n_detail:"您的面试已通过，欢迎10月1日来百度公司面试",
            n_read:"1"
        },
        {
            n_id:"",
            u_id:"",
            n_time:"2016-7-22",
            n_title:"您有一份来自阿里的面试通知",
            n_detail:"您的面试已通过，欢迎10月1日来阿里公司面试",
            n_read:"1"
        },
        {
            n_id:"",
            u_id:"",
            n_time:"2016-7-22",
            n_title:"您有一份来自google的面试通知",
            n_detail:"您的面试已通过，欢迎10月1日来google公司面试",
            n_read:"1"
        },
        {
            n_id:"",
            u_id:"",
            n_time:"2016-7-22",
            n_title:"您有一份来自微软的面试通知",
            n_detail:"您的面试已通过，欢迎10月1日来微软公司面试",
            n_read:"2"
        },
        {
            n_id:"",
            u_id:"",
            n_time:"2016-7-22",
            n_title:"您有一份来自东软的面试通知",
            n_detail:"您的面试已通过，欢迎10月1日来东软公司面试",
            n_read:"2"
        },
        {
            n_id:"",
            u_id:"",
            n_time:"2016-7-22",
            n_title:"您有一份来自中软的面试通知",
            n_detail:"您的面试已通过，欢迎10月1日来中软公司面试",
            n_read:"2"
        }
    ];
}]);

microresume_index.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',{
            controller:'user_info_detail',
            templateUrl:"template/user-info-detail.html"
        })
        .when('/user-info-edit',{
            controller:'user_info_edit',
            templateUrl:"template/user-info-edit.html"
        })
        .when('/resume-manage',{
            controller:'resume_manage',
            templateUrl:"template/resume-manage.html"
        })
        .when('/resume-edit',{
            controller:'resume_edit',
            templateUrl:"template/resume-edit.html"
        })
        .when('/resume-info-detail',{
            controller:'resume_info_detail',
            templateUrl:"template/resume-info-detail.html"
        })
        .when('/job-collection',{
            controller:'job_collection',
            templateUrl:"template/job-collection.html"
        })
        .when('/feedback',{
            controller:'feedback',
            templateUrl:"template/feedback.html"
        })
        .when('/notice',{
            controller:'notice',
            templateUrl:"template/notice.html"
        })
        .otherwise({
            redirectTo:'/'
        });

}]);