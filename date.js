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
    })
