import React from 'react';
import LoadingSVG from '../../assets/svg/loading.svg';


class LoadingComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <section className="loading">
        <img className="loading-img" src={LoadingSVG} alt="" />
        <h1>Загрузка...</h1>
      </section>
    )
  }
}

export default LoadingComponent;