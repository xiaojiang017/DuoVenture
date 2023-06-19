import React, { useRef, useEffect, useState } from 'react'
import * as echarts from 'echarts'
import { Calendar, List } from 'antd';
import moment from 'moment';
import { useHistory } from 'react-router-dom'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15', 'Item 16', 'Item 17', 'Item 18', 'Item 19', 'Item 20'];

export default () => {
  const chartRef = useRef(null); // 用于保存图表实例的引用
  const history = useHistory()
  const [pause, setPause] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = document.getElementById('scrollContainer');
    const containerHeight = scrollContainer.clientHeight;
    const contentHeight = scrollContainer.scrollHeight;

    const scroll = () => {
      if (!pause) {
        setScrollPosition(scrollContainer.scrollTop);

        if (scrollContainer.scrollTop + containerHeight >= contentHeight) {
          scrollContainer.scrollTop = 0;
        } else {
          scrollContainer.scrollTop += 1;
        }
      }
    };

    const interval = setInterval(scroll, 50);
    return () => {
      clearInterval(interval);
    };
  }, [pause]);

  const handleMouseEnter = () => {
    setPause(true);
  };

  const handleMouseLeave = () => {
    setPause(false);
  };

  useEffect(() => {
    // 创建图表实例
    const chart = echarts.init(chartRef.current);
    // 定义图表配置项
    let options = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: [moment().subtract(6, 'days').format("YYYY-MM-DD"), moment().subtract(5, 'days').format("YYYY-MM-DD"), moment().subtract(4, 'days').format("YYYY-MM-DD"), moment().subtract(3, 'days').format("YYYY-MM-DD"), moment().subtract(2, 'days').format("YYYY-MM-DD"), moment().subtract(1, 'days').format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")],
      },
      yAxis: {},
      series: [
        {
          name: "收入",
          type: "line",
          data: [5, 20, 36, 10, 10, 20, 10],
        },
      ],
    }
    // 点击事件处理函数
    const handleClick = (params) => {
        console.log('点击了柱状图系列', params);
        history.push({ pathname: '/project/earning' , params})
        // 在这里执行你的点击事件逻辑
    };
    chart.on('click', handleClick);
    // 设置图表配置项
    chart.setOption(options);
    // 在组件卸载时销毁图表实例
    return () => {
      chart.dispose();
    };
  }, [])
  return (
    <div className='dv_project_home_content'>
      <div style={{ width: '50%' }}>
        <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
        <List
          id="scrollContainer"
          className="dv_project_scroll-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          size="large"
          bordered
          dataSource={items}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
      <div style={{ width: '50%' }}>
        <Calendar />
      </div>
    </div>
  )
}
