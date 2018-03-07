import React from 'react'

const CSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

CSS.defaultProps = {
  css: `
    * { box-sizing: border-box }
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.5;
      background-color: black;
      
    }
  `
}

export default CSS
