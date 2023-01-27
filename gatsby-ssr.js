const React = require("react")

const HeadComponents = [
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7132012280241253"
    crossOrigin="anonymous"
  />,
]

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}
