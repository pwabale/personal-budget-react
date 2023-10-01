import React, { Component } from 'react';
import axios from 'axios';
import * as d3 from 'd3';

class D3Chart extends Component {
  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
  }

  componentDidMount() {
    axios.get('http://localhost:4000/budget')
      .then(res => {
        const data = res.data.myBudget;

        const width = 400;
        const height = 400;
        const radius = Math.min(width, height) / 2;

        const svg = d3.select(this.svgRef.current)
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', `translate(${width / 2},${height / 2})`);

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);

        const pie = d3.pie()
          .value(d => d.budget);

        const arcs = pie(data);

        svg.selectAll('path')
          .data(arcs)
          .enter().append('path')
          .attr('d', arc)
          .attr('fill', (d, i) => color(i))
          .append('title')
          .text(d => `${d.data.title}: $${d.data.budget}`);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h1>D3.js Pie Chart</h1>
        <svg ref={this.svgRef}></svg>
      </div>
    );
  }
}

export default D3Chart;