/**
 * Created by simin on 2016/7/30.
 */
var microresume_index=angular.module("microresume",['ngRoute']);

microresume_index.directive('compare',function(){
    //自定义指令compare，用于比较密码跟确认密码的值
    var o = {};
    o.scope = {
        orgVal : '=compare'
    };
    //A:attribute ,E:element
    o.strict = "AE";
    o.require = 'ngModel';
    o.link = function(sco,ele,attrs,ngModelController){
        //给$validators添加compare指令
        ngModelController.$validators.compare = function(modelVal){
            //modelVal 为确认密码的值
            return modelVal == sco.orgVal;
        };
        sco.$watch('orgVal',function(){
            //监听orgVal，若有改动则进行比较
            ngModelController.$validate();
        });
    };
    return o;
});

microresume_index.controller('register',['$scope',function($scope){
    $scope.verifi_img="img/check_code.jpg";
    $scope.register={};
    $scope.refresh_verifi_img=function(){
        $scope.verifi_img="img/check_code.jpg";
    };
    $scope.reg_form=function(register_form){
        if($scope.register.type==='0'){
            alert("个人注册");
            alert($scope.register.name);
            alert($scope.register.password);



        }else if($scope.register.type==='1'){
            alert("企业注册");
            alert($scope.register.name);
            alert($scope.register.password);
        }
        else{
            alert($scope.register.type);
        }

    };
}]);

microresume_index.controller('login',['$scope',function($scope){
    $scope.user_login={};
    $scope.ent_login={};

    $scope.verifi_img="img/check_code.jpg";
    $scope.refresh_verifi_img=function(){
        $scope.verifi_img="img/check_code.jpg";
    };

    $scope.user_login_submit=function(user_login_form){
        alert("用户登录");
        alert($scope.user_login.username);

    };

    $scope.ent_login_submit=function(ent_login_form){
        alert("企业登录");
    };

}]);

microresume_index.controller('header',['$scope',function($scope){
    $scope.name="";



}]);

microresume_index.controller('search',['$scope',function($scope){
    var strs=window.location.search.substring(1).split('=');
    var type=strs[0];
    console.log(type);
    $scope.ctrlScope = $scope;
    $scope.ctrlScope.search_text=strs[1];
    //isJob=true;
    var isJob;
    if(type==="job"){
        isJob=true;
    }else{
        isJob=false;
    }

    $scope.show=isJob?"职位":"公司";
    $scope.list=isJob?"公司":"职位";

    $scope.exchange=function(){
        isJob=!isJob;
        $scope.show=isJob?"职位":"公司";
        $scope.list=isJob?"公司":"职位";
        //console.log(isJob);
    };
    $scope.search_submit=function(){
        if(isJob){
            //console.log("job");
            //console.log($scope.ctrlScope.search_text);
            window.open("/microresume/search.html?job="+$scope.ctrlScope.search_text);
        }else{
            //console.log("ent");
            //console.log($scope.ctrlScope.search_text);
            window.open("/microresume/search.html?enterprise="+$scope.ctrlScope.search_text);
        }
    };


}]);

microresume_index.controller('footer',['$scope',function($scope){
    //$scope.name="micro";
}]);

microresume_index.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/job-detail/:id',{
            controller:'',
            templateUrl:'',
            publicAccess:true
         })
        .when('/enterprise/:id',{
            controller:'',
            templateUrl:'',
            publicAccess:true
        })
        .otherwise({
            redirectTo:'/'
        });
}]);

microresume_index.controller('job_list',['$scope',function($scope){
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

    $scope.data={
        "recommend_jobs":[
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
                ei_linkman_pic:"img/head_img.jpg"
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
                ei_linkman_pic:"img/head_img.jpg"
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
                ei_linkman_pic:"img/head_img.jpg"
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
                ei_linkman_pic:"img/head_img.jpg"
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
                ei_linkman_pic:"img/head_img.jpg"
            }
        ],
        "new_jobs":[
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
                ei_linkman_pic:"img/head_img.jpg"
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
                ei_linkman_pic:"img/head_img.jpg"
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
                ei_linkman_pic:"img/head_img.jpg"
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
                ei_linkman_pic:"img/head_img.jpg"
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
                ei_linkman_pic:"img/head_img.jpg"
            }
        ]
    };
}]);



microresume_index.controller('right_ad',['$scope',function($scope){
    $scope.data=[
            {
                sa_index:6,
                sa_url:"img/logo2.jpg",
                sa_name:"东软睿道",
                sa_link:"www.baidu.com"
            },
            {
                sa_index:5,
                sa_url:"img/logo2.jpg",
                sa_name:"东软睿道",
                sa_link:"www.baidu.com"
            },
            {
                sa_index:4,
                sa_url:"img/logo2.jpg",
                sa_name:"东软睿道",
                sa_link:"www.baidu.com"
            },
            {
                sa_index:3,
                sa_url:"img/logo2.jpg",
                sa_name:"东软睿道",
                sa_link:"www.baidu.com"
            },
            {
                sa_index:2,
                sa_url:"img/logo2.jpg",
                sa_name:"东软睿道",
                sa_link:"www.baidu.com"
            }
        ];
}]);


$(function() {
    $(window).scroll(function () {
        if(!$('body').hasClass('probably-mobile'))
        {
            if ($(this).scrollTop() > 50) {
                $('a#scroll-top').fadeIn();
            } else {
                $('a#scroll-top').fadeOut();
            }
        }
        else
        {
            $('a#scroll-top').fadeOut();
        }
    });

    $('a#scroll-top').on('click', function(){
        if(!$('body').hasClass('probably-mobile'))
        {
            $('html, body').animate({scrollTop:0}, 'slow' );
            return false;
        }
    });
});
