/**
 * Created by simin on 2016/8/8.
 */
/**
 * Created by simin on 2016/8/4.
 */
microresume_index.controller('left_side_flypanel_ent',['$scope',function($scope){
    //$scope.name="micro";
}]);

microresume_index.controller('ent_menu',['$scope',function($scope){
    //$scope.name="micro";

}]);

microresume_index.controller('ent_info_detail',['$scope',function($scope){
    var property=["国营","私营","混合所有制"];
    var size=["10人以下","10~50人","50~100人","100~500人","500~1000人","1000~5000人","5000人以上"];
    var status=["认证通过","认证不通过","等待认证","未认证"];
    $scope.get_size=function(type){
        return size[type-1];
    };
    $scope.get_property=function(type){
        return property[type-1];
    };
    $scope.get_status=function(type){
        return status[type-1];
    };

    $scope.data={
        e_id:"0001",
        ei_pic:"img/logo2.jpg",
        ei_name:"腾讯",
        ei_link:"www.tenxun.com",
        city_id:"00001",
        city_name:"深圳",
        ei_address:"深圳XXX路XX号",
        c_id:"0001",
        c_name:"互联网",
        ei_property:'1',
        ei_size:'5',
        ei_linkman_name:"李经理",
        ei_linkman_phone:"18812342342",
        ei_linkman_pic:"img/head_img.jpg",
        ei_email:"tenxun@qq.com",
        ei_intro:"腾讯公司成立自XXX年，获得过XXX奖项，市值XXX亿，是中国最大的互联网公司之一。",
        ei_liscense:"img/license.jpg",
        ei_status:'1'
    };

    $scope.edit=function(){
        window.location.href="ent-info-edit.html";

    };
}]);

microresume_index.controller('ent_info_edit',['$scope',function($scope){
    $scope.ent_info={};
    $scope.ent_info={
        e_id:"0001",
        ei_pic:"img/logo2.jpg",
        ei_name:"腾讯",
        ei_link:"www.tenxun.com",
        city_id:3,
        city_name:"深圳",
        ei_address:"深圳XXX路XX号",
        c_id:202002,
        c_name:"互联网",
        ei_property:'1',
        ei_size:'5',
        ei_linkman_name:"李经理",
        ei_linkman_phone:"18812342342",
        ei_linkman_pic:"img/head_img.jpg",
        ei_email:"tenxun@qq.com",
        ei_intro:"腾讯公司成立自XXX年，获得过XXX奖项，市值XXX亿，是中国最大的互联网公司之一。",
        ei_liscense:"img/license.jpg",
        ei_status:'1'
    };

    $scope.size=[
        {
            id:'1',
            value:"10人以下"
        },
        {
            id:'2',
            value:"10~50人"
        },
        {
            id:'3',
            value:"50~100人"
        },
        {
            id:'4',
            value:"100~500人"
        },
        {
            id:'5',
            value:"500~1000"
        },
        {
            id:'6',
            value:"1000~5000"
        },
        {
            id:'7',
            value:"5000人以上"
        }
    ];

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
    $scope.ent_info.province_id=get_province_id($scope.ent_info.city_id);

    var get_second_menu_id=function(third_id){
        var temp=Math.floor(third_id/1000);
        return temp*1000;
    };

    var get_first_menu_id=function(second_id){
        var temp=Math.floor(second_id/100000);
        return temp*100000;
    };
    $scope.second_menu=get_second_menu_id($scope.ent_info.c_id);
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

    $scope.edit_ent_info_submit=function(form){
        console.log($scope.ent_info);
    };

}]);


