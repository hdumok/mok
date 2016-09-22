<template>
    <div class="content">
        <div id="main-stats">
            <div class="row stats-row">
                <div class="col-md-3 col-sm-3 stat">
                    <div class="data">
                        <span class="number">2457</span>
                        访问
                    </div>
                    <span class="date">今天</span>
                </div>
                <div class="col-md-3 col-sm-3 stat">
                    <div class="data">
                        <span class="number">3240</span>
                        用户
                    </div>
                    <span class="date">2013年11月</span>
                </div>
                <div class="col-md-3 col-sm-3 stat">
                    <div class="data">
                        <span class="number">322</span>
                        订单
                    </div>
                    <span class="date">本周</span>
                </div>
                <div class="col-md-3 col-sm-3 stat last">
                    <div class="data">
                        <span class="number">$2,340</span>
                        销售金额
                    </div>
                    <span class="date">最近30天</span>
                </div>
            </div>
        </div>

        <div id="pad-wrapper">

            <div class="row chart">
                <div class="col-md-12">
                    <h4 class="clearfix">
                        用户活跃度
                        <div class="btn-group pull-right">
                            <button class="glow left">日</button>
                            <button class="glow right active">月</button>
                        </div>
                    </h4>
                </div>
                <div class="col-md-12">
                    <div id="statsChart"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {};
        },
        ready:function(){
                // jQuery Flot Chart
                var visits = [[1, 50], [2, 40], [3, 45], [4, 23],[5, 55],[6, 65],[7, 61],[8, 70],[9, 65],[10, 75],[11, 57],[12, 59]];
                var visitors = [[1, 25], [2, 50], [3, 23], [4, 48],[5, 38],[6, 40],[7, 47],[8, 55],[9, 43],[10,50],[11,47],[12, 39]];

                var plot = $.plot($("#statsChart"),
                        [ { data: visits, label: "注册人数"},
                            { data: visitors, label: "访问人数" }], {
                            series: {
                                lines: { show: true,
                                    lineWidth: 1,
                                    fill: true,
                                    fillColor: { colors: [ { opacity: 0.1 }, { opacity: 0.13 } ] }
                                },
                                points: { show: true,
                                    lineWidth: 2,
                                    radius: 3
                                },
                                shadowSize: 0,
                                stack: true
                            },
                            grid: { hoverable: true,
                                clickable: true,
                                tickColor: "#f9f9f9",
                                borderWidth: 0
                            },
                            legend: {
                                // show: false
                                labelBoxBorderColor: "#fff"
                            },
                            colors: ["#a7b5c5", "#30a0eb"],
                            xaxis: {
                                ticks: [[1, "一月"], [2, "二月"], [3, "三月"], [4,"四月"], [5,"五月"], [6,"六月"],
                                    [7,"七月"], [8,"八月"], [9,"九月"], [10,"十月"], [11,"十一月"], [12,"十二月"]],
                                font: {
                                    size: 12,
                                    family: "Open Sans, Arial",
                                    variant: "small-caps",
                                    color: "#697695"
                                }
                            },
                            yaxis: {
                                ticks:3,
                                tickDecimals: 0,
                                font: {size:12, color: "#9da3a9"}
                            }
                        });

                function showTooltip(x, y, contents) {
                    $('<div id="tooltip">' + contents + '</div>').css( {
                        position: 'absolute',
                        display: 'none',
                        top: y - 30,
                        left: x - 50,
                        color: "#fff",
                        padding: '2px 5px',
                        'border-radius': '6px',
                        'background-color': '#000',
                        opacity: 0.80
                    }).appendTo("body").fadeIn(200);
                }

                var previousPoint = null;
                $("#statsChart").bind("plothover", function (event, pos, item) {
                    if (item) {
                        if (previousPoint != item.dataIndex) {
                            previousPoint = item.dataIndex;

                            $("#tooltip").remove();
                            var x = item.datapoint[0].toFixed(0),
                                y = item.datapoint[1].toFixed(0);

                            var month = item.series.xaxis.ticks[item.dataIndex].label;

                            showTooltip(item.pageX, item.pageY,
                                     month + '的' + item.series.label+ ": " + y);
                        }
                    }
                    else {
                        $("#tooltip").remove();
                        previousPoint = null;
                    }
                });
        }
    }
</script>
<style scoped>
    /* Main stats up of screen */
    #main-stats {
        background-color: #fdfdfd;
        border-bottom: 1px solid #efeef3;
    }
    #main-stats .stats-row {
        box-shadow: inset -1px 0px 5px 2px #f9f9f9;
        margin: 0;
    }
    #main-stats .stat {
        text-align: right;
        padding: 25px 0px 30px 0px;
        border-right: 1px solid #e8e9ee;
        position: relative;
        box-shadow: 1px 0px 0px 0px white;
    }
    #main-stats .stat.last {
        border-right: 0px;
    }
    #main-stats .stat .data {
        color: #29323a;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 16px;
        padding-right: 50px;
    }
    #main-stats .stat .data .number {
        color: #32a0ee;
        font-size: 25px;
        margin-right: 15px;
    }
    #main-stats .stat .date {
        color: #b4b8bb;
        font-weight: lighter;
        font-family: 'Lato', 'Open Sans';
        font-style: italic;
        font-size: 13px;
        position: absolute;
        right: 50px;
    }

    #statsChart {
        height: 250px;
        margin-top: 35px;
    }

    /* responsive */
    @media (max-width: 768px) {
        #main-stats {
            margin-left: -15px;
            margin-right: -15px;
        }
    }
    @media (max-width: 979px) {
        #main-stats .stat .data {
            padding-right: 17px;
        }

        #main-stats .stat .data .number {
            font-size: 18px;
        }
    }

</style>