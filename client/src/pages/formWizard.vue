<template>
    <div class="content">

        <div id="pad-wrapper">
            <div class="row">
                <div class="col-md-12 col-xs-12">
                    <div id="fuelux-wizard" class="wizard row">
                        <ul class="wizard-steps">
                            <li data-target="#step1" class="active">
                                <span class="step">1</span>
                                <span class="title">General <br> information</span>
                            </li>
                            <li data-target="#step2">
                                <span class="step">2</span>
                                <span class="title">Address <br> information</span>
                            </li>
                            <li data-target="#step3">
                                <span class="step">3</span>
                                <span class="title">User <br> settings</span>
                            </li>
                            <li data-target="#step4">
                                <span class="step">4</span>
                                <span class="title">Payment <br> info</span>
                            </li>
                        </ul>                            
                    </div>
                    <div class="step-content">
                        <div class="step-pane active" id="step1">
                            <div class="row form-wrapper">
                                <div class="col-md-8">
                                    <form>
                                        <div class="field-box">
                                            <label>Name:</label>
                                            <input class="form-control" type="text" />
                                        </div>
                                        <div class="field-box error">
                                            <label>Company:</label>
                                            <input class="form-control" type="text" />
                                            <span class="alert-msg"><i class="icon-remove-sign"></i> Please enter your company</span>
                                        </div>
                                        <div class="field-box">
                                            <label>Email:</label>
                                            <input class="form-control" type="text" />
                                        </div>
                                        <div class="field-box success">
                                            <label>Username:</label>
                                            <input class="form-control" type="text" />
                                            <span class="alert-msg"><i class="icon-ok-sign"></i> Username available</span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="step-pane" id="step2">
                            <div class="row form-wrapper">
                                <div class="col-md-8">
                                    <form>
                                        <div class="field-box">
                                            <label>Address:</label>
                                            <input class="form-control" type="text" />
                                        </div>
                                        <div class="field-box">
                                            <label>City:</label>
                                            <input class="form-control" type="text" />
                                        </div>
                                        <div class="field-box">
                                            <label>Postal/ZIP code:</label>
                                            <input class="form-control" type="text" />
                                        </div>
                                        <div class="field-box">
                                            <label>Country:</label>
                                            <input class="form-control" type="text" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="step-pane" id="step3">
                            <div class="row form-wrapper">
                                <div class="col-md-8">
                                    <form>
                                        <div class="field-box">
                                            <label>Username:</label>
                                            <input class="form-control" type="text" />
                                        </div>
                                        <div class="field-box">
                                            <label>Photo:</label>
                                            <input type="file" />
                                        </div>
                                        <div class="field-box">
                                            <label>App name:</label>
                                            <input class="form-control" type="text" />
                                        </div>
                                        <div class="field-box">
                                            <label>Time zone:</label>
                                            <select>
                                                <option value="Hawaii">(GMT-10:00) Hawaii</option>
                                                <option value="Alaska">(GMT-09:00) Alaska</option>
                                                <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                                                <option value="Arizona">(GMT-07:00) Arizona</option>
                                                <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                                                <option value="Central Time (US &amp; Canada)">(GMT-06:00) Central Time (US &amp; Canada)</option>
                                                <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                                                <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option><option value="" disabled="disabled">-------------</option>
                                                <option value="American Samoa">(GMT-11:00) American Samoa</option>
                                                <option value="International Date Line West">(GMT-11:00) International Date Line West</option>
                                                <option value="Midway Island">(GMT-11:00) Midway Island</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="step-pane" id="step4">
                            <div class="row form-wrapper payment-info">
                                <div class="col-md-8">
                                    <form>
                                        <div class="field-box">
                                            <label>Subscription Plan:</label>
                                            <select id="plan">
                                                <option value="66">Basic - $2.99/month (USD)</option>
                                                <option value="67">Pro - $9.99/month (USD)</option>
                                                <option value="68">Premium - $49.99/month (USD)</option>
                                            </select>
                                        </div>
                                        <div class="field-box">
                                            <label>Credit Card Number:</label>
                                            <input class="form-control" type="text" />
                                        </div>
                                        <div class="field-box">
                                            <label>Expiration:</label>
                                            <input class="form-control" style="width:60px;display:inline" placeholder="MM" type="text" /> 
                                            &nbsp; / &nbsp;
                                            <input class="form-control" style="width:85px;display:inline" placeholder="YYYY" type="text" />
                                        </div>
                                        <div class="field-box">
                                            <label>Card CVC Number:</label>
                                            <input class="form-control" type="text" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wizard-actions">
                        <button type="button" disabled class="btn-glow primary btn-prev"> 
                            <i class="icon-chevron-left"></i> Prev
                        </button>
                        <button type="button" class="btn-glow primary btn-next" data-last="Finish">
                            Next <i class="icon-chevron-right"></i>
                        </button>
                        <button type="button" class="btn-glow success btn-finish">
                            Setup your account!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        ready () {
            $(function () {
                var $wizard = $('#fuelux-wizard'),
                        $btnPrev = $('.wizard-actions .btn-prev'),
                        $btnNext = $('.wizard-actions .btn-next'),
                        $btnFinish = $(".wizard-actions .btn-finish");

                $wizard.wizard().on('finished', function(e) {
                    // wizard complete code
                }).on("changed", function(e) {
                    var step = $wizard.wizard("selectedItem");
                    // reset states
                    $btnNext.removeAttr("disabled");
                    $btnPrev.removeAttr("disabled");
                    $btnNext.show();
                    $btnFinish.hide();

                    if (step.step === 1) {
                        $btnPrev.attr("disabled", "disabled");
                    } else if (step.step === 4) {
                        $btnNext.hide();
                        $btnFinish.show();
                    }
                });

                $btnPrev.on('click', function() {
                    $wizard.wizard('previous');
                });
                $btnNext.on('click', function() {
                    $wizard.wizard('next');
                });
            });
        },
        data () {
            return {
                title: 'mok管理系统'
            }
        },
        components: {},
        methods: {}
    }
