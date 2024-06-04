import { Component, MouseEvent } from 'react';

interface ZoomedImageProps {
  img: string;
}

class ZoomedImage extends Component<ZoomedImageProps> {
  state = {
    backgroundImage: `url(${this.props.img})`,
    backgroundPosition: "0% 0%"
  };

  handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = (e.target as HTMLDivElement).getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    this.setState({ backgroundPosition: `${x}% ${y}%` });
  };

  render() {
    return (
      <>
      <style>{`
        figure:hover img {
          opacity: 0;
        }
      `}</style>
      <figure className="w-[600px] bg-no-repeat bg-cover h-[500px] m-0 rounded-3xl" onMouseMove={this.handleMouseMove} style={this.state}>
        <img className="w-full h-full object-cover pointer-events-none block" src={this.props.img} alt="Zoomable" />
      </figure>
      </> 
    );
  }
}

export default ZoomedImage;