microresume_index.controller('job_manage',['$scope',function($scope){
    var education=["初中以下","高中以下","专科","本科","研究生"];
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

    $scope.jobs=[
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
            j_publish_time:new Date("2016-8-7"),
            j_number:"3",
            ei_linkman_name:"李经理",
            ei_linkman_phone:"188-1235-1231",
            ei_linkman_pic:"img/head_img.jpg",
            j_state:'3'
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
            j_name:"C++高级工程师",
            j_min_salary:"5000",
            j_max_salary:"8000",
            j_education:"2",
            j_experience:"会使用SSM框架",
            j_summary:"提供实战学习平台，接触五百强企业项目",
            j_publish_time:new Date("2016-5-7"),
            j_number:"3",
            ei_linkman_name:"李经理",
            ei_linkman_phone:"188-1235-1231",
            ei_linkman_pic:"img/head_img.jpg",
            j_state:'2'
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
            j_name:"PHP高级工程师",
            j_min_salary:"5000",
            j_max_salary:"8000",
            j_education:"2",
            j_experience:"会使用SSM框架",
            j_summary:"提供实战学习平台，接触五百强企业项目",
            j_publish_time:new Date("2016-6-13"),
            j_number:"3",
            ei_linkman_name:"李经理",
            ei_linkman_phone:"188-1235-1231",
            ei_linkman_pic:"img/head_img.jpg",
            j_state:'3'
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
            j_publish_time:new Date("2016-6-21"),
            j_number:"3",
            ei_linkman_name:"李经理",
            ei_linkman_phone:"188-1235-1231",
            ei_linkman_pic:"img/head_img.jpg",
            j_state:'2'
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
            j_publish_time:new Date("2016-8-3"),
            j_number:"3",
            ei_linkman_name:"李经理",
            ei_linkman_phone:"188-1235-1231",
            ei_linkman_pic:"img/head_img.jpg",
            j_state:'1'
        }
    ];

}]);

