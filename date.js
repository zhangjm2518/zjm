<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>arale-validator - Validate with Javascript</title>
<base href="http://docs.spmjs.io/arale-validator/latest/examples/">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="generator" content="nico-spm 0.5.2" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link type="image/x-icon" href="/favicon.ico" rel="icon">
<link rel="stylesheet" href="../static/css/normalize.css" />
<script src="../static/js/sea.js?nowrap"></script>
<script>
seajs.config({
  base: "../"
});
</script>
<!--[if lt IE 9]>
<script src="../static/js/html5shiv.js"></script>
<![endif]-->
</head>
<body class="spmjs">
<script src="../dist/bundle.js?nowrap"></script>
<link charset="utf-8" rel="stylesheet" href="http://assets.alipay.com/al/alice.components.ui-form-1.0-src.css" />
<link charset="utf-8" rel="stylesheet" href="http://assets.alipay.com/al/alice.components.ui-button-orange-1.3-full.css" />
<form id="test-form" class="ui-form">
<div class="ui-form-item">
    <input type="text" name="date1" class="ui-input"/>
</div>
<div class="ui-form-item">
    <input type="text" name="date2" class="ui-input"/>
</div>
<div class="ui-form-item">
    <input type="text" name="date3" class="ui-input"/>
</div>
<div class="ui-form-item">
    <input type="text" name="phone1" class="ui-input"/>
</div>
<div class="ui-form-item">
    <span class="ui-button-morange ui-button"><input class="ui-button-text" value="确定" type="submit"></span>
</div>
</form>
<script>
(function() {
    var Validator = window['arale-validator'];
    var $ = window['jquery'];

    Validator.addRule('datetime',function(options){
        var time1 = options.element.val();
        var time2 = $(options.target).val();
        if(time2){
            return new Date(time1).getTime() > new Date(time2).getTime();
        }else{
            return true
        }
    },'{{display}}')
    var dateRule = Validator.getRule('date');
    var dateTimeRule = dateRule.and('datetime');
    Validator.addRule('dateTimeRule', dateTimeRule, '{{display}}');

    var validator = new Validator({
        element: '#test-form',
        autoSubmit :false,
        onFormValidated: function(err, results, form) {
            console.log(err, results, form);
        },
        failSilently: true
    });



    validator.addItem({
        element: '[name=date1]',
        required: true,
        rule: 'date',
        errormessageRequired: '请填写备注'
    }).addItem({
        element: '[name=date2]',
        required: true,
        rule: 'dateTimeRule{target:"[name=date1]"}',
        errormessageDatetime: '121212'
    }).addItem({
        element: '[name=date3]',
        rule: 'dateTimeRule{target:"[name=date1]"}',
        errormessageDateTimeRule: '121212'
    }).addItem({
        element: '[name=phone1]',
        required: true,
        errormessageRequired: '请填写备注'
    })

    $("[name=phone1]").focus(function(){
        $("#test-form").append('<div class="haha"></div>');

        var hahaoffset = $("[name=phone1]").offset();
        $(".haha").css({
            width:"100px",
            height:"30px",
            background:"#ff0",
            position:"absolute",
            top:hahaoffset.top+30,
            left:hahaoffset.left+200
        })
        $(".haha").mousedown(function(){
            $("[name=phone1]").focus().val(1212)
        })
    })



})();


</script>
</body>
</html>