</script>

<style scoped>
    #fuelux-wizard {
        margin-top: 60px;
    }

    .wizard-steps {
        list-style: none;
        display: block;
        width: 100%;
        padding: 0;
        margin: 12px 0 0;
        position: relative;
        left: -40px;
    }
    .wizard-steps li {
        display: block;
        text-align: center;
        float: left;
        min-width: 25%;
        max-width: 25%;
    }
    .wizard-steps li:before {
        display: block;
        content: "";
        width: 100%;
        height: 1px;
        font-size: 0;
        overflow: hidden;
        border-top: 3px solid #e5e8ed;
        position: relative;
        top: 12px;
        z-index: 1;
    }
    .wizard-steps li:first-child:before {
        max-width: 50%;
        left: 50%;
    }
    .wizard-steps li:last-child:before {
        max-width: 50%;
        width: 50%;
    }
    .wizard-steps li.active:before, .wizard-steps li.complete:before, .wizard-steps li.active .step, .wizard-steps li.complete .step {
        border-color: #cbdeee;
        color: #34a0ed;
        background-color: #f2f7fb;
        font-weight: bold;
        box-shadow: inset 0px 0px 1px 2px #fff;
    }
    .wizard-steps li .step {
        text-align: center;
        border: 2px solid #e5e8ed;
        color: #d8dce6;
        font-size: 19px;
        border-radius: 32px;
        line-height: 12px;
        padding: 7px 15px;
        background-color: #FFF;
        position: relative;
        z-index: 2;
        display: inline;
    }
    .wizard-steps li.complete .title, .wizard-steps li.active .title {
        color: #2b3d53;
    }
    .wizard-steps li .title {
        display: block;
        max-width: 100%;
        color: #b1bcc5;
        font-size: 13px;
        z-index: 104;
        text-align: center;
        table-layout: fixed;
        word-wrap: break-word;
        position: relative;
        top: -76px;
        line-height: 15px;
    }

    /* step content */
    .step-content {
        margin-top: 40px;
        margin-left: 60px;
    }
    .step-content .step-pane {
        display: none;
        min-height: 267px;
    }
    .step-content .active {
        display: block;
    }

    /* step forms */
    .form-wrapper .field-box {
        margin-bottom: 25px;
        margin-left: 0;
        float: left;
        width: 100%;
    }
    .form-wrapper .field-box:last-child {
        margin-bottom: 0px;
    }
    .form-wrapper label {
        display: inline-block;
        float: left;
        font-weight: 600;
        cursor: auto;
        font-size: 12px;
        width: 120px;
        text-align: left;
        position: relative;
        top: 2px;
    }
    .form-wrapper input[type="text"] {
        width: 400px;
    }
    .form-wrapper.payment-info label {
        width: 150px;
    }
    .form-wrapper .alert-msg {
        display: block;
        margin-left: 120px;
        margin-bottom: -4px;
        margin-top: 10px;
    }
    .form-wrapper .alert-msg i {
        font-size: 14px;
    }

    /*** Form states ***/
    .form-wrapper .field-box {
        /* error */
        /* success */
    }
    .form-wrapper .field-box.error label,
    .form-wrapper .field-box.error .alert-msg {
        color: #c73939;
    }
    .form-wrapper .field-box.error input {
        border-color: #c73939;
    }
    .form-wrapper .field-box.success label,
    .form-wrapper .field-box.success .alert-msg {
        color: #379e48;
    }
    .form-wrapper .field-box.success input {
        border-color: #379e48;
    }

    /* actions */
    .wizard-actions {
        float: right;
        margin-top: 30px;
        margin-right: 130px;
    }
    .wizard-actions .btn-next {
        margin-left: 15px;
    }
    .wizard-actions .btn-finish {
        display: none;
        margin-left: 15px;
    }

    /* responsive */
    @media (max-width: 979px) {
        .step-content {
            margin-left: 0px;
        }
    }
    @media (max-width: 600px) {
        .wizard-steps {
            left: 0px;
        }

        .form-wrapper input[type="text"] {
            width: 200px;
        }
    }
</style>