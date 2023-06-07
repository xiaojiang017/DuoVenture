import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import { Calendar } from 'antd';

export default () => {
  const chartRef = useRef(null); // 用于保存图表实例的引用

  useEffect(() => {
    // 创建图表实例
    const chart = echarts.init(chartRef.current);
    // 定义图表配置项
    let options = {
      title: {
        //   text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    }
    // 设置图表配置项
    chart.setOption(options);
    // 在组件卸载时销毁图表实例
    return () => {
      chart.dispose();
    };
  }, [])
  return (
    <div className='dv_project_home_content'>
      <div style={{width: '50%'}}>
        <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
        <div>对话</div>
      </div>
      <div style={{width: '50%'}}>
      <Calendar />
      </div>
    </div>
  )
}
