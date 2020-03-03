import React, { Component } from "react";

class App extends Component {
  static defaultProps = {
    width: "40%",
    height: "175px",
    url: "https://soundcloud.com/lukkas-2de/maroon-5-memories-lukkas-remix",
    autoPlay: true,
    hideRelated: true, // hides details when paused
    showComments: true,
    showUser: true,
    showPlayCount: true,
    visual: false, // when true hides play count showPlayCount
    color: "FB5500"
  };

  render() {
    const {
      url,
      width,
      height,
      autoPlay,
      hideRelated,
      showComments,
      showUser,
      showPlayCount,
      visual,
      color
    } = this.props;

    const src = `https://w.soundcloud.com/player/?url=${url}&amp;color=${color}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_playcount=${showPlayCount}&amp;visual=${visual}&amp;show_teaser=false`;

    return (
      <iframe
        width={width}
        height={height}
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={src}
      />
    );
  }
}

export default App;
