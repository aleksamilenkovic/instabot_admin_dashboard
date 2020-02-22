<template>
    <div id="profile stats">
        <div id="chart-container">
            <fusioncharts
                    type="spline"
                    width="51%"
                    height="51%"
                    dataformat="json"
                    dataEmptyMessage="i-https://i.postimg.cc/R0QCk9vV/Rolling-0-9s-99px.gif"
                    :dataEmptyMessageImageScale=39
                    :datasource="tempChartData"
            >
            </fusioncharts>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileStats",
        data(){
            return {// Preparing the chart data
                tempChartData: {
                    chart: {
                        caption: "Naslov",
                        captionFontBold: "0",
                        captionFontColor: "#000000",
                        captionPadding: "30",
                        baseFont: "Roboto",
                        chartTopMargin: "30",
                        showHoverEffect: "1",
                        theme: "fusion",
                        showaxislines: "1",
                        numberSuffix: "°C",
                        anchorBgColor: "#6297d9",
                        paletteColors: "#6297d9",
                        drawCrossLine: "1",
                        plotToolText: "$label<br><hr><b>$dataValue</b>",
                        showAxisLines: "0",
                        showYAxisValues: "0",
                        anchorRadius: "4",
                        divLineAlpha: "0",
                        labelFontSize: "13",
                        labelAlpha: "65",
                        labelFontBold: "3",
                        rotateLabels: "1",
                        slantLabels: "1",
                        canvasPadding: "20"
                    },
                    data: [{label:'fafafaaaa', value:"2"},{label:'eqgqg', value:"5"}],
                }
            }
        },
        props:{

        }
    }
</script>

<style scoped>

</style>