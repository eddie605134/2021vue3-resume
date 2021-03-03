import * as echarts from 'echarts/core';
import { useSkillData } from './useSkillData';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer]);

const useBar = (element) => {
	const barChart = echarts.init(element)
	const { skills } = useSkillData()
	const setOption = params => {

		// 透過傳入的route params篩選並注入echart
		const [ slectSkill ] = skills.filter(obj=> obj.key == params)
		
		const options = {
			xAxis: {
				type: 'category',
				data: slectSkill?.barData?.name, 
				color: '#32475B',
				axisLabel: {
					show: true,
					interval: 0,  
					rotate: -22,
					fontSize: 20,
				},
			},
			yAxis: {
				type: 'value',
				max: 10,
				min: 1
			},
			series: [{
				data: slectSkill?.barData?.value,
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					color: (params)=>{
						let objColor = [];
						objColor = slectSkill.barData?.value.map(item=> {
							if (item >= 7) {
								return '#42b983';
							}else if (item > 3) {
								return '#5ED3F3';
							} else {
								return '#d4bb29';
							}
							
						})
						return objColor[params.dataIndex]
					}
				},
				showBackground: true,
				backgroundStyle: {
					color: 'gray'
				}
			}]
		};
		
		return barChart.setOption(options)
	}

	const resize = () => barChart.resize()

	return { setOption, resize }
}

export { useBar }