microresume_index.controller('job_edit',['$scope',function($scope){
    var education=["初中以下","高中以下","专科","本科","研究生"];

    $scope.job_info={};
    $scope.job_info={
        j_id:10001,
        e_id:10001,
        c_id:202002,
        c_name:"广州",
        j_name:"JAVA高级工程师",
        j_min_salary:5000,
        j_max_salary:8000,
        j_education:2,
        j_experience:"从事过微信开发，会使用SSM框架",
        j_summary:"提供实战学习平台，接触五百强企业项目",
        j_number:3,
        j_requirement:"1. 计算机或者相关专业，统招全日制本科及以上学历，3年以上相关工作经验；2.掌握JDK，J2EE的相关知识，精通JAVA、JSP、SERVERLET、struts2、Spring、WebSocket编程，熟悉多线程编程、Quartz，熟练掌握AJAX，Jquery，熟悉Nginx，Tomcat，Amoeba等中间件的使用；3.做事认真负责，积极向上，能熬夜写代码，爱好后台开发",
        j_intro:"1. 参与项目管理和项目开发计划的制定；2. 负责所属模块的需求分析、功能设计、技术实现、调试与维护工作；3. 参与公司产品的架构优化，性能优化并辅助其他模块进行技术实现；4. 协助并完成其他各类技术开发任务；5. 参与开发、设计文档的编写工作；",
        j_address:"广州市天河区岗顶"
    };

    $scope.education=[
        {
            id:1,
            value:"初中以下"
        },
        {
            id:2,
            value:"高中以下"
        },
        {
            id:3,
            value:"专科"
        },
        {
            id:4,
            value:"本科"
        },
        {
            id:5,
            value:"研究生"
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
    var get_second_menu_id=function(third_id){
        var temp=Math.floor(third_id/1000);
        return temp*1000;
    };

    var get_first_menu_id=function(second_id){
        var temp=Math.floor(second_id/100000);
        return temp*100000;
    };
    $scope.second_menu=get_second_menu_id($scope.job_info.c_id);
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

    $scope.edit_job_submit=function(form){
        console.log($scope.job_info);
    };

}]);

microresume_index.controller('job_info_detail',['$scope',function($scope){
    $scope.data={
        j_id:10001,
        e_id:10001,
        c_id:202002,
        c_name:"广州",
        j_name:"JAVA高级工程师",
        j_min_salary:5000,
        j_max_salary:8000,
        j_education:2,
        j_experience:"从事过微信开发，会使用SSM框架",
        j_summary:"提供实战学习平台，接触五百强企业项目",
        j_number:3,
        j_requirement:"1. 计算机或者相关专业，统招全日制本科及以上学历，3年以上相关工作经验；2.掌握JDK，J2EE的相关知识，精通JAVA、JSP、SERVERLET、struts2、Spring、WebSocket编程，熟悉多线程编程、Quartz，熟练掌握AJAX，Jquery，熟悉Nginx，Tomcat，Amoeba等中间件的使用；3.做事认真负责，积极向上，能熬夜写代码，爱好后台开发",
        j_intro:"1. 参与项目管理和项目开发计划的制定；2. 负责所属模块的需求分析、功能设计、技术实现、调试与维护工作；3. 参与公司产品的架构优化，性能优化并辅助其他模块进行技术实现；4. 协助并完成其他各类技术开发任务；5. 参与开发、设计文档的编写工作；",
        j_address:"广州市天河区岗顶"
    };

    var education=["初中以下","高中以下","专科","本科","研究生"];
    $scope.get_education=function(type){
        return education[type-1];
    };
}]);

microresume_index.controller('resume_box',['$scope',function($scope){
    $scope.data=[
        {
            j_name:"java高级工程师",
            j_id:"00001",
            j_receive:"4",
            j_publish_time:new Date("2016-7-12")
        },
        {
            j_name:"C++高级工程师",
            j_id:"00001",
            j_receive:"4",
            j_publish_time:new Date("2016-9-12")
        },
        {
            j_name:".net高级工程师",
            j_id:"00001",
            j_receive:"2",
            j_publish_time:new Date("2016-6-12")
        },
        {
            j_name:"php高级工程师",
            j_id:"00001",
            j_receive:"5",
            j_publish_time:new Date("2015-7-12")
        }
    ];
}]);

microresume_index.controller('view_resumes',['$scope',function($scope){
    $scope.data=[
        {
            d_id:"0001",
            r_id:"0001",
            j_id:"00001",
            d_time:new Date("2016-7-21"),
            d_check:"1",
            d_score:"",
            u_id:"0001",
            r_pic:"img/head_img.jpg",
            ui_real_name:"张三",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。"
        },
        {

            d_id:"0001",
            r_id:"0001",
            j_id:"00001",
            d_time:new Date("2016-7-21"),
            d_check:"1",
            d_score:"",
            u_id:"0001",
            r_pic:"img/head_img.jpg",
            ui_real_name:"孙十",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。"
        },
        {
            d_id:"0001",
            r_id:"0001",
            j_id:"00001",
            d_time:new Date("2016-7-21"),
            d_check:"2",
            d_score:"9",
            u_id:"0001",
            r_pic:"img/head_img.jpg",
            ui_real_name:"李八",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。",
            d_checktime:new Date("2016-7-11"),
            d_checknote:"欢迎加入我们公司，请于10月1日来我公司面试"
        },
        {
            d_id:"0001",
            r_id:"0001",
            j_id:"00001",
            d_time:new Date("2016-7-21"),
            d_check:"2",
            d_score:"8",
            u_id:"0001",
            r_pic:"img/head_img.jpg",
            ui_real_name:"赵七",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。",
            d_checktime:new Date("2016-7-26"),
            d_checknote:"欢迎加入我们公司，请于10月1日来我公司面试"
        },
        {
            d_id:"0001",
            r_id:"0001",
            j_id:"00001",
            d_time:new Date("2016-7-21"),
            d_check:"3",
            d_score:"2",
            u_id:"0001",
            r_pic:"img/head_img.jpg",
            ui_real_name:"周六",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。",
            d_checktime:new Date("2016-9-21"),
            d_checknote:"你的工作经验太少，欢迎下次报名"
        },
        {
            d_id:"0001",
            r_id:"0001",
            j_id:"00001",
            d_time:new Date("2016-7-21"),
            d_check:"3",
            d_score:"3",
            u_id:"0001",
            r_pic:"img/head_img.jpg",
            ui_real_name:"王五",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。",
            d_checktime:new Date("2016-8-21"),
            d_checknote:"你的工作经验太少，欢迎下次报名"
        },
        {
            d_id:"0001",
            r_id:"0001",
            j_id:"00001",
            d_time:new Date("2016-7-21"),
            d_check:"2",
            d_score:"7",
            u_id:"0001",
            r_pic:"img/head_img.jpg",
            ui_real_name:"李四",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。",
            d_checktime:new Date("2016-7-22"),
            d_checknote:"欢迎加入我们公司，请于10月1日来我公司面试"
        }
    ];
    $scope.getSex=function(sex){
        if(sex==='M'){
            return '男';
        }else if(sex==='F'){
            return '女';
        }else{
            return null;
        }
    };
    $scope.getAge= function (birthday) {
        var ret=new Date().getYear()-birthday.getYear();
        return ret;
    };

    $scope.isBtnActive=function(val){
        if(val===true){
            document.getElementById("check_time_btn").setAttribute("disabled","true");
            document.getElementById("score_btn").setAttribute("disabled","true");
        }else{
            document.getElementById("check_time_btn").removeAttribute("disabled");
            document.getElementById("score_btn").removeAttribute("disabled");
        }
    };
    $scope.title="d_time";
    $scope.desc=true;

}]);

microresume_index.controller('resume_collection',['$scope',function($scope){

    $scope.getSex=function(sex){
        if(sex==='M'){
            return '男';
        }else if(sex==='F'){
            return '女';
        }else{
            return null;
        }
    };
    $scope.getAge= function (birthday) {
        var ret=new Date().getYear()-birthday.getYear();
        return ret;
    };

    $scope.data=[
        {
            r_id:1,
            u_id:1,
            rc_id:1001,
            r_pic:"img/head_img.jpg",
            ui_real_name:"李四",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。",
            rc_time:new Date("2016-7-22")
        },
        {
            r_id:1,
            u_id:1,
            rc_id:1001,
            r_pic:"img/head_img.jpg",
            ui_real_name:"李四",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。",
            rc_time:new Date("2016-7-22")
        },
        {
            r_id:1,
            u_id:1,
            rc_id:1001,
            r_pic:"img/head_img.jpg",
            ui_real_name:"李四",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。",
            rc_time:new Date("2016-7-22")
        },
        {
            r_id:1,
            u_id:1,
            rc_id:1001,
            r_pic:"img/head_img.jpg",
            ui_real_name:"李四",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。",
            rc_time:new Date("2016-7-22")
        },
        {
            r_id:1,
            u_id:1,
            rc_id:1001,
            r_pic:"img/head_img.jpg",
            ui_real_name:"李四",
            ui_sex:"M",
            ui_birth_date:new Date("1980-7-7"),
            c_id:"0001",
            c_name:"JAVA开发",
            r_min_expected_salary:"5000",
            r_max_expected_salary:"8000",
            r_intro:"我是一个认真负责有耐心的人，从事过XX的开发，为公司创造市值20亿。",
            rc_time:new Date("2016-7-22")
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
            controller:'ent_info_detail',
            templateUrl:"template/ent-info-detail.html"
        })
        .when('/ent-info-edit',{
            controller:'ent_info_edit',
            templateUrl:"template/ent-info-edit.html"
        })
        .when('/job-manage',{
            controller:'job_manage',
            templateUrl:"template/job-manage.html"
        })
        .when('/job-edit',{
            controller:'job_edit',
            templateUrl:"template/job-edit.html"
        })
        .when('/job-info-detail',{
            controller:'job_info_detail',
            templateUrl:"template/job-info-detail.html"
        })
        .when('/resume-collection',{
            controller:'resume_collection',
            templateUrl:"template/resume-collection.html"
        })
        .when('/resume-box',{
            controller:'resume_box',
            templateUrl:"template/resume-box.html"
        })
        .when('/view/:id',{
            controller:'view_resumes',
            templateUrl:"template/view-resumes.html"
        })
        .when('/notice',{
            controller:'notice',
            templateUrl:"template/notice.html"
        })
        .otherwise({
            redirectTo:'/'
        });

}]);