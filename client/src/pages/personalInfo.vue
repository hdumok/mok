<template>
    <!-- main container .wide-content is used for this layout without sidebar :)  -->
    <div class="content wide-content">
        <div class="settings-wrapper" id="pad-wrapper">
            <div class="row">
                <!-- avatar column -->
                <div class="col-md-3 col-md-offset-1 avatar-box">
                    <div class="personal-image">
                        <img src="img/personal-info.png" class="avatar img-circle">
                        <p>Upload a different photo...</p>

                        <input type="file" />
                    </div>
                </div>

                <!-- edit form column -->
                <div class="col-md-7 personal-info">
                    <div class="alert alert-info">
                        <i class="icon-lightbulb"></i>
                        This page shows an example of an alternative layout with the main navbar on the top
                        <br> using <strong>.content.wide-content</strong> for this main container
                    </div>
                    <h5 class="personal-title">Personal info</h5>

                    <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <label class="col-lg-2 control-label">First name:</label>
                            <div class="col-lg-8">
                                <input class="form-control" type="text" value="Alejandra" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-2 control-label">Last name:</label>
                            <div class="col-lg-8">
                                <input class="form-control" type="text" value="Galvan" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-2 control-label">Company:</label>
                            <div class="col-lg-8">
                                <input class="form-control" type="text" value="Design Co." />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-2 control-label">Email:</label>
                            <div class="col-lg-8">
                                <input class="form-control" type="text" value="alejandra@design.com" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-2 control-label">Time Zone:</label>
                            <div class="col-lg-8">
                                <div class="ui-select">
                                    <select id="user_time_zone" name="user[time_zone]">
                                        <option value="Hawaii">(GMT-10:00) Hawaii</option>
                                        <option value="Alaska">(GMT-09:00) Alaska</option>
                                        <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                                        <option value="Arizona">(GMT-07:00) Arizona</option>
                                        <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                                        <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                                        <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                                        <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-2 control-label">Username:</label>
                            <div class="col-lg-8">
                                <input class="form-control" type="text" value="alegalvan" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-2 control-label">Password:</label>
                            <div class="col-lg-8">
                                <input class="form-control" type="password" value="blablablabla" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-2 control-label">Confirm password:</label>
                            <div class="col-lg-8">
                                <input class="form-control" type="password" value="blablablabla" />
                            </div>
                        </div>
                        <div class="actions">
                            <input type="button" class="btn-glow primary" value="Save Changes">
                            <span>OR</span>
                            <input type="reset" value="Cancel" class="reset">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- end main container -->
</template>

<script>
    export default {
        ready () {},
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
    .settings-wrapper .wrapp {
        margin-top: 100px;
    }
    .settings-wrapper .avatar-box img {
        border: 3px solid #c3cddb;
        margin-bottom: 28px;
    }
    .settings-wrapper .avatar-box p {
        font-weight: 700;
        margin-bottom: 12px;
    }
    .settings-wrapper .avatar-box input[type="file"] {
        font-size: 11px;
    }
    .settings-wrapper .personal-info {
        border-left: 1px solid #edeff1;
        box-shadow: inset 3px 0px 4px -1px #fafafa;
    }
    .settings-wrapper .personal-info .alert {
        margin-bottom: 50px;
        display: inline-block;
        font-size: 13px;
    }
    .settings-wrapper .personal-info .alert i {
        float: left;
    }
    .settings-wrapper .personal-info h5.personal-title {
        font-size: 22px;
        margin: 0 0 50px 50px;
        color: #696d73;
        font-style: italic;
    }
    .settings-wrapper .personal-info form {
        margin-left: 50px;
    }
    .settings-wrapper .personal-info label {
        display: inline-block;
        float: left;
        font-weight: 600;
        font-size: 13px;
        cursor: auto;
        width: 20%;
        margin-right: 10px;
        text-align: left;
    }
    .settings-wrapper .personal-info .input[type="text"] {
        font-weight: 600;
    }
    .settings-wrapper .personal-info .ui-select {
        width: 100%;
        margin-bottom: 10px;
    }
    .settings-wrapper .personal-info .actions {
        margin-bottom: 25px;
        margin-top: 30px;
        width: 100%;
        padding-right: 70px;
        float: left;
        text-align: right;
    }
    .settings-wrapper .personal-info .actions span {
        text-transform: uppercase;
        color: #7e91aa;
        font-weight: 600;
        display: inline-block;
        vertical-align: middle;
        margin: 0 2px 0 8px;
    }
    .settings-wrapper .personal-info input.reset {
        color: #7e91aa;
        font-weight: 500;
    }

    /* responsive */
    @media (max-width: 768px) {
        .settings-wrapper #pad-wrapper {
            padding: 0px 20px;
        }
        .settings-wrapper .avatar-box {
            text-align: center;
        }
        .settings-wrapper .personal-info {
            border: 0 none;
            box-shadow: none;
            margin-top: 40px;
        }
        .settings-wrapper .personal-info h5.personal-title {
            margin-left: 0;
        }
        .settings-wrapper .personal-info .ui-select {
            width: 90%;
        }
        .settings-wrapper .personal-info label {
            width: 100%;
        }
        .settings-wrapper .personal-info .actions {
            text-align: center;
        }
        .settings-wrapper .personal-info form {
            margin-left: 0;
            padding: 0px 10px 0px 10px;
        }
    }
    @media (min-width: 768px) and (max-width: 979px) {
        .settings-wrapper .personal-info .ui-select {
            width: 77%;
        }

        .avatar-box {
            text-align: center;
            margin-bottom: 20px;
        }

        .settings-wrapper .personal-info {
            border-left: 0px;
            box-shadow: none;
        }
    }
    @media (min-width: 768px) {
        .settings-wrapper .personal-info .alert {
            margin-left: 50px;
        }
    }
</style>