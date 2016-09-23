<template>
    <div class="content">
        
        <div id="pad-wrapper" class="form-page">
            <div class="row form-wrapper">
                <!-- left column -->
                <div class="col-md-8 column">
                    <form>
                        <div class="field-box">
                            <label>Normal input:</label>
                            <div class="col-md-7">
                                <input class="form-control" type="text" />
                            </div>                            
                        </div>
                        <div class="field-box">
                            <label>Inline input:</label>
                            <div class="col-md-7">
                                <input class="form-control inline-input" placeholder=".inline-input" type="text">
                            </div>
                        </div>                            
                        <div class="field-box">
                            <label>Inline Password:</label>
                            <div class="col-md-7">
                                <input class="form-control inline-input" type="password" value="blablabla" />
                            </div>
                        </div>
                        <div class="field-box">
                            <label>Read only:</label>
                            <div class="col-md-7">
                                <input class="form-control inline-input" type="text" readonly="readonly" value="read only input">
                            </div>
                        </div>
                        <div class="field-box">
                            <label>With tooltip:</label>
                            <div class="col-md-7">
                                <input class="form-control inline-input" data-toggle="tooltip" data-trigger="focus" title="Please insert a valid email address" data-placement="top" type="text" />
                            </div>
                        </div>
                        <div class="field-box">
                            <label>Predefined value:</label>
                            <div class="col-md-7">
                                <div class="predefined">
                                    <span class="value">http://</span>
                                    <input class="form-control inline-input" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="field-box">
                            <label>With max length:</label>
                            <div class="col-md-7">
                                <input class="form-control inline-input" type="text" placeholder="max 20 characters here" maxlength="20" />
                            </div>
                        </div>                            
                        <div class="field-box">
                            <label>Textarea:</label>
                            <div class="col-md-7">
                                <textarea class="form-control" rows="4"></textarea>
                            </div>
                        </div>
                        <div class="field-box">
                            <label>Checkboxes:</label>
                            <label class="checkbox-inline">
                              <input type="checkbox" id="inlineCheckbox1" value="option1"> Option 1
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" id="inlineCheckbox2" value="option1"> Option 2
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" id="inlineCheckbox3" value="option1"> Option 3
                            </label>
                        </div>
                        <div class="field-box">
                            <label>Radiobuttons:</label>
                            <div class="col-md-8">
                                <label class="radio">
                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                    Option one is this and that—be sure to include why it's great
                                </label>
                                <label class="radio">
                                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                    Option two can be something else and selecting it will deselect option one
                                </label>
                            </div>                                
                        </div>
                    </form>
                </div>

                <!-- right column -->
                <div class="col-md-4 column pull-right">
                    <form>
                        <div class="field-box">
                            <label>Select:</label>
                            <div class="ui-select">
                                <select>
                                    <option selected>Dropdown</option>
                                    <option>Custom selects</option>
                                    <option>Pure css styles</option>
                                </select>
                            </div>
                        </div>
                        <div class="field-box">
                            <label>Select2 plugin styled:</label>
                            <select style="width:250px" class="select2">
                                <option></option>
                                <option value="AK">Alaska</option>
                                <option value="HI">Hawaii</option>
                                <option value="CA">California</option>
                                <option value="NV">Nevada</option>
                                <option value="OR">Oregon</option>
                                <option value="WA">Washington</option>
                                <option value="AZ">Arizona</option>
                                <option value="CO">Colorado</option>
                                <option value="ID">Idaho</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NM">New Mexico</option>
                                <option value="ND">North Dakota</option>
                                <option value="UT">Utah</option>
                                <option value="WY">Wyoming</option>
                                <option value="AL">Alabama</option>
                                <option value="AR">Arkansas</option>
                                <option value="IL">Illinois</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="OK">Oklahoma</option>
                                <option value="SD">South Dakota</option>
                                <option value="TX">Texas</option>
                                <option value="TN">Tennessee</option>
                                <option value="WI">Wisconsin</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="IN">Indiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="OH">Ohio</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WV">West Virginia</option>
                            </select>
                        </div>
                        <div class="field-box">
                            <label>Select2 multiselect:</label>
                            <select style="width:250px" multiple class="select2">
                                <option></option>
                                <option value="AK">Alaska</option>
                                <option value="HI" selected>Hawaii</option>
                                <option value="CA">California</option>
                                <option value="NV">Nevada</option>
                                <option value="OR">Oregon</option>
                                <option value="WA">Washington</option>
                                <option value="AZ">Arizona</option>
                                <option value="CO">Colorado</option>
                                <option value="ID">Idaho</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NM">New Mexico</option>
                                <option value="ND">North Dakota</option>
                                <option value="UT">Utah</option>
                                <option value="WY">Wyoming</option>
                                <option value="AL">Alabama</option>
                                <option value="AR">Arkansas</option>
                                <option value="IL">Illinois</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="OK">Oklahoma</option>
                                <option value="SD">South Dakota</option>
                                <option value="TX">Texas</option>
                                <option value="TN">Tennessee</option>
                                <option value="WI">Wisconsin</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="IN">Indiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="OH">Ohio</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WV">West Virginia</option>
                            </select>
                        </div>
                        <div class="field-box">
                            <label>Input prepend & append:</label>
                            <div class="input-group">
                                <span class="input-group-addon">@</span>
                                <input type="text" class="form-control" />
                            </div>                            
                            <div class="input-group">
                                <input type="text" class="form-control" />
                                <span class="input-group-addon">.00</span>
                            </div>
                        </div>
                        <div class="field-box">
                            <label>Datepicker:</label>
                            <input type="text" value="03/29/2013" class="form-control input-datepicker" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        ready () {
            $(function () {

                // add uniform plugin styles to html elements
                $("input:checkbox, input:radio").uniform();

                // select2 plugin for select elements
                $(".select2").select2({
                    placeholder: "Select a State"
                });

                // datepicker plugin
                $('.input-datepicker').datepicker().on('changeDate', function (ev) {
                    $(this).datepicker('hide');
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
    .form-page .form-wrapper {
        margin-bottom: 40px;
    }
    .form-page .form-wrapper .field-box {
        margin-bottom: 30px;
        margin-left: 0;
        float: left;
        width: 100%;
    }
    .form-page .form-wrapper label {
        display: inline-block;
        float: left;
        font-weight: 600;
        cursor: auto;
        font-size: 12px;
        width: 140px;
        text-align: left;
    }
    .form-page .form-wrapper input:-moz-placeholder {
        font-style: italic;
    }
    .form-page .form-wrapper input:-ms-input-placeholder {
        font-style: italic;
    }
    .form-page .form-wrapper input::-webkit-input-placeholder {
        font-style: italic;
    }
    .form-page .form-wrapper .predefined {
        position: relative;
    }
    .form-page .form-wrapper .predefined input {
        padding-left: 40px;
    }
    .form-page .form-wrapper .predefined .value {
        position: absolute;
        top: 6px;
    }
    .form-page .form-wrapper label.checkbox {
        cursor: pointer;
        color: #555;
    }
    .form-page .form-wrapper label.radio {
        position: relative;
        left: -20px;
        width: 100%;
        cursor: pointer;
        color: #555;
    }
    .form-page .form-wrapper label.checkbox,
    .form-page .form-wrapper label.radio {
        font-weight: lighter;
    }
    .form-page .form-wrapper label.checkbox input[type="checkbox"],
    .form-page .form-wrapper label.checkbox input[type="radio"],
    .form-page .form-wrapper label.radio input[type="checkbox"],
    .form-page .form-wrapper label.radio input[type="radio"] {
        font-size: large;
        margin-left: 0px;
    }
    .form-page .form-wrapper .wysi-column {
        float: left;
        width: 75%;
    }
    .form-page .form-wrapper .column.pull-right label {
        display: block;
        width: 100%;
    }
    .form-page .form-wrapper .column.pull-right .ui-select {
        width: 250px;
    }
    .form-page .form-wrapper .column.pull-right .input-group {
        margin-bottom: 10px;
        width: 250px;
    }
    .form-page .form-wrapper .column.pull-right .input-datepicker {
        width: 250px;
    }
    .form-page .form-wrapper .select2-container {
        margin-left: 0px;
    }

    /*Responsive*/
    @media (max-width: 767px) {
        .form-page .form-wrapper label.radio {
            left: 0px;
        }
    }
</style>