import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";

export default class IdxMapSearchWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { depsLoaded: false };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      if (window.L && window.MQ) {
        this.setState({ depsLoaded: true });
        clearInterval(intervalId);
      }
    });
  }

  //componentWillUnmount() {
  //  let target = document.getElementById("#del-container");
  //  if (target)
  //    target.childNodes.forEach(child => {
  //      if (child.id != "idxwidgetsrc-15999") {
  //        target.removeChild(child);
  //      }
  //    });
  //}

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Map Search - MaxCardo ltd</title>
          <script
            type="text/javascript"
            src="https://d1qfrurkpai25r.cloudfront.net/graphical/javascript/leaflet.js?auid=Xj3syX8AAAEAAFGPci4AAAAM"
          ></script>
          <script
            type="text/javascript"
            src="https://d1qfrurkpai25r.cloudfront.net/graphical/frontend/javascript/maps/plugins/leaflet.draw.js?auid=Xj3syX8AAAEAAFGPci4AAAAM"
          ></script>
          <script
            type="text/javascript"
            src="https://www.mapquestapi.com/sdk/leaflet/v2.2/mq-map.js?key=Gmjtd%7Cluub2h0rn0%2Crx%3Do5-lz1nh"
          ></script>
          <link
            rel="stylesheet"
            href="//d1qfrurkpai25r.cloudfront.net/graphical/css/leaflet-1.000.css?auid=Xj3syX8AAAEAAFGPci4AAAAM"
          />
          <link
            rel="stylesheet"
            href="//d1qfrurkpai25r.cloudfront.net/graphical/css/leaflet.label.css?auid=Xj3syX8AAAEAAFGPci4AAAAM"
          />
          {this.state.depsLoaded ? (
            <script
              charset="UTF-8"
              type="text/javascript"
              src="http://tlgmgmt.idxbroker.com/idx/mapwidgetjs.php?widgetid=15999"
            ></script>
          ) : (
            ""
          )}
        </Helmet>
        <div id="del-container">
          <div id="idxwidgetsrc-15999" />
        </div>
      </Fragment>
    );
  }
}
